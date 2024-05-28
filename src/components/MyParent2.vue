<script setup>
import MyChild2 from './MyChild2.vue'
import { provide } from 'vue'
provide('url', 'http://localhost:8082')
</script>
<template>
  <MyChild2 />
</template>
