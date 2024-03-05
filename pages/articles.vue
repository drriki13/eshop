<template>
  <div class="flex flex-col h-full items-center gap-y-[60px]">
    <section class="flex flex-col items-center gap-y-5 mt-12 mx-[270px]">
      <h1 class="text-4xl text-black font-bold">Статьи</h1>
      <p class="text-sm text-black text-center font-semibold max-w-[840px]">
        Полезная информация по уходу за вашим садом от профессионалов со всей
        страны. Кроме того, мы предлагаем раздел
        <span class="text-primary cursor-pointer">«Ищите уход?»</span>
        , где вы можете найти профессиональных садовников, готовых помочь вам с
        уходом за вашим садом
      </p>
    </section>

    <section class="flex gap-x-6 mx-[270px]">
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

    <section
      class="flex flex-col h-full w-full bg-gray px-5 sm:px-10 md:px-[100px] lg:px-[140px] 2lg:px-[280px] py-10 gap-y-4"
    >
      <h1 class="text-4xl text-black font-bold">Контакты</h1>
      <p class="text-sm text-black font-semibold md:max-w-[600px]">
        © Все права защищены. Тексты, изображения и другой контент, размещенные
        на этом сайте, являются объектом авторского права и защищены
        законодательством об авторских правах. При использовании информации с
        данного сайта, обязательно указывайте ссылку на источник.
      </p>
      <div class="flex flex-col gap-y-1 gap-x-5 md:flex-row">
        <a
          class="w-fit border-b border-dashed border-b-black text-sm text-black font-semibold"
          href="#"
          >Политика конфиденциальности</a
        >
        <a
          class="w-fit border-b border-dashed border-b-black text-sm text-black font-semibold"
          href="#"
          >Условия использования</a
        >
      </div>
      <div class="flex flex-col gap-y-2 gap-x-5 mt-2 md:flex-row">
        <div class="flex gap-x-2">
          <i>1</i>
          <div class="text-sm text-black font-semibold">Санкт-Петербург</div>
        </div>
        <div class="flex gap-x-2">
          <i>1</i>
          <div class="text-sm text-black font-semibold">@findyourplantinfo</div>
        </div>
        <div class="flex gap-x-2">
          <i>1</i>
          <div class="text-sm text-black font-semibold">
            findyourplantofficial@gmail.com
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
