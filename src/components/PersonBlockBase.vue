<script setup>
import ButtonBase from './ButtonBase.vue'

const props = defineProps({
  person: Object,
  index: Number
})
</script>
<template>
  <div class="bg-darkgrey flex flex-col items-center">
    <div person-image class="borderw-full">
      <img :src="props.person?.imageLink" alt="fotogragia clen vento kvintet" />
    </div>
    <div person-details class="flex flex-col items-center p-8 text-center">
      <h4 class="text-lg mb-1">{{ props.person?.name }}</h4>
      <p class="text-sm text-lightgrey opacity-90">{{ props.person?.role }}</p>
    </div>
  </div>

  <div class="bg-darkgrey flex flex-col justify-between p-8 text-center" v-if="props.person?.last">
    <p class="text-2xl mb-10">Vy nás už poznáte, povedzte nám o sebe a vašom podujatí.</p>
    <ButtonBase :content="'Ozvite sa nám'" :sectionId="'message'"></ButtonBase>
  </div>
</template>
