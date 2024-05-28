<script setup>
import { ref } from 'vue'
const popoverRef = ref(null)
function open() {
  popoverRef.value.showPopover()
}
defineExpose({
  open
})
</script>

<template>
  <div popover ref="popoverRef">
    <slot></slot>
  </div>
</template>
