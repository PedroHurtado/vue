<script setup>
import { useCounterStore } from '@/stores/useCounterStore'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count } = storeToRefs(store)

store.$subscribe((mutation, state) => {
  console.log(mutation)
  console.log(state)
})
function handlerClick() {
  store.$patch({ name: 'pedro hurtado' })
}
</script>
<template>
  <p>Pinia2</p>
  <div>Count : {{ count }}</div>
  <button @click="handlerClick">Update Name</button>
</template>
