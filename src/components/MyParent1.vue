<script setup>
import MyChild1 from './MyChild1.vue'
import { provide } from 'vue'
provide('url', 'http://localhost:8081')
</script>
<template>
  <MyChild1 />
</template>
