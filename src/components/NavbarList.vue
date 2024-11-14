<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
defineEmits(['linkClick'])

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>

<template>
  <div v-if="isHome" class="flex">
    <li @click="$emit('linkClick')" class="mr-4"><a href="#events">Služby</a></li>
    <li @click="$emit('linkClick')" class="mr-4"><a href="#about">O nás</a></li>
    <li @click="$emit('linkClick')" class="mr-4"><a href="#people">Členovia</a></li>
  </div>
  <li v-if="isHome" @click="$emit('linkClick')" class="mr-4">
    <RouterLink to="/blog">Blog</RouterLink>
  </li>
  <li v-if="!isHome" @click="$emit('linkClick')" class="mr-4">
    <RouterLink to="/">Domov</RouterLink>
  </li>
</template>
