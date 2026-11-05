export function getBeachDistance(description) {
  if (typeof description === 'number' && Number.isFinite(description)) {
    return `${description} м до моря`
  }

  const text = Array.isArray(description) ? description.join('. ') : description || ''

  const listedDistance = text.match(/расстояние до пляжа\s*:\s*(\d+(?:[.,]\d+)?)\s*(км|километр(?:а|ов)?|м|метр(?:а|ов|ах|е|ам)?)/i)
  const beachDistance = text.match(/(\d+(?:[.,]\d+)?)\s*(км|километр(?:а|ов)?|м|метр(?:а|ов|ах|е|ам)?)\s*(?:от|до)\s*(?:песчаного\s*)?(?:пляжа|моря)/i)
  const distance = listedDistance || beachDistance

  if (distance) {
    const unit = /^(?:км|километр)/i.test(distance[2]) ? 'км' : 'м'
    return `${distance[1].replace('.', ',')} ${unit} до моря`
  }

  const walkingDistance = text.match(/(\d+)\s*минут(?:а|ы|у|е|ах)?(?:\s+ходьбы)?\s+от\s+(?:песчаного\s*)?пляжа/i)
  if (walkingDistance) return `${walkingDistance[1]} мин пешком до моря`

  if (/нескольких шагах от пляжа/i.test(text)) return 'В нескольких шагах от моря'
  if (/прямо на (?:песчаном )?пляже/i.test(text)) return 'Прямо на пляже'
  if (/на первой линии/i.test(text)) return 'На первой линии'
  if (/на берегу моря|на побережье/i.test(text)) return 'На берегу моря'
  if (/на набережной/i.test(text)) return 'На набережной'
  if (/рядом с пляжем/i.test(text)) return 'Рядом с пляжем'
  if (/вид(?:ом)? на (?:популярный )?пляж/i.test(text)) return 'Вид на пляж'
  if (/пристани для яхт|районе пристани/i.test(text)) return 'У марины'

  return ''
}