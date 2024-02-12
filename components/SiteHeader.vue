<script setup lang="ts">
import Sidebar from 'primevue/sidebar'
const visible = ref(false);
</script>

<template>
  <div class="sticky top-0 z-50 flex items-center justify-between gap-x-10 bg-white border border-gray h-[80px] sm:justify-center p-6">
    <a class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary" href="#">главная</a>
    <a class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary/0" href="#">каталог</a>
    <a class="transition-all hover:-translate-y-1" href="#">
      <img class="w-[50px] h-[45px]" src="/img/logo.png" alt="logo">
    </a>
    <a class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary/0" href="#">статьи</a>
    <a class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary/0" href="#">избранное</a>
    <a class="block sm:hidden text-black text-sm uppercase font-semibold py-2.5" href="#" @click.prevent="visible = !visible">
      <i class="text-black text-2xl pi pi-bars" />
    </a>

    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col gap-y-5">
        <a class="w-fit text-black text-sm uppercase font-semibold py-2.5 border-b-4 border-primary" href="#">главная</a>
        <a class="w-fit text-black text-sm uppercase font-semibold py-2.5" href="#">каталог</a>
        <a class="w-fit text-black text-sm uppercase font-semibold py-2.5" href="#">статьи</a>
        <a class="w-fit text-black text-sm uppercase font-semibold py-2.5" href="#">избранное</a>
      </div>
    </Sidebar>
  </div>
</template>

<style scoped></style>