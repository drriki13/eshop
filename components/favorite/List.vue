<template>
  <div class="mx-5 flex flex-col sm:mx-10 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CatalogCard v-for="n in perPage" />
    </div>

    <Paginator
      class="mt-6"
      v-model="page"
      :rows="perPage"
      @update:rows="setPerPage"
      :totalRecords="120"
      :rowsPerPageOptions="[9, 18, 30]"
    />
  </div>
</template>

<script setup lang="ts">
const page = ref<number>(1);
const perPage = ref<number>(9);

const setPerPage = (value: number) => {
  page.value = 1;
  perPage.value = value;
};
</script>

<style scoped></style>
