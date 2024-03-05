<template>
  <div class="flex flex-col mx-[270px]">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
    >
      <ArticleCard v-for="n in perPage" />
    </div>
    <Paginator
      class="mt-6"
      :rows="perPage"
      @update:rows="(value: number) => (perPage = value)"
      :totalRecords="120"
      :rowsPerPageOptions="[9, 18, 30]"
    ></Paginator>
  </div>
</template>

<script setup lang="ts">
const perPage = ref<number>(9);
</script>

<style scoped></style>
