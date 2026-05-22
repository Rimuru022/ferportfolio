/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Le dice a Next.js que genere archivos estáticos
  basePath: '/recruiters-page', // El nombre exacto de tu repositorio
  images: {
    unoptimized: true, // Obligatorio si usas el componente <Image /> de Next.js en GitHub Pages
  },
}

module.exports = nextConfig