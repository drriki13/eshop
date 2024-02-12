<script setup lang="ts">
  const menu = ref();
  const items = [
    {
      label: 'Профиль',
      icon: 'pi pi-user'
    },
    {
      label: 'Выход',
      icon: 'pi pi-sign-out'
    }
  ];
  const toggle = (event) => {
    menu.value.toggle(event);
  };
</script>

<template>
  <section class="bg-white shadow flex py-5 px-10 items-center gap-6">
   <span class="p-input-icon-right flex-grow">
      <i class="pi pi-search" />
      <InputText class="w-full" placeholder="Поиск" />
    </span>
    <Avatar label="A" shape="circle" class="border-2 border-[#10b981] w-12 h-12 cursor-pointer" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </section>
</template>

<style scoped>

</style>