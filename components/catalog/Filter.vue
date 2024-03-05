<template>
  <div class="flex-col gap-y-10 w-[260px] lg:w[280px] hidden md:flex">
    <div class="flex flex-col gap-y-5">
      <h2 class="text-black text-2xl font-semibold">Категория</h2>
      <ul class="flex flex-col gap-y-2">
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Все разделы</li>
        <li class="text-primary hover:text-primary cursor-pointer text-sm font-semibold">Хвойные растения</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Лиственные растения</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Плодовые</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Многолетние цветы</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Однолетние цветы</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Рододендроны</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Розы</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Лианы</li>
        <li class="text-black hover:text-primary cursor-pointer text-sm font-semibold">Водные</li>
      </ul>
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-black text-2xl font-semibold">Цена</h2>
      <Slider v-model="range" min="0" max="100000" range class="w-14rem" />
      <div class="text-black text-sm font-semibold">
        {{range[0]}} р. — {{range[1]}} р.
      </div>
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-black text-2xl font-semibold">Рейтинг</h2>
      <Rating v-model="rating" :cancel="false" />
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-black text-2xl font-semibold">Магазины</h2>
      <InputText v-model="search" placeholder="Поиск" />

      <div class="flex flex-col gap-y-2">
        <div class="flex align-items-center">
          <Checkbox v-model="shopList" inputId="ingredient1" name="pizza" value="Cheese" />
          <label for="ingredient1" class="ml-2 text-black text-sm font-semibold cursor-pointer"> Москва </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="shopList" inputId="ingredient2" name="pizza" value="Mushroom" />
          <label for="ingredient2" class="ml-2 text-black text-sm font-semibold cursor-pointer"> Нижний Новгород </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="shopList" inputId="ingredient3" name="pizza" value="Pepper" />
          <label for="ingredient3" class="ml-2 text-black text-sm font-semibold cursor-pointer"> Ярославль </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="shopList" inputId="ingredient4" name="pizza" value="Onion" />
          <label for="ingredient4" class="ml-2 text-black text-sm font-semibold cursor-pointer"> Санкт-Петербург </label>
        </div>
      </div>

      <div class="text-primary text-sm font-semibold cursor-pointer">Показать всё</div>
    </div>

    <Button class="w-fit" label="Сбросить" outlined />
  </div>
</template>

<script setup lang="ts">
const range = ref([0, 100000]);
const rating = ref(1);
const search = ref<string>('');
const shopList = ref();
</script>

<style scoped>

</style>