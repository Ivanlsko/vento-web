<script setup>
import ButtonBase from '../components/ButtonBase.vue'
</script>

<template>
  <section
    class="bg-[url('https://vento.sk/media/vento_mobile.webp')] bg-top min-h-[1000px] lg:bg-[url('https://vento.sk/media/vento_desktop.webp')] w-full h-screen bg-cover flex-center bg-no-repeat lg:bg-auto"
  >
    <div id="hero-content" class="text-white sm:mx-8 lg:mx-24 mt-28">
      <h1 class="col-span-2 text-[3rem] sm:text-5xl -mb-4 sm:mb-20">
        Vento kvintet je dychové hudobné teleso tvorené piatimi profesionálmi.
      </h1>
      <div class="flex-col lg:flex lg:flex-row justify-between items-start">
        <div id="availability" class="lg:w-1/2 flex items-center mt-20 lg:mt-0">
          <div id="circle-available" class="w-2 h-2 rounded-full bg-white mr-2"></div>
          <p class="text-sm">Termíny sú k dispozícií</p>
        </div>
        <p id="header-paragraph" class="lg:w-1/2 text-2xl mt-4 sm:mt-10 lg:mt-0">
          Vašému podujatiu dodáme jedinečnú atmosféru, či už ide o svadbu, firemný večierok alebo
          vernisáž.
        </p>
      </div>
      <ButtonBase
        class="w-full mt-10 md:hidden"
        :content="'Ozvite sa nám'"
        :sectionId="'message'"
      ></ButtonBase>
    </div>
  </section>
</template>
