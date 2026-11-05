<template>
  <div class="apartment-facts" role="list" aria-label="Характеристики квартиры">
    <div class="fact" role="listitem">
      <UsersRound :size="18" :stroke-width="1.8" aria-hidden="true" />
      <span>До {{ facts.guests }} гостей</span>
    </div>
    <div class="fact" role="listitem">
      <Maximize :size="18" :stroke-width="1.8" aria-hidden="true" />
      <span>{{ facts.area }} м²</span>
    </div>
    <div class="fact" role="listitem">
      <BedDouble :size="18" :stroke-width="1.8" aria-hidden="true" />
      <span>{{ facts.bedrooms }} {{ pluralize(facts.bedrooms, 'спальня', 'спальни', 'спален') }}</span>
    </div>
    <div class="fact" role="listitem">
      <Bath :size="18" :stroke-width="1.8" aria-hidden="true" />
      <span>{{ facts.bathrooms }} {{ pluralize(facts.bathrooms, 'санузел', 'санузла', 'санузлов') }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Bath, BedDouble, Maximize, UsersRound } from '@lucide/vue'
import { getApartmentFacts } from '@/data/apartmentFacts'

const props = defineProps({
  apartment: {
    type: Object,
    required: true
  }
})

const facts = computed(() => getApartmentFacts(props.apartment))

function pluralize(value, one, few, many) {
  const lastTwoDigits = value % 100
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return many

  const lastDigit = value % 10
  if (lastDigit === 1) return one
  if (lastDigit >= 2 && lastDigit <= 4) return few
  return many
}
</script>

<style scoped>
.apartment-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem 0.5rem;
  margin: 0.75rem 0;
}

.fact {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.45rem;
  color: #263445;
  font-size: 0.875rem;
  line-height: 1.35;
}

.fact :deep(svg) {
  flex: 0 0 auto;
  color: #55736f;
}
</style>