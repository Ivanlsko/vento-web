<script setup>
import DropdownBase from '../components/DropdownBase.vue'

const dropdownContent = {
  celebrations: {
    title: 'Svadby, oslavy, výročia',
    description:
      'Prestavte si slávnostnú fanfáru, v podaní dychového kvintenta, doprevádzajúcu vás k oltáru. Predstavte si jemné tóny rozplývajúce sa po miestnosti počas oslavy Vášho výročia. Vašemu špeciálnemu dňu dodáme niečo viac. Vytvoríme zvuk k Vašim nezabudnuteľným spomienkám. Ak túžite vášmu dňu dodať nádych sofistikovanosti a elegancie, ste tu správne.'
  },
  culturalEvents: {
    title: 'Kultúrne podujatia',
    description:
      'Pozdvihnite svoje kultúrne podujatie očarujúcimi melódiami nášho hudobného kvinteta. Organizujete vernisáž v galérii, večierok v múzeu alebo kultúrny festival? Náš súbor vnesie do každej príležitosti nádych rafinovanosti a elegancie. Od barokových majstrovských diel až po súčasné kompozície, náš rozmanitý repertoár uchváti publikum aj to najnáročnejšie publikum.'
  },
  companyEvents: {
    title: 'Firemné podujatia',
    description:
      'Túžite po originálnom firemnom podujatí? Či už ide o slávnostnú večeru, uvedenie produktu na trh alebo networkingovú recepciu, Vento kvintent odlíši Vašú událosť od každej inej. Môžte sa spoľahnúť, že na Vašej firemnej akcii zahráme na správnu nôtu a zanecháme trvalý dojem. Ak má Vaša firma profesionalitu a kreativitu v DNA budeme sa k sebe hodiť.'
  }
}
</script>

<template>
  <section id="events" class="w-full flex justify-end">
    <div class="w-full lg:w-3/5">
      <h2 class="text-3xl mb-12">
        V našom repertoári sa nachádzajú primárne klasické kompozície. Budeme pre to vhodnou voľbou
        pre Vaše významné události.
      </h2>
      <ul>
        <DropdownBase
          v-for="(content, key) in dropdownContent"
          :key="key"
          :content="content"
        ></DropdownBase>
      </ul>
    </div>
  </section>
</template>
