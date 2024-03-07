<template>
  <div class="flex h-screen w-full bg-[#f2f4f7]">
    <Sidebar />
    <div class="flex h-full w-full flex-col">
      <Header />
      <div class="p-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
