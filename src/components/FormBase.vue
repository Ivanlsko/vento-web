<script setup>
import { ref } from 'vue'
import ButtonBase from './ButtonBase.vue'
import axios from 'axios'

const name = ref('')
const date = ref('')
const email = ref('')
const message = ref('')

function sendMail() {
  const data = {
    name: name.value,
    email: email.value,
    date: date.value,
    message: message.value
  }

  const endpoint = 'http://localhost:3000/api/send-email'

  axios
    .post(endpoint, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('Response:', response.data)
      console.log('Email sent successfully!')
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>
<template>
  <form @submit.prevent>
    <div>
      <label for="email">Vaša emailová adresa</label><br />
      <input
        class="border-b-[1px] border-black w-full mt-6 mb-8"
        type="text"
        id="email"
        name="email"
        v-model="email"
        required
      /><br />
    </div>
    <div>
      <label for="name">Meno a priezvisko</label><br />
      <input
        class="border-b-[1px] border-black w-full mt-6 mb-8"
        type="text"
        id="name"
        name="name"
        v-model="name"
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
        v-model="date"
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
        v-model="message"
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
        @click="sendMail"
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
