<template>
  <div class="flex flex-col bg-white">
    <DataTable
      :value="customers"
      lazy
      paginator
      :first="first"
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      :totalRecords="totalRecords"
      :loading="loading"
      dataKey="id"
      tableStyle="min-width: 50rem"
    >
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

onMounted(async () => {
  loading.value = true;

  lazyParams.value = {
    first: 0,
    rows: 10,
    sortField: null,
    sortOrder: null,
  };

  await loadLazyData();
});

const columns = ref([
  { field: 'id', header: 'ID' },
  { field: 'title', header: 'Название' },
  { field: 'rating', header: 'Рейтинг' },
]);

const loading = ref(false);
const lazyParams = ref({});
const first = ref(0);
const totalRecords = ref(0);
const customers = ref();

const loadLazyData = async (event?: any) => {
  lazyParams.value = { ...lazyParams.value, first: event?.first || first.value };

  const { data, pending } = await useFetch('/api/shop/list');
  loading.value = pending.value;
  customers.value = data.value?.fetch;
  console.log(data.value);
  totalRecords.value = 1;
};
</script>

<style scoped></style>
