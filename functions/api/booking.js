const propertyCities = new Map([
  ['batyam', 'Бат-Ям'],
  ['netanya', 'Нетания'],
  ['telaviv', 'Тель-Авив'],
  ['herzliya', 'Герцлия']
])
const contactMethods = new Set(['email', 'telegram', 'whatsapp'])

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  })
}

function isValidDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function validateBooking(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return 'Некорректные данные формы.'
  if (cleanText(data.website, 200)) return null

  const name = cleanText(data.name, 100)
  const contact = cleanText(data.contact, 254)
  const propertyName = cleanText(data.propertyName, 180)
  const propertyCity = cleanText(data.propertyCity, 40)
  const propertySlug = cleanText(data.propertySlug, 100)

  if (!name || !contact || !propertyName) return 'Заполните имя, контакт и выбранный объект.'
  if (!contactMethods.has(data.contactMethod)) return 'Выберите способ связи.'
  if ((propertyCity || propertySlug) && (!propertyCities.has(propertyCity) || !/^[a-z0-9-]+$/.test(propertySlug))) {
    return 'Не удалось определить выбранный объект. Обновите страницу и попробуйте снова.'
  }

  if (data.contactMethod === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    return 'Укажите корректный адрес электронной почты.'
  }
  if (data.contactMethod === 'telegram' && !/^@?[a-zA-Z0-9_]{5,32}$/.test(contact)) {
    return 'Укажите корректное имя пользователя Telegram.'
  }
  if (data.contactMethod === 'whatsapp' && !/^\+?[1-9]\d{7,14}$/.test(contact.replace(/[\s()-]/g, ''))) {
    return 'Укажите корректный номер телефона для WhatsApp.'
  }

  if (!isValidDate(data.arrival) || !isValidDate(data.departure)) {
    return 'Укажите корректные даты заезда и выезда.'
  }
  const today = new Date().toISOString().slice(0, 10)
  if (data.arrival < today || data.departure <= data.arrival) {
    return 'Дата выезда должна быть позже даты заезда, а дата заезда — не в прошлом.'
  }

  if (!Number.isInteger(data.adults) || data.adults < 1 || data.adults > 20) {
    return 'Проверьте количество взрослых.'
  }
  if (!Number.isInteger(data.children) || data.children < 0 || data.children > 10) {
    return 'Проверьте количество детей.'
  }
  if (!Array.isArray(data.childAges) || data.childAges.length !== data.children) {
    return 'Укажите возраст каждого ребёнка.'
  }
  if (data.childAges.some((age) => !Number.isInteger(Number(age)) || Number(age) < 0 || Number(age) > 17)) {
    return 'Проверьте возраст детей.'
  }
  if (typeof data.crib !== 'boolean') return 'Некорректное значение для детской кроватки.'
  if (typeof data.comment !== 'string' || data.comment.length > 2000) {
    return 'Комментарий не должен превышать 2000 символов.'
  }

  return null
}

function formatBooking(data) {
  const contactNames = {
    email: 'Электронная почта',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp'
  }
  const ages = data.childAges.length
    ? data.childAges.map((age, index) => {
      const ageNumber = Number(age)
      const ageLabel = ageNumber === 0
        ? 'до 1 года'
        : `${ageNumber} ${ageNumber === 1 ? 'год' : ageNumber < 5 ? 'года' : 'лет'}`
      return `Ребёнок ${index + 1}: ${ageLabel}`
    }).join('\n')
    : 'Нет'

  const propertyDetails = data.propertyCity && data.propertySlug
    ? [`Город объекта: ${propertyCities.get(data.propertyCity)}`, `Slug объекта: ${data.propertySlug}`]
    : []

  return [
    `Объект: ${cleanText(data.propertyName, 180)}`,
    ...propertyDetails,
    `Имя: ${cleanText(data.name, 100)}`,
    `Предпочтительный способ связи: ${contactNames[data.contactMethod]}`,
    `Контакт: ${cleanText(data.contact, 254)}`,
    `Дата прилёта: ${data.arrival}`,
    `Дата вылета: ${data.departure}`,
    `Взрослые: ${data.adults}`,
    `Дети: ${data.children}`,
    ages,
    `Детская кроватка: ${data.crib ? 'Нужна' : 'Не нужна'}`,
    `Комментарий: ${cleanText(data.comment, 2000) || 'Нет'}`
  ].join('\n')
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin')
  if (origin && origin !== new URL(request.url).origin) {
    return jsonResponse({ error: 'Запрос отклонён.' }, 403)
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0)
  if (contentLength > 16_000) return jsonResponse({ error: 'Слишком большой запрос.' }, 413)

  let data
  try {
    data = await request.json()
  } catch {
    return jsonResponse({ error: 'Некорректный формат запроса.' }, 400)
  }

  const validationError = validateBooking(data)
  if (validationError) return jsonResponse({ error: validationError }, 400)
  if (cleanText(data.website, 200)) return jsonResponse({ ok: true })

  if (!env.RESEND_API_KEY || !env.BOOKING_TO_EMAIL || !env.BOOKING_FROM_EMAIL) {
    console.error('Booking email is not configured: required environment variables are missing.')
    return jsonResponse({ error: 'Отправка заявок временно недоступна. Попробуйте позже.' }, 503)
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: env.BOOKING_FROM_EMAIL,
        to: [env.BOOKING_TO_EMAIL],
        subject: `Заявка на бронирование: ${cleanText(data.propertyName, 180)}`,
        text: formatBooking(data)
      })
    })

    if (!emailResponse.ok) {
      const errorDetails = await emailResponse.text()
      console.error('Resend rejected booking email:', emailResponse.status, errorDetails)
      return jsonResponse({ error: 'Не удалось отправить заявку. Попробуйте позже.' }, 502)
    }

    return jsonResponse({ ok: true })
  } catch (error) {
    console.error('Booking email request failed:', error)
    return jsonResponse({ error: 'Не удалось отправить заявку. Попробуйте позже.' }, 502)
  }
}
