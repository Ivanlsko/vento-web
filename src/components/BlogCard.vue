<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: {
    type: Object,
    required: true
  }
})

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('sk-SK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <RouterLink :to="{ name: 'blogPost', params: { id: post.id } }" class="blog-card">
    <div class="overflow-hidden bg-lightgrey">
      <img :src="post.imageUrl" alt="rakoci" class="w-full h-32 object-cover" />
      <div class="p-6">
        <p class="text-[14px] text-gray-600 mb-2">{{ formatDate(post.date) }}</p>
        <h2 class="text-lg font-medium mb-2">{{ post.title }}</h2>
        <p class="text-sm text-gray-700">{{ post.excerpt }}</p>
      </div>
    </div>
  </RouterLink>
</template>
