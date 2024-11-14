<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonBase from './ButtonBase.vue'
import NavbarList from './NavbarList.vue'

const windowWidth = ref(window.innerWidth)
const menuOpened = ref(false)
const route = useRoute()
const router = useRouter()

// Compute the color based on route
const isWhite = computed(() => {
  return route.path === '/'
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleMenu() {
  menuOpened.value = !menuOpened.value
  if (menuOpened.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}
</script>

<template>
  <nav
    v-if="!menuOpened"
    class="flex justify-between absolute top-0 w-full p-6"
    :class="isWhite ? 'text-white' : 'text-black'"
  >
    <div v-if="isWhite" id="logo-white" class="flex-center -mt-2" @click="router.push('/')">
      <img src="../assets/images/vento.svg" alt="logo vento kvintet" />
    </div>
    <div v-else id="logo-black" class="flex-center -mt-2" @click="router.push('/')">
      <img src="../assets/images/vento-black.svg" alt="logo vento kvintet" />
    </div>
    <div v-if="windowWidth < 768">
      <div @click="handleMenu" class="h-8 w-8">
        <img
          :src="isWhite ? '../assets/icons/menu.svg' : '../assets/icons/menu-black.svg'"
          alt="menu icon"
          class="h-full"
        />
      </div>
    </div>
    <div v-else class="flex">
      <ul class="flex items-center mr-4">
        <NavbarList :isWhite="isWhite"></NavbarList>
      </ul>
      <ButtonBase
        :content="'Ozvite sa nám'"
        :sectionId="'message'"
        :mode="isWhite ? 'white' : 'black'"
      ></ButtonBase>
    </div>
  </nav>
  <div v-else class="w-full h-screen bg-white fixed top-0 overflow-hidden flex flex-col">
    <div class="flex justify-end w-full p-6 text-white">
      <div @click="handleMenu()" class="mr-[15px] h-8 w-8">
        <img src="../assets/icons/close.svg" alt="close menu icon" class="h-full" />
      </div>
    </div>
    <nav class="grow flex-center">
      <ul class="flex-center flex-col grow gap-6 text-4xl">
        <NavbarList @link-click="handleMenu()"></NavbarList>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
