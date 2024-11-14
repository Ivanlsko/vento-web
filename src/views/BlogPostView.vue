<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

// In a real application, you would fetch the post data from an API
onMounted(async () => {
  // Simulate fetching post data
  post.value = {
    id: route.params.id,
    title: 'Dychový Kvintet Vento v Rákociho Paláci',
    content: 'Lorem ipsum...',
    date: '2024-03-20',
    imageUrl: 'https://vento.sk/media/blog/post1.webp'
  }
})
</script>

<template>
  <section v-if="post" class="blog-post">
    <img
      src="../assets/images/vento-rakoci.jpeg"
      alt="rakoci"
      class="w-full h-64 object-cover mb-8"
    />
    <h1 class="text-4xl mb-4">{{ post.title }}</h1>
    <p class="text-gray-600 mb-8">{{ new Date(post.date).toLocaleDateString('sk-SK') }}</p>
    <div class="prose max-w-none">
      Dňa 28.mája 2024 o 18.00 sa uskutočnil verejný koncert Dychového Kvinteta Vento v priestoroch
      Krajského múzea v Prešove. Koncert navštívilo okolo 70 divákov. Hudobný program diváci
      sledovali v sále múzea na prvom poschodí, obklopení pôvodným nábytkom, klavírom a osobnými
      predmetmi hudobného skladateľa Mikuláša Moyzesa. Koncert trval približne 60 min a zazneli
      v ňom hlavne skladby skladateľa Mikuláša Moyzesa. (viď. program z koncertu v prílohe 1).
      V pôvodnom cieli projektu sme plánovali odohrať jedno Moyzesovo Kvinteto F dur, nakoniec sme
      odohrali kvintetá dve. Vďaka pomoci Doc. Karola Medňanského, ktorý oslovil Hudobné centrum
      v Bratislave, sa nám podarilo získať notový materiál aj na staršie – skôr napísané Kvinteto F
      dur Mikuláša Moyzesa. Išlo tak o novodobú premiéru skladateľovho diela. Okrem hudby Mikuláša
      Moyzesa boli diváci prostredníctvom sprievodného slova oboznámení aj s jeho životom a tvorbou
      v Prešove.
    </div>
    <div class="w-full my-4">
      <img class="w-full" src="https://vento.sk/media/plagat.webp" alt="plagat" />
    </div>
    <div class="prose max-w-none">
      Ďalšou plánovanou súčasťou projektu bolo uvedenie dvoch Výchovných koncertov pre Základné
      školy. Uskutočnili sme ich 29. novembra 2024 pre prešovské školy: ZŠ Bajkalská a ZŠ Šrobárova.
      Koncerty sme úspešne uviedli priamo v priestoroch týchto škôl, nakoľko obe disponujú pódiom
      vhodným aj na výchovné koncerty. Spolu ich videlo okolo 350 žiakov 4. – 6. ročníkov ZŠ. Témou
      koncertov bolo predstavenie Dychového kvinteta, hudobné ukážky jednotlivých nástrojov kvinteta
      a hudobných období a v neposlednom rade aj uvedenie ukážok z Kvinteta F dur. Žiakov sme
      primeranou formou tiež oboznámili s osobnosťou Mikuláša Moyzesa.
    </div>
    <div class="w-full h-[1px] bg-darkgrey my-8"></div>
    <div class="flex gap-4">
      <div class="-mt-24 -ml-20">
        <img src="https://vento.sk/media/logo-presov.webp" alt="logo mesto" class="scale-75" />
      </div>
      <div class="-ml-14">
        <h2 class="text-lg font-medium mb-2">Ďakujeme mestu Prešov</h2>
        <p>Projekt bol podporený finančnými prostriedkami mesta Prešov vo výške 839,- €</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-post {
  padding: 120px 60px 100px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
