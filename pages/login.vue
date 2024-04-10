<script setup lang="ts">
useHead({
  title: 'Auth',
});

definePageMeta({
  layout: 'empty',
});

const { defineField, handleSubmit, resetForm, errors, setFieldError } = useForm({
  initialValues: {
    email: '',
    password: '',
    rememberMe: true,
  },
});

const [email] = defineField('email');
const [password] = defineField('password');
const [rememberMe] = defineField('rememberMe');

const onSubmit = handleSubmit((values) => {
  auth(values);
});

const auth = async (form: any) => {
  const { data, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: form,
  });

  if (error.value?.statusCode == 422) {
    error.value.data.data.forEach((item: any) => {
      setFieldError(item.field, item.message);
    });
  } else {
    console.log('Success: ', data);
  }
};
</script>

<template>
  <div class="mx-auto">
    <div class="flex w-[322px] flex-col gap-4 bg-white p-10 shadow">
      <h1 class="text-center text-xl font-semibold">Авторизация</h1>
      <VeeForm class="flex flex-col gap-4" @submit="onSubmit">
        <div class="flex flex-col gap-2">
          <label for="login" class="w-fit cursor-pointer">Логин</label>
          <InputText
            id="login"
            v-model="email"
            placeholder="Логин"
            @update:modelValue="setFieldError('email', '')"
            aria-describedby="login-help"
          />
          <small id="login-help" class="text-red">
            {{ errors.email }}
          </small>
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="w-fit cursor-pointer">Пароль</label>
          <Password
            inputId="password"
            v-model="password"
            placeholder="Пароль"
            toggleMask
            @update:modelValue="setFieldError('password', '')"
            aria-describedby="pass-help"
          />
          <small id="pass-help" class="text-red"> {{ errors.password }}</small>
        </div>
        <div class="flex gap-2">
          <InputSwitch inputId="rememberMe" v-model="rememberMe" />
          <label for="rememberMe" class="w-fit cursor-pointer">Запомнить меня</label>
        </div>
        <Button type="submit" label="Войти" />
      </VeeForm>
    </div>
  </div>
</template>

<style scoped></style>
