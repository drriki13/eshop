<script setup lang="ts"></script>

<template>
  <section class="h-full w-[266px] bg-white p-4 shadow">
    <div class="my-3 text-3xl font-semibold text-black">Your CRM</div>

    <div class="mt-8 flex flex-col gap-y-2">
      <NuxtLink
        active-class="text-primary"
        to="/admin"
        class="group mb-4 flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-home transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Dashboard</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/shops"
        class="group flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-book transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Магазины</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        class="group flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-list transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">
          Категории товаров
        </div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/products"
        class="group mb-4 flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-shopping-cart transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Товары</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/articles-category"
        class="group flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-list transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">
          Категории статей
        </div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/articles"
        class="group mb-4 flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-home transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Статьи</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/users"
        class="group flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-user transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">
          Пользователи
        </div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/clients"
        class="group mb-4 flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-users transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Клиенты</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/admin/settings"
        class="group mb-4 flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-cog transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">Настройки</div>
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        to="/"
        class="group flex cursor-pointer items-baseline gap-2 text-black"
      >
        <span class="pi pi-sign-out transition-all group-hover:text-primary" />
        <div class="text-sm font-semibold transition-all group-hover:text-primary">
          Вернутся на сайт
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
