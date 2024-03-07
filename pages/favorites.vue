<template>
  <div class="flex h-full flex-col items-center gap-y-[60px]">
    <section class="mx-5 mt-10 flex flex-col items-center gap-y-5">
      <h1 class="text-4xl font-bold text-black">Избранное</h1>
      <p class="max-w-[840px] text-center text-sm font-semibold text-black">
        В этом разделе вы найдете список растений, которые вам понравились и на которые вы поставили
        сердечко. Связывайтесь с питомниками, уточняйте наличие, запрашивайте фотографии, оформляйте
        заказ и радуйтесь новым растениям в вашем саду!
      </p>
    </section>

    <FavoriteList />

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
