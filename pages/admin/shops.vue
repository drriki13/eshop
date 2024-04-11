<template>
  <div class="flex flex-col bg-white">
    <DataTable :value="shops" lazy tableStyle="min-width: 50rem">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Shops',
});

definePageMeta({
  middleware: ['auth'],
  layout: 'admin',
});

const { data: shops, pending } = useLazyFetch('/api/shop/list');

const columns = [
  { field: 'id', header: 'ID' },
  { field: 'title', header: 'Название' },
  { field: 'rating', header: 'Рейтинг' },
];
</script>

<style scoped></style>
