<template>
  <div class="flex flex-col gap-y-6 cursor-pointer transition-all hover:scale-105" @click="showProducts">
    <div class="relative">
      <div class="w-full h-[330px] bg-primary"></div>
      <div class="absolute top-0 right-0 bg-gray mt-4 mr-4 h-10 w-10 rounded-full flex items-center justify-center">0</div>
    </div>

    <div class="flex flex-col gap-y-2">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <div class="text-black text-xl font-semibold">Название растения</div>
          <div class="text-black text-sm font-semibold">5.0</div>
        </div>
        <div class="text-primary text-sm font-semibold">The name of the plant</div>
      </div>
      <div class="flex items-center gap-x-3">
        <h2 class="text-black text-2xl font-semibold">1400 ₽</h2>
        <span class="text-black line-through">1600 ₽</span>
      </div>
      <p class="text-black text-sm font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <Button class="w-fit" label="Смотреть" outlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ModalsProduct} from "#components";

const dialog = useDialog();
const showProducts = () => {
  dialog.open(ModalsProduct,{
    props: {
      header: 'Product List',
      style: {
        width: '50vw',
      },
      breakpoints:{
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    }
  });
}
</script>

<style scoped></style>