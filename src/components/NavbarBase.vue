<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ButtonBase from './ButtonBase.vue'

const windowWidth = ref(window.innerWidth)
const menuOpened = ref(false)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav v-if="!menuOpened" class="flex justify-between absolute top-0 w-full p-6 text-white">
    <div id="logo"><img src="../assets/images/vento.svg" alt="logo vento kvintet" /></div>
    <div v-if="windowWidth < 768">
      <div @click="menuOpened = !menuOpened" id="menu" class="z-50"></div>
    </div>
    <div v-else class="flex">
      <ul class="flex items-center mr-4">
        <li class="mr-4"><a href=""></a>Služby</li>
        <li class="mr-4"><a href=""></a>O nás</li>
        <li class="mr-4"><a href=""></a>Členovia</li>
      </ul>
      <ButtonBase :content="'Ozvite sa nám'"></ButtonBase>
    </div>
  </nav>
  <div v-else class="w-full h-screen bg-white fixed top-0 overflow-hidden">
    <div class="flex justify-end w-full p-6 text-white">
      <div @click="menuOpened = !menuOpened" id="menu"></div>
    </div>
    <nav>
      <ul class="flex-center flex-col">
        <li class="mr-4"><a href=""></a>Služby</li>
        <li class="mr-4"><a href=""></a>O nás</li>
        <li class="mr-4"><a href=""></a>Členovia</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#menu {
  width: 20px;
  height: 20px;
  background-color: black;
}
</style>
