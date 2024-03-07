<script setup lang="ts">
useHead({
  title: 'Auth',
});

definePageMeta({
  layout: 'empty',
});

const loginForm = ref({
  login: '',
  password: '',
  rememberMe: false,
});
</script>

<template>
  <div class="mx-auto">
    <div class="flex flex-col gap-4 bg-white p-10 shadow">
      <h1 class="text-center text-xl font-semibold">Авторизация</h1>
      <div class="flex flex-col gap-2">
        <label for="login" class="w-fit cursor-pointer">Логин</label>
        <InputText
          id="login"
          v-model="loginForm.login"
          placeholder="Логин"
          aria-describedby="login-help"
        />
        <!--        <small id="login-help" class="text-red-500">Enter your username to reset your password.</small>-->
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="w-fit cursor-pointer">Пароль</label>
        <Password
          inputId="password"
          v-model="loginForm.password"
          placeholder="Пароль"
          toggleMask
          aria-describedby="pass-help"
        />
        <!--        <small id="pass-help" class="text-red-500">Enter your username to reset your password.</small>-->
      </div>
      <div class="flex gap-2">
        <InputSwitch inputId="rememberMe" v-model="loginForm.rememberMe" />
        <label for="rememberMe" class="w-fit cursor-pointer">Запомнить меня</label>
      </div>
      <Button label="Войти" />
    </div>
  </div>
</template>

<style scoped></style>
