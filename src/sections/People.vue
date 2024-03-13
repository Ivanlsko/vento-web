<script setup>
import PersonBlockBase from '../components/PersonBlockBase.vue'
const people = [
  {
    name: '​Zuzana Mega',
    role: 'flauta, členka orchestra NDKE',
    imgLink: ''
  },
  {
    name: '​Jana Lešková',
    role: '​hoboj, členka orchestra NDKE',
    imgLink: ''
  },
  {
    name: 'Daniel Tkáč',
    role: '​klariner, študent 5. ročníka konzervatória',
    imgLink: ''
  },
  {
    name: 'Miroslav Leško',
    role: '​lesný roh, člen orchestra NDKE',
    imgLink: ''
  },
  {
    name: '​Andriy Kholod',
    role: 'fagot, člen orchestra NDKE',
    last: true,
    imgLink: ''
  }
]
</script>

<template>
  <section class="bg-black text-white">
    <h1 class="text-3xl mb-12">Umelci, hudobníci... ľudia</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PersonBlockBase
        v-for="(person, key) in people"
        :key="key"
        :person="person"
      ></PersonBlockBase>
    </div>
  </section>
</template>
