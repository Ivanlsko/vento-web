<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarBase from './components/NavbarBase.vue'
import FooterBase from './components/FooterBase.vue'
</script>

<template>
  <div class="w-max-screen">
    <NavbarBase></NavbarBase>
    <RouterView></RouterView>
    <FooterBase></FooterBase>
  </div>
</template>
