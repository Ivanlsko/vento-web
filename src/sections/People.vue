<script setup>
import PersonBlockBase from '../components/PersonBlockBase.vue'
const people = [
  {
    name: '​Zuzana Mega',
    role: 'flauta, členka orchestra NDKE',
    imageLink: 'https://vento.sk/media/flauta.webp'
  },
  {
    name: '​Jana Lešková',
    role: '​hoboj, členka orchestra NDKE',
    imageLink: 'https://vento.sk/media/hoboj.webp'
  },
  {
    name: 'Daniel Tkáč',
    role: '​klariner, študent 5. ročníka konzervatória',
    imageLink: 'https://vento.sk/media/klarinet.webp'
  },
  {
    name: 'Miroslav Leško',
    role: '​lesný roh, člen orchestra NDKE',
    imageLink: 'https://vento.sk/media/roh.webp'
  },
  {
    name: '​Andriy Kholod',
    role: 'fagot, člen orchestra NDKE',
    last: true,
    imageLink: 'https://vento.sk/media/fagot.webp'
  }
]
</script>

<template>
  <section id="people" class="bg-black text-white">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl mb-12">Umelci, hudobníci... ľudia</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PersonBlockBase
          v-for="(person, key) in people"
          :key="key"
          :person="person"
        ></PersonBlockBase>
      </div>
    </div>
  </section>
</template>
