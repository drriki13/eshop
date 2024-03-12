<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
const visible = ref(false);
</script>

<template>
  <div
    class="sticky top-0 z-50 flex h-[96px] items-center justify-between gap-x-10 border border-gray bg-white p-6 sm:justify-center"
  >
    <NuxtLink
      exact-active-class="active"
      class="hidden border-b-4 border-white py-2.5 text-sm font-semibold uppercase text-black hover:border-primary/30 sm:block"
      to="/"
      >главная</NuxtLink
    >
    <NuxtLink
      exact-active-class="active"
      class="hidden border-b-4 border-primary/0 py-2.5 text-sm font-semibold uppercase text-black hover:border-primary/30 sm:block"
      to="/catalog"
      >каталог</NuxtLink
    >
    <NuxtLink class="transition-all hover:-translate-y-1" to="/admin">
      <img class="h-[45px] w-[50px]" src="/img/logo.png" alt="logo" />
    </NuxtLink>
    <NuxtLink
      exact-active-class="active"
      class="hidden border-b-4 border-white py-2.5 text-sm font-semibold uppercase text-black hover:border-primary/30 sm:block"
      to="/articles"
      >статьи</NuxtLink
    >
    <NuxtLink
      exact-active-class="active"
      class="hidden border-b-4 border-primary/0 py-2.5 text-sm font-semibold uppercase text-black hover:border-primary/30 sm:block"
      to="/favorites"
      >избранное</NuxtLink
    >
    <a
      class="block py-2.5 text-sm font-semibold uppercase text-black sm:hidden"
      href="#"
      @click.prevent="visible = !visible"
    >
      <i class="pi pi-bars text-2xl text-black" />
    </a>

    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col gap-y-5">
        <NuxtLink
          @click="visible = false"
          exact-active-class="active"
          class="w-fit py-2.5 text-sm font-semibold uppercase text-black"
          to="/"
          >главная</NuxtLink
        >
        <NuxtLink
          @click="visible = false"
          exact-active-class="active"
          class="w-fit py-2.5 text-sm font-semibold uppercase text-black"
          to="/catalog"
          >каталог</NuxtLink
        >
        <NuxtLink
          @click="visible = false"
          exact-active-class="active"
          class="w-fit py-2.5 text-sm font-semibold uppercase text-black"
          to="/articles"
          >статьи</NuxtLink
        >
        <NuxtLink
          @click="visible = false"
          exact-active-class="active"
          class="w-fit py-2.5 text-sm font-semibold uppercase text-black"
          to="/favorites"
          >избранное</NuxtLink
        >
      </div>
    </Sidebar>
  </div>
</template>

<style scoped>
.active {
  border-bottom: 4px solid #10b981 !important;
}
</style>
