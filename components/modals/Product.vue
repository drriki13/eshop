<template>
  <div class="h-full w-full bg-gray">
    <div class="flex max-h-[640px] max-w-[1050px] bg-white p-10">
      <div class="h-[550px] w-1/2 bg-primary"></div>
      <div class="mx-10 my-2 flex w-1/2 flex-col gap-y-5">
        <div class="flex items-center justify-between">
          <Rating v-model="rating" readonly :cancel="false" />
          <div class="font-semibold text-black">5.0</div>
        </div>

        <div class="flex flex-col gap-y-2">
          <div class="text-2xl font-semibold text-black">Название растения</div>
          <div class="font-semibold text-primary">The name of the plant</div>
        </div>

        <div class="flex items-center gap-x-3">
          <h2 class="text-4xl font-semibold text-black">1400 ₽</h2>
          <span class="text-black line-through">1600 ₽</span>
        </div>

        <div class="flex items-center gap-x-2">
          <div class="cursor-pointer bg-gray px-3 py-1.5 text-black" v-tooltip="'ЗКС'">ЗКС</div>
          <div class="cursor-pointer bg-gray px-3 py-1.5 text-black" v-tooltip="'Air-pot'">
            Air-pot
          </div>
          <div class="cursor-pointer bg-gray px-3 py-1.5 text-black" v-tooltip="'2xv'">2xv</div>
        </div>

        <p class="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet
          consectetur. Viverra vitae congue eu consequat ac felis.
        </p>

        <div class="flex flex-col gap-y-1.5">
          <div class="group flex cursor-pointer items-center gap-x-2">
            <div class="flex h-6 w-6 items-center justify-center text-primary">
              <nuxt-icon name="location" class="h-6 w-6 text-primary" />
            </div>
            <div class="text-black group-hover:text-primary">Москва, ул. Центральная, 20</div>
          </div>
          <div class="group flex cursor-pointer items-center gap-x-2">
            <div class="flex h-6 w-6 items-center justify-center text-primary">
              <nuxt-icon name="smartphone" class="h-6 w-6 text-primary" />
            </div>
            <div class="text-black group-hover:text-primary">+7 990 999-99-99</div>
          </div>
          <div class="group flex cursor-pointer items-center gap-x-2">
            <div class="flex h-6 w-6 items-center justify-center text-primary">
              <nuxt-icon name="mail" class="h-6 w-6 text-primary" />
            </div>
            <div class="text-black group-hover:text-primary">pochta_plants@mail.ru</div>
          </div>
        </div>

        <div class="flex items-center gap-x-2">
          <div
            class="group flex cursor-pointer items-center justify-center rounded-full bg-gray p-[14px]"
          >
            <nuxt-icon name="thumbs-up" class="h-6 w-6 text-black group-hover:text-primary" />
          </div>
          <div
            class="group flex cursor-pointer items-center justify-center rounded-full bg-gray p-[14px]"
          >
            <nuxt-icon name="share" class="h-6 w-6 text-black group-hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rating = ref<number>(4);
</script>

<style scoped></style>
