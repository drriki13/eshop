<template>
  <div class="w-full h-full bg-gray">
    <div class="flex bg-white p-10 max-w-[1050px] max-h-[640px]">
      <div class="w-1/2 h-[480px] bg-primary"></div>
      <div class="w-1/2 flex flex-col mx-10 my-5 gap-y-5">
        <div class="flex items-center justify-between">
          <Rating v-model="rating" readonly :cancel="false" />
          <div class="text-black text-sm font-semibold">5.0</div>
        </div>

        <div class="flex flex-col gap-y-2">
          <div class="text-black text-xl font-semibold">Название растения</div>
          <div class="text-primary text-sm font-semibold">The name of the plant</div>
        </div>

        <div class="flex items-center gap-x-3">
          <h2 class="text-black text-2xl font-semibold">1400 ₽</h2>
          <span class="text-black line-through">1600 ₽</span>
        </div>

        <div class="flex items-center gap-x-2">
          <div class="text-black text-sm font-semibold px-3 py-1.5 bg-gray">ЗКС</div>
          <div class="text-black text-sm font-semibold px-3 py-1.5 bg-gray">Air-pot</div>
          <div class="text-black text-sm font-semibold px-3 py-1.5 bg-gray">2xv</div>
        </div>

        <p class="text-black text-sm font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Viverra vitae congue eu consequat ac felis.
        </p>

        <div class="flex flex-col gap-y-1.5">
          <div class="flex items-center gap-x-2">
            <div>1</div>
            <div class="text-black text-sm font-semibold">Москва, ул. Центральная, 20</div>
          </div>
          <div class="flex items-center gap-x-2">
            <div>1</div>
            <div class="text-black text-sm font-semibold">+7 990 999-99-99</div>
          </div>
          <div class="flex items-center gap-x-2">
            <div>1</div>
            <div class="text-black text-sm font-semibold">pochta_plants@mail.ru</div>
          </div>
        </div>

        <div class="flex items-center gap-x-2">
          <div class="flex items-center justify-center h-6 w-6 bg-gray rounded-full">0</div>
          <div class="flex items-center justify-center h-6 w-6 bg-gray rounded-full">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rating = ref<number>(4);
</script>

<style scoped></style>