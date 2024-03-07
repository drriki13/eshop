<template>
  <NuxtLayout>
    <NuxtPage />
    <DynamicDialog />
  </NuxtLayout>
</template>

<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #e4eaef;
}

::-webkit-scrollbar-thumb {
  background-color: #10b981;
  border-radius: 14px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
