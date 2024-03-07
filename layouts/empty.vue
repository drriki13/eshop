<script setup lang="ts"></script>

<template>
  <div class="bg__header flex h-screen items-center justify-center">
    <slot />
  </div>
</template>

<style scoped>
.bg__header {
  background-image: url('public/img/header.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
