import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Read dictionaries from JSON
const dictPath = join(root, 'lib', 'dictionaries.json');
if (!existsSync(dictPath)) {
  console.error('Run: node -e "' +
    "const fs=require('fs');" +
    "const ts=fs.readFileSync('lib/dictionaries.ts','utf8');" +
    "let js=ts.replace(/export type.*?;/g,'').replace(/export const/,'const').replace(/as const/g,'');" +
    "eval('global.d='+js.slice(js.indexOf('{')));" +
    "fs.writeFileSync('lib/dictionaries.json',JSON.stringify(global.d,null,2));" +
    '"');
  process.exit(1);
}
const dicts = JSON.parse(readFileSync(dictPath, 'utf8'));
const en = dicts.en;
const es = dicts.es;

function renderTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join('');
}

function renderCaseStudyImages(index) {
  const images = {
    0: [
      { src: './images/inventory-1.jpg', alt: 'University inventory dashboard view 1' },
      { src: './images/inventory-2.jpg', alt: 'University inventory dashboard view 2' },
      { src: './images/inventory-3.jpg', alt: 'University inventory dashboard view 3' },
      { src: './images/inventory-4.jpg', alt: 'Power Query automation behind the inventory system' },
      { src: './images/n8n-inventory.jpg', alt: 'n8n workflow automation for inventory management' },
    ],
    1: [
      { src: './images/chatbi.jpg', alt: 'Secure GenAI ChatBI prototype interface' },
    ],
  };
  const imgs = images[index];
  if (!imgs || imgs.length === 0) return '';
  if (imgs.length === 1) {
    return `<figure class="case-image"><img src="${imgs[0].src}" alt="${imgs[0].alt}" loading="lazy" width="700" height="400" decoding="async"/></figure>`;
  }
  const grid = imgs.map(img => `<figure class="case-image"><img src="${img.src}" alt="${img.alt}" loading="lazy" width="350" height="200" decoding="async"/></figure>`).join('');
  return `<div class="case-image-grid">${grid}</div>`;
}

function renderRoleImage(index) {
  const img = { 1: { src: './images/n8n-compliance.jpg', alt: 'n8n automation workflow for compliance data analysis' } }[index];
  if (!img) return '';
  return `<figure class="case-image mt-5 max-w-xl"><img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="340" decoding="async"/></figure>`;
}

