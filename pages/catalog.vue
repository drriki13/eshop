<template>
  <div class="flex flex-col gap-y-10">
    <div
      class="bg_img relative flex h-[calc(600px-80px)] flex-col items-center justify-center gap-y-8"
    >
      <div class="flex flex-col items-center gap-y-3 px-4">
        <h1 class="text-7xl font-bold text-black">Каталог</h1>
        <h3
          class="w-auto text-center font-semibold text-black sm:w-[480px] md:w-[620px] lg:w-[660px]"
        >
          Выберите город, введите название растения или сорта и получите результат. Поиск работает на русском, латинице
          или английском языках. На каждом языке будут различные результаты. Пробуйте разные варианты и получайте наилучший результат.
        </h3>
      </div>

      <div class="flex flex-col items-center gap-y-3">
        <div class="relative h-14 w-[334px] md:w-[540px] lg:w-[620px]">
          <Button
            class="absolute left-1.5 mt-1.5 h-11 w-11 rounded-xl"
            severity="secondary"
            icon="pi pi-map-marker"
          />
          <InputText class="h-14 w-full rounded-xl px-14" placeholder="Название растения..." />
          <Button class="absolute right-1.5 mt-1.5 h-11 w-11 rounded-xl" icon="pi pi-search" />
        </div>

        <div class="flex gap-x-1.5">
          <span class="font-semibold text-black">Популярное: </span>
          <span class="font-semibold text-primary">Example, Example, Example</span>
        </div>
      </div>

      <div class="slidedown-icon absolute bottom-8">
        <i class="pi pi-arrow-circle-down text-4xl text-black" />
      </div>
    </div>

    <div class="flex flex-col items-center gap-y-3">
      <h2 class="text-5xl font-semibold text-black">Хвойные растения</h2>
      <Button class="w-fit md:hidden" label="Фильтры" outlined />
    </div>

    <div class="mx-5 flex gap-x-6 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]">
      <CatalogFilter />
      <CatalogList />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Каталог',
});
</script>

<style scoped>
.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url('../public/img/header.png');
}

@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
</style>
