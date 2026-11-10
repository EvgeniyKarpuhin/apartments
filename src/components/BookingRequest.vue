<template>
  <button class="booking-trigger" type="button" @click="open = true">
    Оставить заявку
  </button>

  <Teleport to="body">
    <div v-if="open" class="booking-overlay" @click.self="close">
      <section
        class="booking-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button class="booking-close" type="button" aria-label="Закрыть" @click="close">
          &times;
        </button>

        <h2 id="booking-title">Заявка на бронирование</h2>
        <p class="booking-property">{{ propertyName }}</p>

        <form v-if="!submitted" @submit.prevent="submit">
          <label class="booking-honeypot" aria-hidden="true">
            Website
            <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
          </label>

          <label class="booking-field">
            <span>Ваше имя</span>
            <input v-model.trim="form.name" type="text" autocomplete="name" required />
          </label>

          <div class="booking-field">
            <label for="booking-contact-method">Как с вами связаться?</label>
            <select id="booking-contact-method" v-model="form.contactMethod">
              <option value="email">Электронная почта</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          <label class="booking-field">
            <span>{{ contactLabel }}</span>
            <input
              v-model.trim="form.contact"
              :type="contactInputType"
              :autocomplete="contactAutocomplete"
              :placeholder="contactPlaceholder"
              required
            />
          </label>

          <div class="booking-field">
            <label for="booking-city">Город</label>
            <select id="booking-city" v-model="form.city">
              <option value="">Все города</option>
              <option value="batyam">Бат-Ям</option>
              <option value="netanya">Нетания</option>
              <option value="telaviv">Тель-Авив</option>
              <option value="herzliya">Герцлия</option>
            </select>
          </div>

          <div class="booking-dates">
            <label class="booking-field">
              <span>Дата прилёта</span>
              <input v-model="form.arrival" type="date" :min="today" required />
            </label>
            <label class="booking-field">
              <span>Дата вылета</span>
              <input
                v-model="form.departure"
                type="date"
                :min="departureMin"
                required
              />
            </label>
          </div>

          <fieldset class="booking-guests">
            <legend>Количество человек</legend>
            <div class="guest-row">
              <span>Взрослые</span>
              <div class="guest-counter">
                <button
                  type="button"
                  aria-label="Уменьшить количество взрослых"
                  :disabled="form.adults <= 1"
                  @click="form.adults--"
                >−</button>
                <output>{{ form.adults }}</output>
                <button
                  type="button"
                  aria-label="Увеличить количество взрослых"
                  :disabled="form.adults >= 20"
                  @click="form.adults++"
                >+</button>
              </div>
            </div>
            <div class="guest-row">
              <span>Дети</span>
              <div class="guest-counter">
                <button
                  type="button"
                  aria-label="Уменьшить количество детей"
                  :disabled="form.children <= 0"
                  @click="form.children--"
                >−</button>
                <output>{{ form.children }}</output>
                <button
                  type="button"
                  aria-label="Увеличить количество детей"
                  :disabled="form.children >= 10"
                  @click="form.children++"
                >+</button>
              </div>
            </div>
            <label v-for="(age, index) in form.childAges" :key="index" class="booking-field">
              <span>Возраст ребёнка {{ index + 1 }}</span>
              <select v-model="form.childAges[index]" required>
                <option v-for="ageOption in childAgeOptions" :key="ageOption.value" :value="ageOption.value">
                  {{ ageOption.label }}
                </option>
              </select>
            </label>
          </fieldset>

          <label class="booking-checkbox">
            <input v-model="form.crib" type="checkbox" />
            <span>Нужна детская кроватка</span>
          </label>

          <label class="booking-field">
            <span>Комментарий или пожелания</span>
            <textarea v-model.trim="form.comment" rows="3" placeholder="Напишите, если есть пожелания"></textarea>
          </label>

          <p v-if="submissionNotice" class="booking-notice" role="alert">
            {{ submissionNotice }}
          </p>

          <div class="booking-actions">
            <button class="booking-cancel" type="button" @click="close">Отменить</button>
            <button class="booking-submit" type="submit" :disabled="submitting">
              {{ submitting ? 'Отправляем…' : 'Отправить' }}
            </button>
          </div>
        </form>
        <p v-else class="booking-success" role="status">
          Заявка отправлена. Спасибо! Мы свяжемся с вами.
        </p>
      </section>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onUnmounted, reactive, ref, watch } from 'vue'

const props = defineProps({
  propertyName: {
    type: String,
    required: true
  }
})

const open = ref(false)
const submissionNotice = ref('')
const submitting = ref(false)
const submitted = ref(false)
const form = reactive({
  name: '',
  contactMethod: 'email',
  contact: '',
  city: '',
  arrival: '',
  departure: '',
  adults: 1,
  children: 0,
  childAges: [],
  crib: false,
  comment: '',
  website: ''
})