function renderCaseStudies(lang) {
  const data = lang === 'en' ? en : es;
  return data.caseStudies.items.map((item, i) => {
    const expanded = i === 0 ? ' expanded' : '';
    const toggleIcon = i === 0 ? '−' : '+';
    return `
    <div class="case-study reveal-up" style="transition-delay:${i * 120}ms">
      <div class="border-t pt-6">
        <button class="case-toggle w-full text-left" aria-expanded="${i === 0}" data-index="${i}">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="case-title text-lg md:text-xl font-semibold mb-2">${item.title}</h3>
              <div class="flex flex-wrap gap-2">${renderTags(item.tags)}</div>
            </div>
            <span class="toggle-icon text-2xl leading-none mt-1 shrink-0">${toggleIcon}</span>
          </div>
        </button>
        <div class="case-content${expanded}">
          <div class="case-content-inner mt-6 space-y-4 max-w-prose">
            <div><p class="text-label mb-1.5">Challenge</p><p class="text-sm md:text-base leading-relaxed">${item.challenge}</p></div>
            <div><p class="text-label mb-1.5">Build</p><p class="text-sm md:text-base leading-relaxed">${item.build}</p></div>
            <div><p class="text-label mb-1.5">Result</p><p class="text-sm md:text-base leading-relaxed">${item.result}</p></div>
            ${renderCaseStudyImages(i) ? `<div class="pt-4">${renderCaseStudyImages(i)}</div>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderExperience(lang) {
  const data = lang === 'en' ? en : es;
  return data.experience.roles.map((role, i) => `
    <div class="role-entry reveal-up" style="transition-delay:${i * 100}ms">
      <div class="border-t pt-6">
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
          <h3 class="text-lg md:text-xl font-semibold">${role.title}</h3>
          <span class="text-xs text-soft-ash uppercase tracking-widest period">${role.period}</span>
        </div>
        <p class="text-sm text-soft-ash mb-3">${role.company}</p>
        <ul class="space-y-2 max-w-prose">
          ${role.bullets.map(b => `<li class="text-sm md:text-base leading-relaxed">${b}</li>`).join('')}
        </ul>
        ${renderRoleImage(i)}
      </div>
    </div>`).join('');
}

function renderPhilosophy(lang) {
  const data = lang === 'en' ? en : es;
  const cats = data.philosophy.categories;
  const keys = Object.keys(cats);
  return `
    <div class="reveal-up"><div class="mb-12 md:mb-16"><p class="text-label mb-3">${data.philosophy.title}</p><p class="text-base md:text-lg leading-relaxed max-w-prose">${data.philosophy.text}</p></div></div>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      ${keys.map((key, i) => `<div class="reveal-up" style="transition-delay:${i * 100}ms"><div><h3 class="text-sm font-semibold mb-3 uppercase tracking-widest">${cats[key].title}</h3><ul class="space-y-1.5">${cats[key].items.map(item => `<li class="text-sm text-soft-ash">${item}</li>`).join('')}</ul></div></div>`).join('')}
    </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Fernando Pérez — Data Operations & Systems Architect</title>
<meta name="description" content="Portfolio of Fernando Pérez, an outcome-driven Systems & Data Architect specializing in backend automation, BI architecture, and RevOps workflows."/>
<link rel="icon" href="./favicon.svg" type="image/svg+xml"/>
<style>
*,*:after,*:before{box-sizing:border-box;border:0 solid #e5e7eb}
html{scroll-behavior:smooth;line-height:1.5;-webkit-text-size-adjust:100%;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
body{margin:0;background-color:oklch(97% .005 80);color:oklch(22% .015 80);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"kern" 1,"liga" 1;text-rendering:optimizeLegibility}
h1,h2,h3,h4{margin:0;text-wrap:balance}p{margin:0;text-wrap:pretty}a{color:inherit;text-decoration:none}button{font-family:inherit;cursor:pointer;background:none;border:none;padding:0}ul,ol{list-style:none;margin:0;padding:0}img{display:block;max-width:100%;height:auto}
::selection{background-color:oklch(52% .13 250/.2)}:focus-visible{outline:2px solid oklch(52% .13 250);outline-offset:2px}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.text-label{font-size:.75rem;font-weight:500;text-transform:uppercase;color:oklch(55% .01 80);letter-spacing:.08em}
.section-padding{padding:4rem 1.5rem}@media(min-width:768px){.section-padding{padding:6rem 3rem}}@media(min-width:1024px){.section-padding{padding:8rem 4rem}}
.mx-auto{margin-left:auto;margin-right:auto}.max-w-6xl{max-width:72rem}.max-w-prose{max-width:70ch}.max-w-xl{max-width:36rem}
.mt-5{margin-top:1.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-10{margin-bottom:2.5rem}.mb-12{margin-bottom:3rem}.mt-1{margin-top:.25rem}.mt-6{margin-top:1.5rem}.pt-6{padding-top:1.5rem}.pt-4{padding-top:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pt-20{padding-top:5rem}
.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}
.space-y-2>:not([hidden])~:not([hidden]){margin-top:.5rem}.space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}.space-y-8>:not([hidden])~:not([hidden]){margin-top:2rem}.space-y-10>:not([hidden])~:not([hidden]){margin-top:2.5rem}
.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.min-h-screen{min-height:100vh}.w-full{width:100%}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.text-left{text-align:left}
.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}
.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}
.border-t{border-top-width:1px;border-color:oklch(55% .01 80/.2)}.bg-warm-ivory{background-color:oklch(97% .005 80)}.bg-warm-surface{background-color:oklch(93% .006 80)}.bg-warm-charcoal{background-color:oklch(22% .015 80)}
.text-warm-charcoal{color:oklch(22% .015 80)}.text-warm-ivory{color:oklch(97% .005 80)}.text-soft-ash{color:oklch(55% .01 80)}.text-soft-ash\\/50{color:oklch(55% .01 80/.5)}.text-soft-ash\\/60{color:oklch(55% .01 80/.6)}.text-soft-ash\\/70{color:oklch(55% .01 80/.7)}.text-warm-charcoal\\/80{color:oklch(22% .015 80/.8)}
.fixed{position:fixed}.top-0{top:0}.left-0{left:0}.right-0{right:0}.z-50{z-index:50}
.case-image{background-color:oklch(96% .004 80);padding:4px}
.case-image-grid{display:grid;grid-template-columns:1fr;gap:.75rem}@media(min-width:640px){.case-image-grid{grid-template-columns:repeat(2,1fr)}}
.tag{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:oklch(55% .01 80/.7);border:1px solid oklch(55% .01 80/.2);padding:.125rem .5rem}
.reveal-up{opacity:0;transform:translateY(40px);transition:opacity 700ms cubic-bezier(.25,1,.5,1),transform 700ms cubic-bezier(.25,1,.5,1)}.reveal-up.reveal-up-visible{opacity:1;transform:translateY(0)}
.hero-entrance{opacity:0;transform:translateY(30px);animation:hero-in 600ms cubic-bezier(.25,1,.5,1) forwards}.hero-entrance-delay-1{animation-delay:100ms}.hero-entrance-delay-2{animation-delay:250ms}.hero-entrance-delay-3{animation-delay:400ms}.hero-entrance-delay-4{animation-delay:550ms}
@keyframes hero-in{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
.case-content{display:grid;grid-template-rows:0fr;transition:grid-template-rows 500ms cubic-bezier(.25,1,.5,1)}.case-content.expanded{grid-template-rows:1fr}.case-content-inner{overflow:hidden}
.btn-lift{transition:transform 200ms cubic-bezier(.25,1,.5,1),background-color 150ms ease-out,border-color 150ms ease-out,color 150ms ease-out}.btn-lift:hover{transform:translateY(-2px)}
.nav-link{position:relative}.nav-link::after{content:'';position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:3px;height:3px;border-radius:50%;background-color:oklch(52% .13 250);opacity:0;transition:opacity 200ms ease-out}.nav-link.active::after{opacity:1}
@media(min-width:640px){.sm\\:flex-row{flex-direction:row}}
@media(min-width:768px){.md\\:mb-14{margin-bottom:3.5rem}.md\\:mb-16{margin-bottom:4rem}.md\\:flex{display:flex}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-baseline{align-items:baseline}.md\\:justify-between{justify-content:space-between}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:text-5xl{font-size:3.75rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}}
@media(min-width:1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:px-16{padding-left:4rem;padding-right:4rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1}}
</style>
</head>
<body>

<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-colors duration-200">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
    <a href="#hero" class="text-sm font-semibold tracking-tight text-warm-charcoal transition-colors duration-150" data-i18n="hero.name">${en.hero.name}</a>
    <div class="flex items-center gap-6">
      <ul class="hidden md:flex items-center gap-6">
        <li><a href="#hero" class="nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-150" data-i18n="nav.home">${en.nav.home}</a></li>
        <li><a href="#philosophy" class="nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-150" data-i18n="nav.philosophy">${en.nav.philosophy}</a></li>
        <li><a href="#case-studies" class="nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-150" data-i18n="nav.caseStudies">${en.nav.caseStudies}</a></li>
        <li><a href="#experience" class="nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-150" data-i18n="nav.experience">${en.nav.experience}</a></li>
        <li><a href="#contact" class="nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-150" data-i18n="nav.contact">${en.nav.contact}</a></li>
      </ul>
      <button id="lang-toggle" class="text-xs font-medium uppercase tracking-widest text-soft-ash transition-colors duration-150" style="letter-spacing:.08em" aria-label="Toggle language">
        <span id="lang-en" class="text-warm-charcoal font-semibold">EN</span>
        <span class="mx-1 text-soft-ash/50">/</span>
        <span id="lang-es">ES</span>
      </button>
    </div>
  </nav>
</header>

<main class="min-h-screen">

<section id="hero" class="flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12 lg:px-16">
  <div class="mx-auto max-w-6xl w-full">
    <div class="max-w-prose">
      <p class="hero-entrance hero-entrance-delay-1 text-label mb-4" data-i18n="hero.role">${en.hero.role}</p>
      <h1 class="hero-entrance hero-entrance-delay-2 text-5xl font-bold tracking-tight text-warm-charcoal md:text-5xl lg:text-7xl mb-6" style="line-height:1.05" data-i18n="hero.name">${en.hero.name}</h1>
      <p class="hero-entrance hero-entrance-delay-3 text-base md:text-lg leading-relaxed text-warm-charcoal/80 mb-10 max-w-prose" data-i18n="hero.summary">${en.hero.summary}</p>
      <div class="hero-entrance hero-entrance-delay-4 flex flex-wrap gap-4">
        <a href="./cv.pdf" download class="btn-lift inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest bg-warm-charcoal text-warm-ivory transition-colors duration-150" style="letter-spacing:.08em" data-i18n="hero.downloadResume">${en.hero.downloadResume}</a>
        <a href="https://github.com/Rimuru022" target="_blank" rel="noopener noreferrer" class="btn-lift inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest border border-warm-charcoal text-warm-charcoal transition-colors duration-150" style="letter-spacing:.08em" data-i18n="hero.viewGithub">${en.hero.viewGithub}</a>
      </div>
    </div>
  </div>
</section>

<section id="philosophy" class="section-padding bg-warm-surface">
  <div class="mx-auto max-w-6xl">${renderPhilosophy('en')}</div>
</section>

<section id="case-studies" class="section-padding bg-warm-ivory">
  <div class="mx-auto max-w-6xl">
    <div class="reveal-up"><p class="text-label mb-10 md:mb-14" data-i18n="caseStudies.title">${en.caseStudies.title}</p></div>
    <div class="space-y-8">${renderCaseStudies('en')}</div>
  </div>
</section>

<section id="experience" class="section-padding bg-warm-surface">
  <div class="mx-auto max-w-6xl">
    <div class="reveal-up"><p class="text-label mb-10 md:mb-14" data-i18n="experience.title">${en.experience.title}</p></div>
    <div class="space-y-10">${renderExperience('en')}</div>
  </div>
</section>

<section id="contact" class="section-padding bg-warm-ivory">
  <div class="mx-auto max-w-6xl">
    <div class="reveal-up"><p class="text-label mb-10 md:mb-14" data-i18n="nav.contact">${en.nav.contact}</p></div>
    <div class="max-w-prose space-y-8">
      <div class="reveal-up" style="transition-delay:100ms">
        <div><p class="text-label mb-2">Education</p><p class="text-base md:text-lg leading-relaxed text-warm-charcoal/80" data-i18n="contact.education">${en.contact.education}</p></div>
      </div>
      <div class="reveal-up" style="transition-delay:200ms">
        <div class="flex flex-col sm:flex-row gap-6">
          <a href="mailto:${en.contact.email}" class="group inline-flex items-center gap-2 text-sm md:text-base text-warm-charcoal transition-colors duration-150"><span class="text-label" data-i18n="contact.emailLabel">${en.contact.emailLabel}</span><span class="font-medium">${en.contact.emailPlaceholder}</span></a>
          <a href="https://${en.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-sm md:text-base text-warm-charcoal transition-colors duration-150"><span class="text-label" data-i18n="contact.linkedinLabel">${en.contact.linkedinLabel}</span><span class="font-medium">${en.contact.linkedinPlaceholder}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<script>
var LANG={en:${JSON.stringify(en)},es:${JSON.stringify(es)}};
var currentLang='en';
function setLang(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.getElementById('lang-en').className=lang==='en'?'text-warm-charcoal font-semibold':'';
  document.getElementById('lang-es').className=lang==='es'?'text-warm-charcoal font-semibold':'';
  var d=LANG[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key=el.getAttribute('data-i18n');
    var keys=key.split('.');
    var val=d;
    for(var i=0;i<keys.length;i++){val=val[keys[i]];if(!val)return}
    el.textContent=val;
  });
  var navLinks=document.querySelectorAll('.nav-link');
  var navKeys=['home','philosophy','caseStudies','experience','contact'];
  navLinks.forEach(function(link,i){link.textContent=d.nav[navKeys[i]]});
  document.querySelector('#site-header a').textContent=d.hero.name;
  d.caseStudies.items.forEach(function(item,i){
    var study=document.querySelectorAll('.case-study')[i];
    if(!study)return;
    study.querySelector('.case-title').textContent=item.title;
    var tags=study.querySelectorAll('.tag');
    item.tags.forEach(function(t,j){if(tags[j])tags[j].textContent=t});
    var paragraphs=study.querySelectorAll('.case-content-inner p.text-sm');
    if(paragraphs[0])paragraphs[0].textContent=item.challenge;
    if(paragraphs[1])paragraphs[1].textContent=item.build;
    if(paragraphs[2])paragraphs[2].textContent=item.result;
  });
  d.experience.roles.forEach(function(role,i){
    var entry=document.querySelectorAll('.role-entry')[i];
    if(!entry)return;
    entry.querySelector('h3').textContent=role.title;
    entry.querySelector('.period').textContent=role.period;
    entry.querySelector('p.text-soft-ash').textContent=role.company;
    var bullets=entry.querySelectorAll('ul li');
    role.bullets.forEach(function(b,j){if(bullets[j])bullets[j].textContent=b});
  });
  var philSection=document.getElementById('philosophy');
  var philTitle=philSection.querySelector('.text-label');
  if(philTitle)philTitle.textContent=d.philosophy.title;
  var philText=philSection.querySelector('.max-w-prose');
  if(philText)philText.textContent=d.philosophy.text;
  var catTitles=philSection.querySelectorAll('h3.text-sm');
  var catLists=philSection.querySelectorAll('ul.space-y-1\\.5');
  Object.keys(d.philosophy.categories).forEach(function(key,i){
    var cat=d.philosophy.categories[key];
    if(catTitles[i])catTitles[i].textContent=cat.title;
    if(catLists[i])catLists[i].innerHTML=cat.items.map(function(item){return '<li class="text-sm text-soft-ash">'+item+'</li>'}).join('');
  });
}
document.getElementById('lang-toggle').addEventListener('click',function(){setLang(currentLang==='en'?'es':'en')});
document.querySelectorAll('.case-toggle').forEach(function(btn){
  btn.addEventListener('click',function(){
    var content=this.parentElement.querySelector('.case-content');
    var icon=this.querySelector('.toggle-icon');
    var isExpanded=content.classList.contains('expanded');
    content.classList.toggle('expanded');
    icon.textContent=isExpanded?'+':'−';
    this.setAttribute('aria-expanded',!isExpanded);
  });
});
var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('reveal-up-visible');observer.unobserve(entry.target)}})},{threshold:0.15,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal-up').forEach(function(el){observer.observe(el)});
var navObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var id=entry.target.id;document.querySelectorAll('.nav-link').forEach(function(link){link.classList.remove('active');if(link.getAttribute('href')==='#'+id)link.classList.add('active')}})})},{rootMargin:'-40% 0px -55% 0px'});
['hero','philosophy','case-studies','experience','contact'].forEach(function(id){var el=document.getElementById(id);if(el)navObserver.observe(el)});
var header=document.getElementById('site-header');
window.addEventListener('scroll',function(){if(window.scrollY>50){header.style.backgroundColor='oklch(93% .006 80 / .95)'}else{header.style.backgroundColor='transparent'}},{passive:true});
document.querySelectorAll('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(e){e.preventDefault();var target=document.querySelector(this.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth'})})});
</script>
</body>
</html>`;

const outPath = join(root, 'dist', 'index.html');
const outDir = dirname(outPath);
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, html);
console.log(`Generated ${outPath} (${Math.round(html.length / 1024)}KB)`);
