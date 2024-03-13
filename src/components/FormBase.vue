<script setup>
import ButtonBase from './ButtonBase.vue'
</script>
<template>
  <form action="mailto:booking@vento.sk" method="post" enctype="text/plain">
    <div>
      <label for="name">Meno a priezvisko</label><br />
      <input
        class="border-b-[1px] border-black w-full mt-6 mb-8"
        type="text"
        id="name"
        name="name"
        required
      /><br />
    </div>
    <div>
      <label for="date">Dátum události</label><br />
      <input
        class="border-b-[1px] border-black w-full mt-6 mb-8"
        type="date"
        id="date"
        name="date"
        placeholder=""
        required
      /><br />
    </div>
    <div>
      <label for="text">Správa</label><br />
      <textarea
        class="border-b-[1px] border-black w-full mt-6 mb-8"
        id="text"
        name="text"
        rows="4"
        cols="50"
        required
      ></textarea
      ><br />
    </div>
    <div>
      <ButtonBase
        :mode="'black'"
        :content="'Odoslať správu'"
        type="submit"
        value="Submit"
      ></ButtonBase>
    </div>
  </form>
</template>

<style scoped>
::-webkit-datetime-edit-year-field:not([aria-valuenow]),
::-webkit-datetime-edit-month-field:not([aria-valuenow]),
::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
  color: transparent;
}
</style>
