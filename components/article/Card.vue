<template>
  <div
    class="flex cursor-pointer flex-col gap-y-6 transition-all hover:scale-105"
    @click="$router.push('/articles/1')"
  >
    <div class="h-[280px] w-full bg-primary"></div>
    <div class="flex flex-col gap-y-3">
      <div class="flex items-center justify-between">
        <div class="rounded-full bg-gray px-4 py-3 text-xs font-semibold uppercase text-black">
          сезонные работы
        </div>
        <div class="flex gap-x-3">
          <div class="flex items-center justify-center gap-x-1">
            <nuxt-icon name="thumbs-up" class="h-6 w-6 text-primary" />
            <div class="text-black">20</div>
          </div>
          <div class="flex items-center justify-center gap-x-1">
            <nuxt-icon name="eye" class="h-6 w-6 text-primary" />
            <div class="text-black">50</div>
          </div>
        </div>
      </div>
      <h2 class="text-2xl font-semibold text-black">Оформление зимнего сада</h2>
      <p class="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam...
      </p>
      <Button class="w-fit" label="Читать статью" outlined />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
