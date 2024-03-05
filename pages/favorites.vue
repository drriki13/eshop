<template>
  <div class="flex flex-col h-full items-center gap-y-[60px]">
    <section class="flex flex-col items-center gap-y-5 mt-10 mx-5">
      <h1 class="text-4xl text-black font-bold">Избранное</h1>
      <p class="text-sm text-black text-center font-semibold max-w-[840px]">
        В этом разделе вы найдете список растений, которые вам понравились и на которые вы поставили сердечко.
        Связывайтесь с питомниками, уточняйте наличие, запрашивайте фотографии, оформляйте заказ и радуйтесь новым
        растениям в вашем саду!
      </p>
    </section>

    <FavoriteList />

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>