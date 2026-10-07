import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const OUT_DIR = path.resolve('dist/assets/og')
const PUBLIC_DIR = path.resolve('public')
const APARTMENTS_FILE = path.resolve('src/data/apartments.js')
const PATHS_FILE = path.resolve('src/data/apartment-paths.json')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const apartmentsText = fs.readFileSync(APARTMENTS_FILE, 'utf8')
const paths = JSON.parse(fs.readFileSync(PATHS_FILE, 'utf8'))

function extractObjectBlockBySlug(slug) {
  const needle = `slug: '${slug}'`
  const idx = apartmentsText.indexOf(needle)
  if (idx === -1) return null
  let start = apartmentsText.lastIndexOf('{', idx)
  if (start === -1) return null
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
  const m = regex.exec(block)
  return m ? m[1] : null
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function wrapText(text, maxLen = 32, maxLines = 2) {
  const words = text.trim().split(/\s+/)
  const lines = []
  let current = ''
  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxLen && current) {
      lines.push(current)
      current = word
      if (lines.length >= maxLines) break
    } else {
      current = next
    }
  }
  if (current && lines.length < maxLines) lines.push(current)
  return lines
}

function makeOverlaySvg(title, desc, price) {
  const titleLines = wrapText(title || '', 30, 2)
  const descLines = desc
  const priceText = price ? `от $${price} в сутки` : ''
  const titleSvg = titleLines.map((line, idx) => `<text x='40' y='${438 + idx * 52}' class='title'>${escapeHtml(line)}</text>`).join('\n')
  const descSvg = descLines.map((line, idx) => `<text x='40' y='${540 + idx * 32}' class='meta'>${escapeHtml(line)}</text>`).join('\n')
  const priceSvg = priceText ? `<text x='1160' y='566' text-anchor='end' class='price'>${escapeHtml(priceText)}</text>` : ''
  const citySvg = ''

  return `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\n  <defs>\n    <style>\n      .title{font-family:Inter, Arial, sans-serif;fill:#fff;font-size:42px;font-weight:700;letter-spacing:0.2px}\n      .price{font-family:Inter, Arial, sans-serif;fill:#ffd54d;font-size:40px;font-weight:700}\n      .meta{font-family:Inter, Arial, sans-serif;fill:#eee;font-size:22px}\n      .city{font-family:Inter, Arial, sans-serif;fill:#9cc4ff;font-size:24px;font-weight:600}
      .caption{font-family:Inter, Arial, sans-serif;fill:#cbd5e1;font-size:18px}
    </style>\n    <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>\n      <stop offset='0%' stop-color='rgba(15,23,42,0.18)'/>\n      <stop offset='100%' stop-color='rgba(15,23,42,0.94)'/>\n    </linearGradient>\n  </defs>\n  <rect width='1200' height='630' fill='url(#fade)'/>\n  <rect x='0' y='420' width='1200' height='210' fill='rgba(0,0,0,0.55)'/>\n  ${citySvg}\n  ${titleSvg}\n  ${descSvg}\n  ${priceSvg}\n  <text x='40' y='604' class='caption'>Apartment preview • rentalisrael.com</text>\n</svg>`
}

async function createPng(outputPath, title, desc, price, image) {
  const localImage = image ? path.resolve(PUBLIC_DIR, image.replace(/^\//, '')) : null
  let sharpSource

  if (localImage && fs.existsSync(localImage)) {
    sharpSource = sharp(localImage).resize(1200, 630, { fit: 'cover', position: 'centre' })
  } else {
    console.warn('Local image not found for OG generation:', localImage)
    sharpSource = sharp({ create: { width: 1200, height: 630, channels: 3, background: '#1b2433' } })
  }

  const overlay = Buffer.from(makeOverlaySvg(title, desc, price))
  await sharpSource
    .composite([{ input: overlay, blend: 'over' }])
    .png({ quality: 90, compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath)
}

function deleteExistingSvgs() {
  const entries = fs.readdirSync(OUT_DIR)
  for (const entry of entries) {
    if (entry.toLowerCase().endsWith('.svg')) {
      fs.unlinkSync(path.join(OUT_DIR, entry))
    }
  }
}

;(async () => {
  deleteExistingSvgs()
  const pngs = []

  for (const p of paths) {
    const parts = p.split('/').filter(Boolean)
    if (parts.length < 3) continue
    const city = parts[1]
    const slug = parts[2]
    const block = extractObjectBlockBySlug(slug)
    if (!block) { console.warn('no block for', slug); continue }
    const apartmentTitle = extractField(block, /title:\s*'([^']+)'/) || `${city} — апартаменты`
    const cityName = extractField(block, /cityName:\s*'([^']+)'/) || city.replace(/-/g, ' ')
    const title = `${apartmentTitle} в ${cityName}`
    const descMatch = extractField(block, /description:\s*\[([\s\S]*?)\]/)
    const desc = descMatch
      ? [...descMatch.matchAll(/['"]([^'"]*(?:Планировка:|Количество человек:)[^'"]*)['"]/g)].map((match) => match[1])
      : []
    const price = extractField(block, /price:\s*(\d+)/)
    const image = extractField(block, /imagePath\('([^']+)'\)/)

    const outPng = path.join(OUT_DIR, `${city}-${slug}.png`)

    await createPng(outPng, title, desc, price, image)
    pngs.push(outPng)
  }

  console.log('Generated PNG OG files:', pngs.length)
})()
