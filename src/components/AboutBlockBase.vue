<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: Object,
  index: Number
})

const bgColor = computed(() => {
  return props.index % 2 === 0 ? 'bg-white' : 'bg-lightgrey'
})
</script>
<template>
  <div class="h-screen w-full flex-center px-20 md:px-0 sticky top-0" :class="bgColor">
    <div
      class="text-center md:text-left flex flex-col md:flex-row items-center justify-center w-full md:w-3/5 md:ml-20"
    >
      <div class="md:w-1/5 md:mr-20">
        <p class="text-4xl">{{ props.content?.number }}</p>
        <p class="mt-2 mb-6">{{ props.content?.paragraphShort }}</p>
      </div>
      <p class="text-3xl md:w-4/5">{{ props.content?.paragraphLong }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100vw;
  height: 100vh;
  background: Orgb(20, 50, 100, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
}
</style>
