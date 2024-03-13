<script setup>
import { ref, onMounted } from 'vue'

// to-do prerobit takto props
defineProps({
  content: String,
  mode: String
})
</script>

<template>
  <button
    class="py-3 px-5 border rounded-full"
    :class="mode === 'black' ? 'border-black' : 'border-white'"
  >
    {{ content }}
  </button>
</template>
