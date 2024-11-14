<script setup>
import { ref } from 'vue'
import BlogCard from './BlogCard.vue'

const blogPosts = ref([
  {
    id: 1,
    title: 'Dychový Kvintet Vento v Rákociho Paláci',
    excerpt:
      'Dňa 28.mája 2024 o 18.00 sa uskutočnil verejný koncert Dychového Kvinteta Vento v priestoroch Krajského múzea v Prešove. Koncert...',
    date: '2024-03-20',
    imageUrl: 'https://vento.sk/media/vento-rakoci.webp'
  }
  // Add more blog posts here
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
  </div>
</template>
