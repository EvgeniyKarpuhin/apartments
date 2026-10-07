import fs from 'fs'
import path from 'path'

const baseUrl = 'https://rentalisrael.com'
const staticPages = ['/', '/telaviv', '/netanya', '/batyam', '/hotels', '/about']
const pathsFile = path.resolve('src/data/apartment-paths.json')
const apartmentPaths = JSON.parse(fs.readFileSync(pathsFile, 'utf8'))
const urls = [...staticPages, ...apartmentPaths]
const lastmod = new Date().toISOString().slice(0, 10)

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url>\n    <loc>${baseUrl}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`),
  '</urlset>'
]

fs.writeFileSync(path.resolve('public/sitemap.xml'), lines.join('\n'), 'utf8')
console.log('Generated public/sitemap.xml with', urls.length, 'URLs')
