<script setup lang="ts">
definePageMeta({
  layout: 'empty'
});

const loginForm = ref({
  login: '',
  password: '',
  rememberMe: false
});
</script>

<template>
  <div class="mx-auto">
    <div class="bg-white shadow p-10 flex flex-col gap-4">
      <h1 class="text-center text-xl font-semibold">Авторизация</h1>
      <div class="flex flex-col gap-2">
        <label for="login" class="cursor-pointer w-fit">Логин</label>
        <InputText id="login" v-model="loginForm.login" placeholder="Логин" aria-describedby="login-help" />
<!--        <small id="login-help" class="text-red-500">Enter your username to reset your password.</small>-->
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="cursor-pointer w-fit">Пароль</label>
        <Password inputId="password" v-model="loginForm.password" placeholder="Пароль" toggleMask aria-describedby="pass-help"  />
<!--        <small id="pass-help" class="text-red-500">Enter your username to reset your password.</small>-->
      </div>
      <div class="flex gap-2">
        <InputSwitch inputId="rememberMe" v-model="loginForm.rememberMe" />
        <label for="rememberMe" class="cursor-pointer w-fit">Запомнить меня</label>
      </div>
      <Button label="Войти" />
    </div>
  </div>
</template>

<style scoped>

</style>