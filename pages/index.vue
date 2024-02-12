<template>
  <div class="flex flex-col">
    <section class="flex flex-col items-center justify-center gap-y-8 h-[590px] sm:h-[600px] md:h-[620px] lg:h-[726px] bg_img">
      <div class="flex flex-col items-center gap-y-3 px-4">
        <h1 class="text-4xl text-black font-bold">Find Your Plant</h1>
        <h3 class="text-sm text-black text-center font-semibold w-auto sm:w-[480px] md:w-[620px] lg:w-[660px]">Простой и удобный способ поиска растений по названию или сорту, доступный в самых крупных городах России.
          Вам не нужно тратить время на поездки по питомникам - достаточно ввести его название или сорт и получить результаты
        </h3>
      </div>

      <div class="flex flex-col items-center gap-y-3">
        <InputText placeholder="Название растения..." />
        <div class="flex gap-x-1.5">
          <span class="text-sm text-black font-semibold">Популярное: </span>
          <span class="text-sm text-primary font-semibold">Example, Example, Example</span>
        </div>
      </div>
    </section>
    <section></section>
    <section></section>
    <section></section>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url("../public/img/header.png");
}
</style>