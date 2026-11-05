export function parseApartmentFacts(description = []) {
  const text = Array.isArray(description) ? description.join('. ') : description || ''
  const bedroomsMatch = text.match(/Планировка:\s*(?:(\d+)\s*)?спальн/i)
  const guestsMatch = text.match(/Количество человек:\s*до\s*(\d+)/i)
  const areaMatch = text.match(/Площадь:\s*(\d+(?:[.,]\d+)?)\s*кв\.?\s*м/i)
  const bathroomsMatch = text.match(/Санузел:\s*(\d+)/i)

  return {
    bedrooms: bedroomsMatch ? Number(bedroomsMatch[1] || 1) : 0,
    guests: guestsMatch ? Number(guestsMatch[1]) : 0,
    area: areaMatch ? Number(areaMatch[1].replace(',', '.')) : 0,
    bathrooms: bathroomsMatch ? Number(bathroomsMatch[1]) : 0
  }
}

export function getApartmentFacts(apartment) {
  const parsedFacts = parseApartmentFacts(apartment.description)

  return {
    guests: apartment.guests ?? parsedFacts.guests,
    area: apartment.area ?? parsedFacts.area,
    bedrooms: apartment.bedrooms ?? parsedFacts.bedrooms,
    bathrooms: apartment.bathrooms ?? parsedFacts.bathrooms
  }
}

const apartmentFactLabels = /^(?:Планировка|Количество человек|Площадь|Санузел):/i

export function getAdditionalApartmentDescription(description = []) {
  return description.filter((item) => !apartmentFactLabels.test(item))
}