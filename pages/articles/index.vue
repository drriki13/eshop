<template>
  <div class="flex flex-col h-full items-center gap-y-[60px]">
    <section class="flex flex-col items-center gap-y-5 mt-10 mx-5">
      <h1 class="text-4xl text-black font-bold">Статьи</h1>
      <p class="text-sm text-black text-center font-semibold max-w-[840px]">
        Полезная информация по уходу за вашим садом от профессионалов со всей
        страны. Кроме того, мы предлагаем раздел
        <span class="text-primary cursor-pointer">«Ищите уход?»</span>
        , где вы можете найти профессиональных садовников, готовых помочь вам с
        уходом за вашим садом
      </p>
    </section>

    <section class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mx-5">
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-primary"
        href="#"
        >Все разделы</a
      >
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-gray hover:border-primary"
        href="#"
        >Химия</a
      >
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-gray hover:border-primary"
        href="#"
        >Инструменты</a
      >
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-gray hover:border-primary"
        href="#"
        >Сезонные работы</a
      >
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-gray hover:border-primary"
        href="#"
        >Секреты садовника</a
      >
      <a
        class="text-black font-semibold border-b-4 py-2.5 border-gray hover:border-primary"
        href="#"
        >Ищите уход?</a
      >
    </section>

    <ArticleList />

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
