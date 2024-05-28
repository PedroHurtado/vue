<script setup>
import { inject } from 'vue'
const url = inject('url')
</script>
<template>
  <div>{{ url }}</div>
</template>
