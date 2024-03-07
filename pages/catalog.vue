<template>
  <div class="flex flex-col gap-y-10">
    <div
      class="relative flex flex-col items-center justify-center gap-y-8 h-[calc(600px-80px)] bg_img"
    >
      <div class="flex flex-col items-center gap-y-3 px-4">
        <h1 class="text-4xl text-black font-bold">Find Your Plant</h1>
        <h3
          class="text-sm text-black text-center font-semibold w-auto sm:w-[480px] md:w-[620px] lg:w-[660px]"
        >
          Простой и удобный способ поиска растений по названию или сорту,
          доступный в самых крупных городах России. Вам не нужно тратить время
          на поездки по питомникам - достаточно ввести его название или сорт и
          получить результаты
        </h3>
      </div>

      <div class="flex flex-col items-center gap-y-3">
        <div class="relative h-14 w-[334px] md:w-[540px] lg:w-[620px]">
          <Button
            class="absolute left-1.5 mt-1.5 w-11 h-11 rounded-xl"
            severity="secondary"
            icon="pi pi-map-marker"
          />
          <InputText
            class="rounded-xl w-full h-14 px-14"
            placeholder="Название растения..."
          />
          <Button
            class="absolute right-1.5 mt-1.5 w-11 h-11 rounded-xl"
            icon="pi pi-search"
          />
        </div>

        <div class="flex gap-x-1.5">
          <span class="text-sm text-black font-semibold">Популярное: </span>
          <span class="text-sm text-primary font-semibold"
            >Example, Example, Example</span
          >
        </div>
      </div>

      <div class="absolute slidedown-icon bottom-8">
        <i class="pi pi-arrow-circle-down text-black text-4xl" />
      </div>
    </div>

    <div class="flex flex-col items-center gap-y-3">
      <h2 class="text-black text-3xl font-semibold">Хвойные растения</h2>
      <Button class="w-fit md:hidden" label="Фильтры" outlined />
    </div>

    <div class="flex gap-x-6 mx-5 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]">
      <CatalogFilter />
      <CatalogList />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Каталог",
});
</script>

<style scoped>
.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url("../public/img/header.png");
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
