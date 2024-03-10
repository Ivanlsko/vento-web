<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  content: String
})

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button class="py-3 px-5 border rounded-full">{{ content }}</button>
</template>
