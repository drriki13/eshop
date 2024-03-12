<template>
  <div
    class="flex cursor-pointer flex-col gap-y-6 transition-all hover:scale-105"
    @click="showProducts"
  >
    <div class="relative">
      <div class="h-[330px] w-full bg-primary"></div>
      <div
        class="absolute right-0 top-0 mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray"
      >
        <i class="pi pi-heart" />
      </div>
    </div>

    <div class="flex flex-col gap-y-2">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-black">Название растения</div>
          <div class="flex items-center justify-center gap-x-2">
            <i class="pi pi-star-fill text-primary" />
            <div class="text-black">5.0</div>
          </div>
        </div>
        <div class="text-primary">The name of the plant</div>
      </div>
      <div class="flex items-center gap-x-3">
        <h2 class="text-2xl font-semibold text-black">1400 ₽</h2>
        <span class="text-black line-through">1600 ₽</span>
      </div>
      <p class="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
      <Button class="w-fit" label="Смотреть" outlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalsProduct } from '#components';

const dialog = useDialog();
const showProducts = () => {
  dialog.open(ModalsProduct, {
    props: {
      header: 'Product List',
      style: {
        width: '50vw',
      },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      modal: true,
    },
  });
};
</script>

<style scoped></style>
