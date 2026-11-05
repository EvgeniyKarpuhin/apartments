import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { Bath, BedDouble, Maximize, UsersRound } from '@lucide/vue'

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

async function renderIconContents(Icon) {
  const markup = await renderToString(createSSRApp({ render: () => h(Icon) }))
  return markup.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')
}

const [usersIcon, areaIcon, bedroomsIcon, bathroomsIcon] = await Promise.all([
  UsersRound,
  Maximize,
  BedDouble,
  Bath
].map(renderIconContents))

function pluralize(value, one, few, many) {
  const lastTwoDigits = value % 100
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return many

  const lastDigit = value % 10
  if (lastDigit === 1) return one
  if (lastDigit >= 2 && lastDigit <= 4) return few
  return many
}

function makeFactSvg(icon, x, iconY, textY, label) {
  return `<svg x='${x}' y='${iconY}' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#eee' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>${icon}</svg><text x='${x + 32}' y='${textY}' class='meta'>${escapeHtml(label)}</text>`
}

function makeOverlaySvg(title, facts, price) {
  const titleLines = wrapText(title || '', 30, 2)
  const priceText = price ? `от $${price} в сутки` : ''
  const titleSvg = titleLines.map((line, idx) => `<text x='40' y='${438 + idx * 52}' class='title'>${escapeHtml(line)}</text>`).join('\n')
  const descSvg = [
    makeFactSvg(usersIcon, 40, 512, 532, `До ${facts.guests} гостей`),
    makeFactSvg(areaIcon, 350, 512, 532, `${facts.area} м²`),
    makeFactSvg(bedroomsIcon, 40, 550, 570, `${facts.bedrooms} ${pluralize(facts.bedrooms, 'спальня', 'спальни', 'спален')}`),
    makeFactSvg(bathroomsIcon, 350, 550, 570, `${facts.bathrooms} ${pluralize(facts.bathrooms, 'санузел', 'санузла', 'санузлов')}`)
  ].join('\n')
    const priceSvg = priceText
      ? `<text x='1160' y='548' text-anchor='end' class='price'>${escapeHtml(priceText)}</text><text x='1160' y='578' text-anchor='end' font-family='Arial, sans-serif' font-size='17' font-weight='500' fill='#eee'>цена зависит от сезона и количества ночей</text>`
      : ''
  const citySvg = ''

  return `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\n  <defs>\n    <style>\n      .title{font-family:Inter, Arial, sans-serif;fill:#fff;font-size:42px;font-weight:700;letter-spacing:0.2px}\n      .price{font-family:Inter, Arial, sans-serif;fill:#ffd54d;font-size:40px;font-weight:700}\n      .meta{font-family:Inter, Arial, sans-serif;fill:#eee;font-size:22px}\n      .city{font-family:Inter, Arial, sans-serif;fill:#9cc4ff;font-size:24px;font-weight:600}
      .caption{font-family:Inter, Arial, sans-serif;fill:#cbd5e1;font-size:18px}
    </style>\n    <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>\n      <stop offset='0%' stop-color='rgba(15,23,42,0.18)'/>\n      <stop offset='100%' stop-color='rgba(15,23,42,0.94)'/>\n    </linearGradient>\n  </defs>\n  <rect width='1200' height='630' fill='url(#fade)'/>\n  <rect x='0' y='420' width='1200' height='210' fill='rgba(0,0,0,0.55)'/>\n  ${citySvg}\n  ${titleSvg}\n  ${descSvg}\n  ${priceSvg}\n  <text x='40' y='604' class='caption'>Welcome to rentalisrael.com</text>\n</svg>`
}

async function createPng(outputPath, title, facts, price, image) {
  const localImage = image ? path.resolve(PUBLIC_DIR, image.replace(/^\//, '')) : null
  let sharpSource

  if (localImage && fs.existsSync(localImage)) {
    sharpSource = sharp(localImage).resize(1200, 630, { fit: 'cover', position: 'centre' })
  } else {
    console.warn('Local image not found for OG generation:', localImage)
    sharpSource = sharp({ create: { width: 1200, height: 630, channels: 3, background: '#1b2433' } })
  }

  const overlay = Buffer.from(makeOverlaySvg(title, facts, price))
  await sharpSource
    .composite([{ input: overlay, blend: 'over' }])
    .png({ quality: 90, compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath)
}

async function createSvg(outputPath, title, facts, price, image) {
  const localImage = image ? path.resolve(PUBLIC_DIR, image.replace(/^\//, '')) : null
  let backgroundImage = "<rect width='1200' height='630' fill='#1b2433'/>"

  if (localImage && fs.existsSync(localImage)) {
    const imageBuffer = await sharp(localImage)
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 90 })
      .toBuffer()
    backgroundImage = `<image href='data:image/jpeg;base64,${imageBuffer.toString('base64')}' width='1200' height='630' preserveAspectRatio='none'/>`
  } else {
    console.warn('Local image not found for SVG OG generation:', localImage)
  }

  const overlay = makeOverlaySvg(title, facts, price)
  const defsEnd = overlay.indexOf('</defs>') + '</defs>'.length
  const svg = `${overlay.slice(0, defsEnd)}\n  ${backgroundImage}\n${overlay.slice(defsEnd)}`
  fs.writeFileSync(outputPath, svg, 'utf8')
}

;(async () => {
  const pngs = []
  const svgs = []

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
    const facts = {
      guests: Number(extractField(block, /guests:\s*(\d+)/)) || 0,
      area: Number(extractField(block, /area:\s*(\d+)/)) || 0,
      bedrooms: Number(extractField(block, /bedrooms:\s*(\d+)/)) || 0,
      bathrooms: Number(extractField(block, /bathrooms:\s*(\d+)/)) || 0
    }
    const price = extractField(block, /price:\s*(\d+)/)
    const image = extractField(block, /imagePath\('([^']+)'\)/)

    const outPng = path.join(OUT_DIR, `${city}-${slug}.png`)
    const outSvg = path.join(OUT_DIR, `${city}-${slug}.svg`)

    await createPng(outPng, title, facts, price, image)
    await createSvg(outSvg, title, facts, price, image)
    pngs.push(outPng)
    svgs.push(outSvg)
  }

  console.log(`Generated OG files: ${pngs.length} PNG, ${svgs.length} SVG`)
})()
