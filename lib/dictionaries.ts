export type Locale = 'en' | 'es';

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      philosophy: 'Philosophy',
      caseStudies: 'Case Studies',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      name: 'Fernando Pérez',
      role: 'Integration & DataOps Engineer | Remote (CST / Mexico) · U.S. work authorized',
      summary: 'I bridge the gap between messy business processes and deterministic data. I specialize in backend automation, BI architecture, and RevOps workflows: turning 30-hour manual tasks into 5-minute automated systems using strict data governance.',
      downloadResume: 'Download Resume (.pdf)',
      viewGithub: 'View GitHub',
    },
    philosophy: {
      title: 'Engineering Philosophy & Stack',
      text: 'My core engineering principle is doing more with less. Whether optimizing cloud infrastructure to cut AI token usage by 70% or designing self-hosted homelabs running multiple isolated LXC containers on just 8GB of RAM, I build lean, secure, and highly leveraged systems.',
      categories: {
        data: {
          title: 'Data & BI',
          items: ['SQL (PostgreSQL, MySQL)', 'Power Query', 'Power BI', 'SAP Fiori / ERP', 'Excel Advanced'],
        },
        automation: {
          title: 'Automation & Ops',
          items: ['n8n', 'FunctionGraph (Serverless)', 'Apify', 'Custom REST APIs'],
        },
        infrastructure: {
          title: 'Infrastructure & Security',
          items: ['Proxmox', 'LXC / VMs', 'Cloudflare Tunnels', 'Nginx Proxy Manager', 'SIEM (Splunk, Wazuh)', 'AdGuard DNS'],
        },
        languages: {
          title: 'Languages',
          items: ['Python', 'Node.js (TypeScript / Zod)'],
        },
      },
    },
    caseStudies: {
      title: 'Case Studies',
      items: [
        {
          title: 'Low-Friction Inventory & Procurement Automation',
          challenge: 'University departments needed an inventory tracking system, but the end-users were non-technical. Deploying a complex custom Python script or a strict SQL database would create a massive maintenance bottleneck once handed over.',
          build: 'Engineered a deterministic automation flow using n8n. Used Google Sheets as the visual state-management tool so non-technical users could easily read and edit thresholds. The flow compares weekly forms against the baseline and triggers automated procurement alerts.',
          result: 'Created a self-sustaining system that requires zero technical maintenance. Users simply fill out a form, and the architecture handles data sanitization, math, and email routing automatically.',
          tags: ['n8n', 'Workflow Automation', 'System Design'],
        },
        {
          title: 'Secure GenAI "ChatBI" for Telecommunications (POC)',
          challenge: 'A telecom client needed a way for non-technical managers to query complex SQL databases using natural language, but had strict constraints: a 3-day delivery window and a zero-tolerance policy for database modification or SQL injection.',
          build: 'Developed a Text-to-SQL architecture using Llama 3.1 (8B). Overcame the lack of vector databases by injecting robust dynamic schema context directly into system prompts. Implemented strict guardrails, parametrized read-only queries, and rollback procedures.',
          result: 'Delivered a functional, highly accurate prototype in 72 hours that dynamically generated graphs and insights from Huawei Cloud RDS and GaussDB without hallucinations or security breaches.',
          tags: ['LLMs', 'SQL', 'System Prompts', 'Backend Security'],
        },
        {
          title: 'Enterprise Business Intelligence & Automated Forecasting',
          challenge: 'A commercial division at BP (Castrol) was losing roughly 30 hours per week manually extracting flat files from SAP ERP, transforming data in Excel, and building static PowerPoint presentations to track sales KPIs and distributor forecasts.',
          build: 'Architected an automated Power BI dashboard fed by a custom Power Query pipeline. The pipeline automatically ingests and cleans SAP data exports, standardizes fields, and provides dynamic filtering for over 15+ daily users.',
          result: 'Reduced reporting cycle time by 80% (from days to under 5 hours). Allowed a single analyst to execute the workload of three, while maintaining a +/- 15% forecast accuracy to prevent stockouts.',
          tags: ['Power BI', 'Power Query', 'SAP ERP', 'Data Operations'],
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      roles: [
        {
          title: 'Data & Sales Strategy Analyst',
          company: 'Castrol (BP)',
          period: 'Sep 2024 – Mar 2025',
          bullets: [
            'Centralized 3 critical data sources into automated dashboards, saving ~30 manual hours per week.',
            'Managed distributor communications and sales forecasts based on historical SKUs.',
          ],
        },
        {
          title: 'Regulatory & Compliance Ops',
          company: 'Castrol (BP)',
          period: 'Mar 2025 – Sep 2025',
          bullets: [
            'Managed certification procurement and compliance analysis for 15+ critical SKUs based on NOMs.',
            'Automated the sanitization of CSV learning-campus datasets using n8n to generate strategic HR reports.',
          ],
        },
        {
          title: 'Cloud Solutions Architect (Intern)',
          company: 'Huawei Cloud',
          period: '2024',
          bullets: [
            'Architected serverless data pipelines (FunctionGraph) pushing 200 logs/5min from OBS to SIEMs (Splunk / Wazuh).',
            'Optimized client POC architectures (Spot instances, auto-scaling), estimating compute savings up to 35% and AI token reduction up to 70%.',
            'Translated complex telecom concepts (5G NFV / SDN, Multitenancy) into digestible analogies for non-technical stakeholders.',
          ],
        },
      ],
    },
    contact: {
      education: 'B.S. Systems & Telecommunications Engineering – Universidad Iberoamericana (Expected May 2027)',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      email: 'fernandoperezgonzalez01@gmail.com',
      linkedin: 'www.linkedin.com/in/fernandopgonzalez',
      emailPlaceholder: 'fernandoperezgonzalez01@gmail.com',
      linkedinPlaceholder: 'linkedin.com/in/fernandopgonzalez',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      philosophy: 'Filosofía',
      caseStudies: 'Casos de Estudio',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      name: 'Fernando Pérez',
      role: 'Arquitecto de Operaciones de Datos y Sistemas | Remoto (CST / México) · Autorizado para trabajar en EE.UU.',
      summary: 'Cierro la brecha entre procesos de negocio caóticos y datos deterministas. Me especializo en automatización de backend, arquitectura de BI y flujos de trabajo de RevOps: convierto tareas manuales de 30 horas en sistemas automatizados de 5 minutos mediante gobernanza estricta de datos.',
      downloadResume: 'Descargar CV (.pdf)',
      viewGithub: 'Ver GitHub',
    },
    philosophy: {
      title: 'Filosofía de Ingeniería y Stack',
      text: 'Mi principio de ingeniería central es hacer más con menos. Ya sea optimizando infraestructura en la nube para reducir el uso de tokens de IA en un 70% o diseñando homelabs autoalojados ejecutando múltiples contenedores LXC aislados en solo 8GB de RAM, construyo sistemas lean, seguros y altamente apalancados.',
      categories: {
        data: {
          title: 'Datos y BI',
          items: ['SQL (PostgreSQL, MySQL)', 'Power Query', 'Power BI', 'SAP Fiori / ERP', 'Excel Avanzado'],
        },
        automation: {
          title: 'Automatización y Ops',
          items: ['n8n', 'FunctionGraph (Serverless)', 'Apify', 'APIs REST Personalizadas'],
        },
        infrastructure: {
          title: 'Infraestructura y Seguridad',
          items: ['Proxmox', 'LXC / VMs', 'Cloudflare Tunnels', 'Nginx Proxy Manager', 'SIEM (Splunk, Wazuh)', 'AdGuard DNS'],
        },
        languages: {
          title: 'Lenguajes',
          items: ['Python', 'Node.js (TypeScript / Zod)'],
        },
      },
    },
    caseStudies: {
      title: 'Casos de Estudio',
      items: [
        {
          title: 'Automatización de Bajo Fricción para Inventario y Compras',
          challenge: 'Los departamentos universitarios necesitaban un sistema de rastreo de inventario, pero los usuarios finales no eran técnicos. Desplegar un script complejo de Python personalizado o una base de datos SQL estricta crearía un cuello de botella de mantenimiento masivo una vez transferido.',
          build: 'Diseñé un flujo de automatización determinista usando n8n. Utilicé Google Sheets como herramienta visual de gestión de estado para que usuarios no técnicos pudieran leer y editar umbrales fácilmente. El flujo compara formularios semanales contra la línea base y activa alertas de compra automatizadas.',
          result: 'Creé un sistema autosuficiente que requiere cero mantenimiento técnico. Los usuarios simplemente llenan un formulario, y la arquitectura maneja la sanitización de datos, cálculos y enrutamiento de correos automáticamente.',
          tags: ['n8n', 'Automatización de Flujos', 'Diseño de Sistemas'],
        },
        {
          title: 'GenAI Seguro "ChatBI" para Telecomunicaciones (POC)',
          challenge: 'Un cliente de telecomunicaciones necesitaba una forma de que gerentes no técnicos consultaran bases de datos SQL complejas usando lenguaje natural, pero tenía restricciones estrictas: una ventana de entrega de 3 días y una política de tolerancia cero para modificación de bases de datos o inyección SQL.',
          build: 'Desarrollé una arquitectura de Texto a SQL usando Llama 3.1 (8B). Superé la falta de bases de datos vectoriales inyectando contexto de esquema dinámico robusto directamente en los prompts del sistema. Implementé guardrails estrictos, consultas parametrizadas de solo lectura y procedimientos de rollback.',
          result: 'Entregué un prototipo funcional y altamente preciso en 72 horas que generaba dinámicamente gráficos e insights desde Huawei Cloud RDS y GaussDB sin alucinaciones ni brechas de seguridad.',
          tags: ['LLMs', 'SQL', 'System Prompts', 'Seguridad de Backend'],
        },
        {
          title: 'Inteligencia de Negocios Empresarial y Pronóstico Automatizado',
          challenge: 'Una división comercial de BP (Castrol) perdía aproximadamente 30 horas por semana extrayendo manualmente archivos planos de SAP ERP, transformando datos en Excel y construyendo presentaciones estáticas de PowerPoint para rastrear KPIs de ventas y pronósticos de distribuidores.',
          build: 'Arquitecté un dashboard automatizado de Power BI alimentado por un pipeline personalizado de Power Query. El pipeline ingiere y limpia automáticamente exportaciones de datos de SAP, estandariza campos y proporciona filtrado dinámico para más de 15 usuarios diarios.',
          result: 'Reduje el tiempo del ciclo de reporteo en un 80% (de días a menos de 5 horas). Permití que un solo analista ejecutara la carga de trabajo de tres, manteniendo una precisión de pronóstico de +/- 15% para prevenir desabastecimiento.',
          tags: ['Power BI', 'Power Query', 'SAP ERP', 'Operaciones de Datos'],
        },
      ],
    },
    experience: {
      title: 'Experiencia Profesional',
      roles: [
        {
          title: 'Analista de Datos y Estrategia de Ventas',
          company: 'Castrol (BP)',
          period: 'Sep 2024 – Mar 2025',
          bullets: [
            'Centralicé 3 fuentes de datos críticas en dashboards automatizados, ahorrando ~30 horas manuales por semana.',
            'Gestioné comunicaciones con distribuidores y pronósticos de ventas basados en SKUs históricos.',
          ],
        },
        {
          title: 'Operaciones Regulatorias y de Cumplimiento',
          company: 'Castrol (BP)',
          period: 'Mar 2025 – Sep 2025',
          bullets: [
            'Gestioné la adquisición de certificaciones y análisis de cumplimiento para 15+ SKUs críticos basados en NOMs.',
            'Automatizé la sanitización de datasets CSV de campus de aprendizaje usando n8n para generar reportes estratégicos de RRHH.',
          ],
        },
        {
          title: 'Arquitecto de Soluciones en la Nube (Becario)',
          company: 'Huawei Cloud',
          period: '2024',
          bullets: [
            'Arquitecté pipelines de datos serverless (FunctionGraph) enviando 200 logs/5min desde OBS a SIEMs (Splunk / Wazuh).',
            'Optimicé arquitecturas POC de clientes (Spot instances, auto-scaling), estimando ahorros de computo de hasta 35% y reducción de tokens de IA de hasta 70%.',
            'Traduje conceptos complejos de telecomunicaciones (5G NFV / SDN, Multitenancy) en analogías digeribles para stakeholders no técnicos.',
          ],
        },
      ],
    },
    contact: {
      education: 'Lic. en Ingeniería de Sistemas y Telecomunicaciones – Universidad Iberoamericana (Expected May 2027)',
      emailLabel: 'Correo',
      linkedinLabel: 'LinkedIn',
      email: 'fernandoperezgonzalez01@gmail.com',
      linkedin: 'www.linkedin.com/in/fernandopgonzalez',
      emailPlaceholder: 'fernandoperezgonzalez01@gmail.com',
      linkedinPlaceholder: 'linkedin.com/in/fernandopgonzalez',
    },
  },
};

export type Dictionary = typeof dictionaries.en;
