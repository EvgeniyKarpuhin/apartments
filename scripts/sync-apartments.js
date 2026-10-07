import fs from 'fs'
import path from 'path'

const pagesDir = path.resolve('src/pages')
const outputFile = path.resolve('src/data/apartments.js')

function parseArray(text, key) {
  const regex = new RegExp(`${key}: \[(.*?)\]`, 'gs')
  const match = regex.exec(text)
  if (!match) return null
  const body = match[1]
  return body.trim()
}

function normalizeField(value) {
  return value.replace(/\s+/g, ' ').trim()
}

function parseApartmentBlock(block, pageName) {
  const fields = {}

  const stringRegex = /^(\s*)(\w+):\s*(['"])(.*?)\3,?/gm
  let match
  while ((match = stringRegex.exec(block))) {
    fields[match[2]] = match[4]
  }

  const numberRegex = /^(\s*)(\w+):\s*(\d+),?/gm
  while ((match = numberRegex.exec(block))) {
    fields[match[2]] = Number(match[3])
  }

  const descMatch = /description:\s*\[(.*?)\]/gs.exec(block)
  if (descMatch) {
    const items = [...descMatch[1].matchAll(/['"](.*?)['"]/g)].map((m) => normalizeField(m[1]))
    fields.description = items
  }

  const imagesMatch = /images:\s*\[(.*?)\]/gs.exec(block)
  if (imagesMatch) {
    const items = [...imagesMatch[1].matchAll(/imagePath\(['"](.*?)['"]\)/g)].map((m) => m[1])
    fields.images = items
  }

  if (!fields.slug && fields.images?.length) {
    const imageUrl = fields.images[0]
    const slugMatch = imageUrl.match(/\/images\/apartments\/[\w-]+\/([\w-]+)\//)
    if (slugMatch) fields.slug = slugMatch[1]
  }

  const cityNames = {
    telaviv: 'Тель-Авиве',
    netanya: 'Нетании',
    batyam: 'Бат-Яме'
  }

  if (!fields.cityName) {
    fields.cityName = cityNames[pageName.toLowerCase()] || pageName
  }

  return fields
}

function extractApartmentsFromFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const arrayStart = text.indexOf('const apartments = [')
  if (arrayStart === -1) return []
  const body = text.slice(arrayStart + 'const apartments = ['.length)
  const apartmentBlocks = []
  let depth = 0
  let start = null
  for (let i = 0; i < body.length; i++) {
    const char = body[i]
    if (char === '{') {
      if (depth === 0) start = i
      depth++
    }
    if (char === '}') {
      depth--
      if (depth === 0 && start !== null) {
        apartmentBlocks.push(body.slice(start + 1, i))
        start = null
      }
    }
  }
  return apartmentBlocks.map((block) => parseApartmentBlock(block, path.basename(filePath, '.vue'))).filter((item) => item?.title)
}

function buildExport(apartmentCollections) {
  const lines = [
    "import { imagePath } from '@/components/imagePath'",
    '',
  ]

  for (const [key, items] of Object.entries(apartmentCollections)) {
    lines.push(`export const ${key} = [`) 
    for (const item of items) {
      const images = item.images.map((img) => `      imagePath('${img}')`).join(',\n')
      const desc = item.description.map((it) => `      '${it.replace(/'/g, "\\'")}'`).join(',\n')
      lines.push('  {')
      lines.push(`    id: ${item.id || 0},`)
      lines.push(`    city: '${item.city}',`)
      lines.push(`    cityName: '${item.cityName}',`)
      lines.push(`    slug: '${item.slug}',`)
      lines.push(`    title: '${item.title.replace(/'/g, "\\'")}',`)
      lines.push('    description: [')
      lines.push(desc)
      lines.push('    ],')
      lines.push(`    price: ${item.price || 0},`)
      lines.push('    images: [')
      lines.push(images)
      lines.push('    ]')
      lines.push('  },')
    }
    lines.push(']')
    lines.push('')
  }

  const cityKeys = Object.keys(apartmentCollections)
  const cityVars = cityKeys.map((key) => key)
  const cityEntries = cityKeys.map((key) => {
    const city = key.replace(/Apartments$/, '')
    return `  ${city}: ${key},`
  })

  lines.push('export const allApartments = [')
  for (const cityVar of cityVars) {
    lines.push(`  ...${cityVar},`)
  }
  lines.push(']')
  lines.push('')
  lines.push('export const apartmentsByCity = {')
  lines.push(...cityEntries)
  lines.push('}')
  lines.push('')
  lines.push('export function getApartment(city, slug) {')
  lines.push('  return apartmentsByCity[city]?.find((item) => item.slug === slug)')
  lines.push('}')
  lines.push('')
  lines.push('export function getApartmentPaths() {')
  lines.push('  return allApartments.map((apartment) => `/apartments/${apartment.city}/${apartment.slug}`)')
  lines.push('}')

  return lines.join('\n')
}

const pages = fs.readdirSync(pagesDir).filter((file) => /\.(vue|js)$/.test(file))
const apartmentCollections = {}

for (const page of pages) {
  const filePath = path.join(pagesDir, page)
  const apt = extractApartmentsFromFile(filePath)
  if (apt.length > 0) {
    const name = page.replace(/\.vue$/, '').toLowerCase()
    const key = `${name}Apartments`
    apartmentCollections[key] = apt.map((item) => ({
      ...item,
      city: name,
      cityName: item.cityName,
      slug: item.slug || '',
      price: item.price || 0
    }))
  }
}

const apartmentPathsFile = path.resolve('src/data/apartment-paths.json')
const apartmentPaths = []
for (const items of Object.values(apartmentCollections)) {
  for (const apartment of items) {
    if (apartment.city && apartment.slug) {
      apartmentPaths.push(`/apartments/${apartment.city}/${apartment.slug}`)
    }
  }
}

fs.writeFileSync(outputFile, buildExport(apartmentCollections), 'utf8')
fs.writeFileSync(apartmentPathsFile, JSON.stringify(apartmentPaths, null, 2), 'utf8')
console.log('Generated', outputFile)
console.log('Generated', apartmentPathsFile)
