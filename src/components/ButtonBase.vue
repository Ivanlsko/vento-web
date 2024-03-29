<script setup>
import { ref, onMounted } from 'vue'

// to-do prerobit takto props
defineProps({
  content: String,
  sectionId: String,
  mode: String
})

function navigateToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView()
  }
}
</script>

<template>
  <button
    @click="sectionId && navigateToSection(sectionId)"
    class="py-3 px-5 border rounded-full"
    :class="mode === 'black' ? 'border-black' : 'border-white'"
  >
    {{ content }}
  </button>
</template>
