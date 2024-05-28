<script setup>
import { onMounted, onUnmounted, shallowRef, triggerRef, ref } from 'vue'
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import Calendar from './components/MyCalendar.vue'
import MyPinia from './components/MyPinia.vue'
import MyPinia2 from './components/MyPinia2.vue'
import MyParent1 from './components/MyParent1.vue'
import MyParent2 from './components/MyParent2.vue'
//import MyPopover from './components/MyPopover.vue'
//import Dialog from './components/dialog/Dialog.vue'
const current = shallowRef(ComponentA)
const shallow = shallowRef({
  greet: 'Hello, world'
})
function handlerClick() {
  shallow.value.greet = 'Hello'
  triggerRef(shallow)
}
function handlerSelectedDay(ev) {
  console.log(ev.detail)
}
//const dialog = ref(null)
onMounted(() => window.addEventListener('selectday', handlerSelectedDay))
onUnmounted(() => window.removeEventListener('selectday', handlerSelectedDay))
/*function halderOpenDialog() {
  dialog.value?.open()
}*/
//const popover = ref(null)
/*function hanlderPopover() {
  popover.value?.open()
}*/
</script>

<template>
  <MyParent1 />
  <MyParent2 />
  <!--
  <button @click="hanlderPopover">Open popover</button>
  <MyPopover ref="popover">
    <p>Popover</p>
  </MyPopover>
  <button @click="halderOpenDialog">Open dialog</button>
  <Dialog ref="dialog">
    <p>native dialog</p>
  </Dialog>
  -->
  <MyPinia />
  <MyPinia2 />
  <Calendar />
  <label><input type="radio" v-model="current" :value="ComponentA" />A</label>
  <label><input type="radio" v-model="current" :value="ComponentB" />B</label>

  <component :is="current"></component>

  <div>{{ shallow.greet }}</div>
  <button @click="handlerClick">cambiar datos</button>
  <!--
  <SubmitButton />
  <SubmitButton>Enviar</SubmitButton>
  <Declarative></Declarative>
  -->
</template>
