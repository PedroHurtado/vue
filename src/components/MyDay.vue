<script setup>
defineProps(['day'])
</script>
<template>
  <div :data-day="day">{{ day }}</div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
}
div:hover {
  outline: 1px solid blue;
}
</style>
