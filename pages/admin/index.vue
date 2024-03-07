<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-6 bg-white p-10 shadow">
      <h1 class="text-xl font-semibold text-[#052E31]">Congratulations, John!</h1>
      <h3 class="text-sm font-semibold text-[#052E31]">
        You have done 72% more sales today. Check your new badge in your profile.
      </h3>
      <Button class="w-fit" label="View Badges" outlined />
    </div>

    <div class="flex flex-col gap-6 bg-white p-10 shadow">
      <h1 class="mb-4 text-xl font-semibold text-[#052E31]">Количество просмотров</h1>
      <div class="flex gap-6">
        <div class="p-float-label w-[290px]">
          <Dropdown
            v-model="selectedCity"
            inputId="dd-city"
            :options="cities"
            optionLabel="name"
            class="w-full"
          />
          <label for="dd-city">Выберите месяц</label>
        </div>
        <div class="p-float-label w-[290px]">
          <Dropdown
            v-model="selectedCity"
            inputId="dd-city"
            :options="cities"
            optionLabel="name"
            class="w-full"
          />
          <label for="dd-city">Выберите день</label>
        </div>
        <div class="p-float-label w-[290px]">
          <Dropdown
            v-model="selectedCity"
            inputId="dd-city"
            :options="cities"
            optionLabel="name"
            class="w-full"
          />
          <label for="dd-city">Выберите раздел</label>
        </div>
      </div>

      <div class="flex gap-6">
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-[#AEBCBF]"></div>
          <div class="text-sm font-semibold">Лендинг</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-[#92AC6D]"></div>
          <div class="text-sm font-semibold">Статьи</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-[#052E31]"></div>
          <div class="text-sm font-semibold">Каталог</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-[#E0E7D3]"></div>
          <div class="text-sm font-semibold">Добавили в избранное</div>
        </div>
      </div>

      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[280px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Chart from 'primevue/chart';
useHead({
  title: 'Dashboard',
});

definePageMeta({
  middleware: ['auth'],
  layout: 'admin',
});

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Лендинг',
        backgroundColor: '#AEBCBF',
        borderColor: documentStyle.getPropertyValue('--cyan-500'),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Статьи',
        backgroundColor: '#92AC6D',
        borderColor: documentStyle.getPropertyValue('--gray-500'),
        data: [48, 48, 40, 19, 86, 27, 90],
      },
      {
        label: 'Каталог',
        backgroundColor: '#052E31',
        borderColor: documentStyle.getPropertyValue('--gray-500'),
        data: [58, 48, 40, 59, 86, 27, 90],
      },
      {
        label: 'Добавили в избранное',
        backgroundColor: '#E0E7D3',
        borderColor: documentStyle.getPropertyValue('--gray-500'),
        data: [21, 48, 40, 29, 86, 27, 90],
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
};
</script>

<style scoped></style>
