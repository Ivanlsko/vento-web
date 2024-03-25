<script setup>
const props = defineProps({
  content: Object
})
</script>

<template>
  <div class="text-white p-8 bg-darkgrey">
    <div author class="flex items-center mb-6">
      <div class="mr-4 rounded-full w-16 bg-white flex-center">
        <img
          class="rounded-full"
          :src="content?.author.imageLink"
          alt="fotografia autora recenzie"
        />
      </div>
      <div>
        <h4>{{ props.content?.author.name }}</h4>
        <p class="text-lightgrey text-sm opacity-90">{{ props.content?.author.role }}</p>
      </div>
    </div>
    <p class="text-base"> {{ props.content?.testimonial }}</p>
  </div>
</template>
