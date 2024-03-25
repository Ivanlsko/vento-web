<script setup>
import TestimonialBase from '../components/TestimonialBase.vue'
const testimonials = [
  {
    author: {
      name: 'Dagmar Duždová',
      role: 'Klaviristka, riaditeľka ARTIS festivalu',
      imageLink: 'https://vento.sk/media/duzdova.webp'
    },
    testimonial:
      '“Vento kvintet je zanietený, svieži mladý súbor, ktorý si  zaslúži poslucháčsku pozornosť. Ako skupina sú dokonale zohraní, súzniaci spoločným pohľadom na hudbu, ktorú napĺňajú nadšením a dychtivosťou po dokonalosti. Vystúpenie takejto kvality si dovoľujem označiť za perfektnú reklamu komornej hudbe a dychovým zoskupeniam.'
  },
  {
    author: {
      name: 'Igor Dohovič',
      role: 'Dirigent orchestra NDKE',
      imageLink: 'https://vento.sk/media/dohovic.webp'
    },
    testimonial:
      '“Pri každom umeleckom alebo ľudskom kontakte s členmi kvinteta VENTO prežívam mimoriadne pozitívne emócie. Či už je to umelecký zážitok z ich výkonov, či spoločná spolupráca alebo len obyčajný rozhovor na ulici, vždy spôsobujú veľké potešenie. Ich ľudskosť, umelecká zrelosť a nadšenie sú zárukou nezabudnuteľných zážitkov.'
  },
  {
    author: {
      name: 'Katarína Burgrová',
      role: 'Muzikologička, hudobná kritička',
      imageLink: 'https://vento.sk/media/burgrova.webp'
    },
    testimonial:
      '“Vznik nového komorného telesa na Slovensku je výrazným počinom pre spestrenie hudobno-kultúrneho života v tomto regióne. Dychové kvinteto so svojou farbou zvuku bude určite veľkým potešením pre ich poslucháčov. Ich prvotné koncerty boli predzvesťou kultúrnych zážitkov vysokej interpretačnej kvality.'
  }
]
</script>

<template>
  <section class="bg-black text-white">
    <!-- to-do: definovat h# selectory v hlavnom cssku -->
    <h2 class="text-3xl mb-12">Čo o nás hovoria iní</h2>
    <div id="testimonials" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialBase
        v-for="(content, key) in testimonials"
        :key="key"
        :content="content"
      ></TestimonialBase>
    </div>
  </section>
</template>
