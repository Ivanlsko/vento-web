<script setup>
import { ref } from 'vue'
import ButtonBase from './ButtonBase.vue'
import axios from 'axios'

const {
  MODE: mode,
  VITE_MAILER_HOST: prod,
  VITE_MAILER_HOST_DEV: dev,
  VITE_SEND_EMAIL: path
} = import.meta.env

const mailerBaseUrl = mode === 'development' ? dev : prod
const mailerApiUrl = mailerBaseUrl + path

const name = ref('')
const date = ref('')
const email = ref('')
const message = ref('')

const buttonStates = {
  send: 'Odoslať správu',
  sending: 'Správa sa odosiela',
  sent: 'Správa bola odoslaná :)'
}
const buttonState = ref(buttonStates.send)

function activateServer() {
  axios
    .get(mailerBaseUrl)
    .then((response) => {})
    .catch((error) => {
      console.error('Error:', error)
    })
}

function sendMail() {
  buttonState.value = buttonStates.sending
  const data = {
    name: name.value,
    email: email.value,
    date: date.value,
    message: message.value
  }

  axios
    .post(mailerApiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      resetValues()
      buttonState.value = buttonStates.sent
      setTimeout(() => (buttonState.value = buttonStates.send), 5000)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function resetValues() {
  name.value = ''
  date.value = ''
  email.value = ''
  message.value = ''
}
</script>
<template>
  <form @submit.prevent>
    <div>
      <label for="email">Vaša emailová adresa</label><br />
      <input
        class="border-b-[1px] border-black w-full mt-6 mb-8 rounded-none appearance-none"
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
        class="border-b-[1px] border-black w-full mt-6 mb-8 rounded-none appearance-none"
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
        class="border-b-[1px] border-black w-full mt-6 mb-8 rounded-none appearance-none"
        type="date"
        id="date"
        name="date"
        placeholder="dd/mm/rrrr"
        v-model="date"
        @click="activateServer"
        required
      /><br />
    </div>
    <div>
      <label for="text">Správa</label><br />
      <textarea
        class="border-b-[1px] border-black w-full mt-6 mb-8 rounded-none appearance-none"
        id="text"
        name="text"
        rows="4"
        cols="50"
        v-model="message"
        required
        @click="activateServer"
      ></textarea
      ><br />
    </div>
    <div>
      <ButtonBase
        :mode="'black'"
        :content="buttonState"
        type="submit"
        value="Submit"
        @click="sendMail"
      ></ButtonBase>
    </div>
  </form>
</template>
