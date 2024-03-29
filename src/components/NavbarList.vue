<script setup>
defineEmits(['linkClick'])
</script>

<template>
  <li @click="$emit('linkClick')" class="mr-4"><a href="#events">Služby</a></li>
  <li @click="$emit('linkClick')" class="mr-4"><a href="#about">O nás</a></li>
  <li @click="$emit('linkClick')" class="mr-4"><a href="#people">Členovia</a></li>
</template>
