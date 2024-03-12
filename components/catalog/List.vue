<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 xs:grid-cols-2 lg:grid-cols-3">
      <CatalogCard v-for="n in perPage" />
    </div>

    <Paginator
      class="mt-[60px]"
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
