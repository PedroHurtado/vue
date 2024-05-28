<script setup>
import { useCounterStore } from '@/stores/useCounterStore'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { name, count, doubleCount } = storeToRefs(store)
const { increment } = store

function handlerClick() {
  increment()
}
</script>

<template>
  <p>Pinia1</p>
  <div>Name : {{ name }}</div>
  <div>DoubleCount : {{ doubleCount }}</div>
  <div>Count : {{ count }}</div>
  <button @click="handlerClick">Increment</button>
</template>
