<template>
  <div class="calendar" @click="hanlerClick">
    <Day v-for="day in days" :key="day" :day="day" />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import Day from './MyDay.vue'

const service = inject('service')
service()
//console.log(service)

function* getDays() {
  for (let i = 0; i < 31; i++) {
    yield i + 1
  }
}
function createEvent(day) {
  return new CustomEvent('selectday', {
    bubbles: true,
    composed: true,
    detail: day
  })
}
function hanlerClick(ev) {
  ev.stopPropagation()
  const node = ev.composedPath().find((n) => n.dataset && 'day' in n.dataset)
  if (node) {
    node.dispatchEvent(createEvent(node.dataset.day))
  }
}
const days = [...getDays()]
</script>
<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1.5rem);
  gap: 0.5rem;
}
</style>
