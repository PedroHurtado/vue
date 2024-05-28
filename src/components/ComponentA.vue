<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('Mounted A')
})
onUnmounted(() => {
  console.log('Unmounted B')
})
</script>
<template>
  <p>Componente A</p>
  <button @click="count++">{{ count }}</button>
</template>
