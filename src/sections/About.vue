<script setup>
import AboutBlockBase from '../components/AboutBlockBase.vue'
const aboutBlocksContent = [
  {
    number: '50+',
    paragraphShort: 'rokov skúseností',
    paragraphLong:
      'Hráme dlho a hráme radi. Aj preto sme sa rozhodli našu radosť z hry pretaviť do Vento kvintet.'
  },
  {
    number: '2023',
    paragraphShort: 'rok vzniku',
    paragraphLong: 'Hráme spolu dlho, no ako Vento kvintet sme prvé podujatie odohrali v roku 2023.'
  },
  {
    number: '240+',
    paragraphShort: 'minút repeortáru',
    paragraphLong: 'Spoločne zostavíme program pre vaše podujatie tak, aby ste boli spokojní.'
  },
  {
    number: '∞',
    paragraphShort: 'ochoty dohodnúť sa',
    paragraphLong: 'Rozumieme, že každé podujatie je niečím špecifické, preto sme veľmi prisôsobiví'
  }
]
</script>

<template>
  <section>
    <AboutBlockBase
      v-for="(aboutBlock, key) in aboutBlocksContent"
      :content="aboutBlock"
      :key="key"
      :index="key"
    ></AboutBlockBase>
  </section>
</template>

<style scoped>
/* defined in the main file, but this section is specific
 */
section {
  padding: unset;
}
</style>
