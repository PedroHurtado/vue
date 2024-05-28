<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const msg = ref('')
onMounted(() => {
  console.log('Mounted B')
})
onUnmounted(() => {
  console.log('Unmounted B')
})
</script>
<template>
  <p>Componente B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg" />
</template>
