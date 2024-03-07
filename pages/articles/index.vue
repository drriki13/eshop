<template>
  <div class="flex h-full flex-col items-center gap-y-[60px]">
    <section class="mx-5 mt-10 flex flex-col items-center gap-y-5">
      <h1 class="text-4xl font-bold text-black">Статьи</h1>
      <p class="max-w-[840px] text-center text-sm font-semibold text-black">
        Полезная информация по уходу за вашим садом от профессионалов со всей страны. Кроме того, мы
        предлагаем раздел
        <span class="cursor-pointer text-primary">«Ищите уход?»</span>
        , где вы можете найти профессиональных садовников, готовых помочь вам с уходом за вашим
        садом
      </p>
    </section>

    <section class="mx-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <a class="border-b-4 border-primary py-2.5 font-semibold text-black" href="#">Все разделы</a>
      <a
        class="border-b-4 border-gray py-2.5 font-semibold text-black hover:border-primary"
        href="#"
        >Химия</a
      >
      <a
        class="border-b-4 border-gray py-2.5 font-semibold text-black hover:border-primary"
        href="#"
        >Инструменты</a
      >
      <a
        class="border-b-4 border-gray py-2.5 font-semibold text-black hover:border-primary"
        href="#"
        >Сезонные работы</a
      >
      <a
        class="border-b-4 border-gray py-2.5 font-semibold text-black hover:border-primary"
        href="#"
        >Секреты садовника</a
      >
      <a
        class="border-b-4 border-gray py-2.5 font-semibold text-black hover:border-primary"
        href="#"
        >Ищите уход?</a
      >
    </section>

    <ArticleList />

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Статьи',
});
</script>

<style scoped></style>
