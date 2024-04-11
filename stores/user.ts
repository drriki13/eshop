import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IUser } from '~/types/IUser';

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<IUser | null>(null);
    const isAuthenticated = ref<boolean>(false);

    function setUser(data: IUser | null, isAuth: boolean = false) {
      user.value = data;
      isAuthenticated.value = isAuth;
    }

    return { user, isAuthenticated, setUser };
  },
  { persist: true },
);
