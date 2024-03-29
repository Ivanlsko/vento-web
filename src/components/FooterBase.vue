<script setup></script>

<template>
  <!-- to-do: vytvorit samostatnu classu na dark/light sections -->
  <footer class="bg-black text-white px-[40px] md:px-[60px] pt-20 pb-10">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="span-4/6">
        <div class="sm:w-2/3 md:w-1/2">
          <div>
            <div logo><img src="../assets/images/vento.svg" alt="vento kvintet logo" /></div>
          </div>
          <p paragraph class="mt-6">
            Sme piati umelci tvoriaci profeionálne hudobné zoskupenie. Vašemu podujatiu dodáme
            unikátnu atmosféru.
          </p>
        </div>
      </div>
      <div class="flex gap-16 pr-10 mt-10 sm:mt-0 sm:justify-self-end">
        <div class="span-1/6">
          <h5 class="font-medium">Kontakt na nás</h5>
          <p class="mt-6 text-sm">booking@vento.sk</p>
          <p class="mt-4 text-sm underline"><a href="tel: +421 903 274 341">+421 903 274 341</a></p>
        </div>
        <nav class="span-1/6">
          <h5 class="font-medium">Navigácia</h5>
          <ul class="text-sm">
            <li class="mt-6"><a href="#events">Služby</a></li>
            <li class="mt-4"><a href="#about">O nás</a></li>
            <li class="mt-4"><a href="#people">Členovia</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="h-[1px] w-full bg-white my-12"></div>
    <div class="sm:flex justify-between text-[0.8rem]" bottom>
      <p>
        Web vytvoril <a href="" class="underline">Ivan Leško</a>. Za fotografie ďakujeme
        <a href="" class="underline">Tomášovi Telepákovi</a>.
      </p>
      <p class="mt-4 sm:mt-0">Vento, 2024</p>
    </div>
  </footer>
</template>
