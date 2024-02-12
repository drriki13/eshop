<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center h-screen bg__header">
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