<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  content: Object
})
const expanded = ref(false)
</script>

<template>
  <div>
    <div class="divider mt-6 mb-6"></div>
    <li @click="expanded = !expanded" class="cursor-pointer">
      <div class="text-2xl flex justify-between items-center">
        <h3>{{ props.content.title }}</h3>
        <div class="sign">
          {{ expanded ? '-' : '+' }}
        </div>
      </div>
      <p v-if="expanded" class="mt-4">
        {{ props.content.description }}
      </p>
    </li>
  </div>
</template>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: black;
}

.expandable-icon {
  width: 10px;
  height: 10px;
}

.line {
  display: block;
  width: 10px;
  height: 1px;
  background-color: black;
}
.vertical {
  transform: rotate(90deg);
}
/*
.horizontal {
} */
</style>
