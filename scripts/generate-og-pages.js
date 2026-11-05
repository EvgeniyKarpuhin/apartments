import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const apartmentsFile = path.resolve('src/data/apartments.js')
const pathsFile = path.resolve('src/data/apartment-paths.json')
const siteOrigin = 'https://rentalisrael.com'

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found, run build first')
  process.exit(1)
}

const paths = JSON.parse(fs.readFileSync(pathsFile, 'utf8'))
const apartmentsText = fs.readFileSync(apartmentsFile, 'utf8')

function extractBlockForSlug(slug) {
  const needle = `slug: '${slug}'`
  const idx = apartmentsText.indexOf(needle)
  if (idx === -1) return null
  // find opening brace before idx
  let start = apartmentsText.lastIndexOf('{', idx)
  if (start === -1) return null
  // find matching closing brace
  let depth = 0
  let end = -1
  for (let i = start; i < apartmentsText.length; i++) {
    const ch = apartmentsText[i]
    if (ch === '{') depth++
    if (ch === '}') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  if (end === -1) return null
  return apartmentsText.slice(start + 1, end)
}

function extractField(block, regex) {
  const match = regex.exec(block)
  return match ? match[1] : null
}

function extractTitle(block) {
  const m = /title:\s*'([^']+)'/.exec(block)
  return m ? m[1] : ''
}

function extractDescription(block) {
  const m = /description:\s*\[([\s\S]*?)\]/.exec(block)
  if (!m) return ''
  return [...m[1].matchAll(/'([^']+)'/g)]
    .map((match) => match[1])
    .filter((description) => /^(?:Планировка|Количество человек|Площадь|Санузел):/.test(description))
    .join('. ')
}

function extractImage(block) {
  const m = /imagePath\('([^']+)'\)/.exec(block)
  return m ? m[1] : null
}

for (const p of paths) {
  const parts = p.split('/').filter(Boolean) // ['apartments','city','slug']
  if (parts.length < 3) continue
  const city = parts[1]
  const slug = parts[2]
  const block = extractBlockForSlug(slug)
  if (!block) {
    console.warn('no block for', slug)
    continue
  }
  const apartmentTitle = extractTitle(block) || `${city} — апартаменты`
  const cityName = extractField(block, /cityName:\s*'([^']+)'/) || city
  const title = `${apartmentTitle} в ${cityName}`
  const price = extractField(block, /price:\s*(\d+)/)
  const detailDescription = extractDescription(block).replace(/\.\s*\./g, '.')
  const description = [detailDescription, price ? `Цена: от ${price} $ в сутки` : '']
    .filter(Boolean)
    .join('. ') || 'Смотрите фотографии и характеристики квартиры.'
  const image = extractImage(block) || '/images/apartments/telaviv/1bdr-mrallb/1.webp'

  const pngImage = `${siteOrigin}/assets/og/${city}-${slug}.png`
  const svgImage = `${siteOrigin}/assets/og/${city}-${slug}.svg`
  const pageHtml = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${siteOrigin}${p}">
<meta property="og:locale" content="ru_RU" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${siteOrigin}${p}" />
<meta property="og:image" content="${pngImage}" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image" content="${svgImage}" />
<meta property="og:image:type" content="image/svg+xml" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${pngImage}" />
</head>
<body>
<script>location.replace('${p}')</script>
</body>
</html>`

  const outDir = path.join(distDir, ...parts)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf8')
  console.log('Wrote', path.join(outDir, 'index.html'))
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}
