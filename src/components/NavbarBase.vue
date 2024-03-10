<script type="ts" setup>
import ButtonBase from './ButtonBase.vue'
</script>

<template>
  <nav class="flex justify-between fixed w-full p-6 text-white">
    <div id="logo"><img src="../assets/images/vento.svg" alt="logo vento kvintet" /></div>
    <div class="flex" id="menu">
      <ul class="flex items-center mr-4">
        <li class="mr-4"><a href=""></a>Služby</li>
        <li class="mr-4"><a href=""></a>O nás</li>
        <li class="mr-4"><a href=""></a>Členovia</li>
      </ul>
      <ButtonBase :content="'Ozvite sa nám'"></ButtonBase>
    </div>
  </nav>
</template>
