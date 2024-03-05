<template>
  <div class="flex flex-col mt-10 gap-y-10">
    <div class="flex flex-col items-center gap-y-3">
      <h2 class="text-black text-2xl font-semibold">Каталог</h2>
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
</script>

<style scoped></style>