const today = new Date().toLocaleDateString('en-CA')
const departureMin = computed(() => form.arrival || today)
const childAgeOptions = [
  { value: '0', label: 'До 1 года' },
  ...Array.from({ length: 17 }, (_, index) => ({
    value: String(index + 1),
    label: `${index + 1} ${index === 0 ? 'год' : index < 4 ? 'года' : 'лет'}`
  }))
]
const contactLabel = computed(() => ({
  email: 'Электронная почта',
  telegram: 'Имя пользователя в Telegram',
  whatsapp: 'Номер телефона для WhatsApp'
}[form.contactMethod]))
const contactInputType = computed(() => form.contactMethod === 'email' ? 'email' : form.contactMethod === 'whatsapp' ? 'tel' : 'text')
const contactAutocomplete = computed(() => form.contactMethod === 'email' ? 'email' : form.contactMethod === 'whatsapp' ? 'tel' : 'off')
const contactPlaceholder = computed(() => form.contactMethod === 'email' ? 'name@example.com' : form.contactMethod === 'whatsapp' ? '+972 50 123 4567' : '@username')

watch(() => form.children, (count) => {
  while (form.childAges.length < count) form.childAges.push('0')
  form.childAges.length = count
})

function handleKeydown(event) {
  if (event.key === 'Escape') close()
}

watch(open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleKeydown)
  }
})

function close() {
  open.value = false
  submissionNotice.value = ''
  submitted.value = false
}

async function submit() {
  if (submitting.value || submitted.value) return

  submitting.value = true
  submissionNotice.value = ''

  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        propertyName: props.propertyName
      })
    })

    const result = await response.json()
    if (!response.ok) {
      throw new Error(result.error || 'Не удалось отправить заявку. Попробуйте ещё раз.')
    }

    submitted.value = true
    submissionNotice.value = 'Заявка отправлена. Спасибо! Мы свяжемся с вами.'
  } catch (error) {
    submissionNotice.value = error instanceof Error
      ? error.message
      : 'Не удалось отправить заявку. Попробуйте ещё раз.'
  } finally {
    submitting.value = false
  }
}

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.booking-trigger,
.booking-dialog button {
  border: 0;
  border-radius: 8px;
  background: #1b263b;
  color: #fff;
  cursor: pointer;
  font: initial;
}

.booking-trigger {
  width: calc(100% - 2rem);
  margin: 0 1rem 1rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
}

.booking-trigger:hover,
.booking-submit:hover {
  background: #293b5c;
}

.booking-overlay {
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgb(0 0 0 / 65%);
}

.booking-dialog {
  position: relative;
  width: min(100%, 560px);
  max-height: min(92dvh, 850px);
  overflow-y: auto;
  padding: 1.5rem;
  border-radius: 14px;
  background: #fff;
  color: #1b263b;
  box-shadow: 0 12px 40px rgb(0 0 0 / 25%);
}

.booking-dialog h2 {
  margin: 0 2rem 0.25rem 0;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
}

.booking-property {
  margin-bottom: 1rem;
  color: #596579;
}

.booking-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem !important;
  line-height: 1;
}

.booking-field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.85rem;
  font-weight: 600;
}

.booking-field input,
.booking-field select,
.booking-field textarea {
  width: 100%;
  min-height: 2.7rem;
  padding: 0.55rem 0.65rem;
  border: 1px solid #cbd1da;
  border-radius: 7px;
  background: #fff;
  color: #1b263b;
  font: inherit;
}

.booking-field textarea {
  resize: vertical;
}

.booking-dates {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.booking-guests {
  display: grid;
  gap: 0.35rem;
  margin: 0 0 1rem;
  padding: 0.75rem;
  border: 1px solid #d8dde5;
  border-radius: 8px;
}

.booking-guests legend {
  padding: 0 0.3rem;
  font-weight: 600;
}

.guest-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 2.6rem;
}

.guest-counter {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.guest-counter button {
  width: 2rem;
  height: 2rem;
  font-size: 1.2rem;
}

.guest-counter button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.guest-counter output {
  min-width: 1.25rem;
  text-align: center;
}

.booking-checkbox {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.25rem 0 1rem;
  font-weight: 600;
}

.booking-checkbox input {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #1b263b;
}

.booking-notice {
  margin-bottom: 0.85rem;
  padding: 0.65rem;
  border-radius: 7px;
  background: #fff4d6;
  color: #684e0b;
}

.booking-success {
  margin-top: 1.25rem;
  padding: 1rem;
  border-radius: 7px;
  background: #e5f5e9;
  color: #1d5c2c;
}

.booking-honeypot {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.booking-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
}

.booking-actions button {
  min-height: 2.7rem;
  padding: 0.55rem 1rem;
}

.booking-actions button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.booking-cancel {
  background: #e8ebf0 !important;
  color: #1b263b !important;
}

.booking-cancel:hover {
  background: #dce1e8 !important;
}

@media (max-width: 480px) {
  .booking-dialog {
    padding: 1.25rem 1rem;
  }

  .booking-dates {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
