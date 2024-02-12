<template>
  <div class="flex w-full h-screen bg-[#f2f4f7]">
    <Sidebar />
    <div class="flex flex-col w-full h-full">
      <Header />
      <div class="p-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>