<script setup>
import ButtonBase from './ButtonBase.vue'

const props = defineProps({
  person: Object,
  index: Number
})
</script>
<template>
  <div class="border border-white flex flex-col items-center">
    <div person-image class="h-96 border border-white w-full">
      <img :src="props.person?.imageLink" alt="fotogragia clen vento kvintet" />
    </div>
    <div person-details class="flex flex-col items-center p-8 text-center">
      <h4>{{ props.person?.name }}</h4>
      <p>{{ props.person?.role }}</p>
    </div>
  </div>

  <div
    class="border border-white flex flex-col justify-center text-center"
    v-if="props.person?.last"
  >
    <p>Vy nás už poznáte, povedzte nám o sebe a vašom podujatí.</p>
    <ButtonBase :content="'Ozvite sa nám'"></ButtonBase>
  </div>
</template>
