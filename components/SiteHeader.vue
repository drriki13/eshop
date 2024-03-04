<script setup lang="ts">
import Sidebar from 'primevue/sidebar'
const visible = ref(false);
</script>

<template>
  <div class="sticky top-0 z-50 flex items-center justify-between gap-x-10 bg-white border border-gray h-[80px] sm:justify-center p-6">
    <NuxtLink exact-active-class="active" class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-white" to="/">главная</NuxtLink>
    <NuxtLink exact-active-class="active" class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary/0" to="/catalog">каталог</NuxtLink>
    <NuxtLink class="transition-all hover:-translate-y-1" to="/">
      <img class="w-[50px] h-[45px]" src="/img/logo.png" alt="logo">
    </NuxtLink>
    <NuxtLink exact-active-class="active" class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-white" to="/articles">статьи</NuxtLink>
    <NuxtLink exact-active-class="active" class="hidden sm:block text-black text-sm uppercase font-semibold py-2.5 hover:border-primary/30 border-b-4 border-primary/0" to="/favorites">избранное</NuxtLink>
    <a class="block sm:hidden text-black text-sm uppercase font-semibold py-2.5" href="#" @click.prevent="visible = !visible">
      <i class="text-black text-2xl pi pi-bars" />
    </a>

    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col gap-y-5">
        <NuxtLink @click="visible = false" exact-active-class="active" class="w-fit text-black text-sm uppercase font-semibold py-2.5" to="/">главная</NuxtLink>
        <NuxtLink @click="visible = false" exact-active-class="active" class="w-fit text-black text-sm uppercase font-semibold py-2.5" to="/catalog">каталог</NuxtLink>
        <NuxtLink @click="visible = false" exact-active-class="active" class="w-fit text-black text-sm uppercase font-semibold py-2.5" to="/articles">статьи</NuxtLink>
        <NuxtLink @click="visible = false" exact-active-class="active" class="w-fit text-black text-sm uppercase font-semibold py-2.5" to="/favorites">избранное</NuxtLink>
      </div>
    </Sidebar>
  </div>
</template>

<style scoped>
.active {
  border-bottom: 4px solid #10B981 !important;
}
</style>