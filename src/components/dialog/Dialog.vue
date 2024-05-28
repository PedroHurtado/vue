<script setup>
import { ref } from 'vue'
const dialog = ref(null)
function close() {
  dialog.value?.close()
}
function open() {
  dialog.value?.showModal()
}
defineExpose({
  open
})
</script>
<template>
  <dialog ref="dialog">
    <form method="dialog">
      <slot></slot>
      <menu>
        <button type="submit" @click="close" value="submit">Aceptar</button>
        <button @click="close" value="close">Cerrar</button>
      </menu>
    </form>
  </dialog>
</template>
