<script setup>
const props = defineProps({
  content: Object
})
</script>

<template>
  <div class="text-white border-white border p-8">
    <div author class="flex items-start mb-6">
      <div class="mr-4">
        <img src="" alt="fotografia autora recenzie" />
      </div>
      <div>
        <h4>{{ props.content?.author.name }}</h4>
        <p>{{ props.content?.author.role }}</p>
      </div>
    </div>
    <p> {{ props.content?.testimonial }}</p>
  </div>
</template>
