<script setup lang="ts">
import type { IUser } from '~/types/IUser';
import { useUserStore } from '~/stores/user';

const menu = ref();
const items = [
  {
    label: 'Профиль',
    icon: 'pi pi-user',
  },
  {
    label: 'Выход',
    icon: 'pi pi-sign-out',
    command: () => logout(),
  },
];
const toggle = (event: any) => {
  menu.value.toggle(event);
};

const logout = async () => {
  const { data } = useFetch('/api/auth/logout');
  const { setUser } = useUserStore();
  const router = useRouter();

  setUser(null, false);
  await router.push('/');
};
</script>

<template>
  <section class="flex items-center gap-6 bg-white px-10 py-5 shadow">
    <span class="p-input-icon-right flex-grow">
      <i class="pi pi-search" />
      <InputText class="w-full" placeholder="Поиск" />
    </span>
    <Avatar
      label="A"
      shape="circle"
      class="h-12 w-12 cursor-pointer border-2 border-[#10b981]"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </section>
</template>

<style scoped></style>
