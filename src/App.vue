<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterBase from '@/components/FooterBase.vue'
import NavbarBase from '@/components/NavbarBase.vue'
</script>

<template>
  <div class="w-max-screen">
    <NavbarBase></NavbarBase>
    <RouterView></RouterView>
    <FooterBase></FooterBase>
  </div>
</template>
