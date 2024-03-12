<template>
  <section
    class="footer mt-10 flex h-full w-full flex-col gap-y-4 bg-gray px-5 py-10 sm:px-10 md:px-[100px] lg:px-[140px] 2lg:px-[280px]"
  >
    <h1 class="text-6xl font-bold text-black">Контакты</h1>
    <p class="font-semibold text-black md:max-w-[600px]">
      © Все права защищены. Тексты, изображения и другой контент, размещенные на этом сайте,
      являются объектом авторского права и защищены законодательством об авторских правах. При
      использовании информации с данного сайта, обязательно указывайте ссылку на источник.
    </p>
    <div class="flex flex-col gap-x-5 gap-y-1 md:flex-row">
      <a class="w-fit border-b border-dashed border-b-black font-semibold text-black" href="#"
        >Политика конфиденциальности</a
      >
      <a class="w-fit border-b border-dashed border-b-black font-semibold text-black" href="#"
        >Условия использования</a
      >
    </div>
    <div class="mt-2 flex flex-col gap-x-5 gap-y-2 md:flex-row">
      <div class="flex items-center gap-x-2 hover:cursor-pointer">
        <div class="flex h-6 w-6 items-center justify-center text-primary">
          <nuxt-icon name="location" class="h-6 w-6 text-primary" />
        </div>
        <div class="font-semibold text-black">Санкт-Петербург</div>
      </div>
      <div class="flex items-center gap-x-2 hover:cursor-pointer">
        <div class="flex h-6 w-6 items-center justify-center text-primary">
          <nuxt-icon name="telegram" class="h-6 w-6 text-primary" />
        </div>
        <div class="font-semibold text-black">@findyourplantinfo</div>
      </div>
      <div class="flex items-center gap-x-2 hover:cursor-pointer">
        <div class="flex h-6 w-6 items-center justify-center text-primary">
          <nuxt-icon name="mail" class="h-6 w-6 text-primary" />
        </div>
        <div class="font-semibold text-black">findyourplantofficial@gmail.com</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url('/img/footer.png');
}
</style>
