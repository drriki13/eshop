<template>
  <div class="lg:w[280px] hidden w-[260px] flex-col gap-y-10 md:flex">
    <div class="flex flex-col gap-y-5">
      <h2 class="text-2xl font-semibold text-black">Категория</h2>
      <ul class="flex flex-col gap-y-2">
        <li class="cursor-pointer text-black hover:text-primary">
          Все разделы
        </li>
        <li class="cursor-pointer text-primary hover:text-primary">
          Хвойные растения
        </li>
        <li class="cursor-pointer text-black hover:text-primary">
          Лиственные растения
        </li>
        <li class="cursor-pointer text-black hover:text-primary">Плодовые</li>
        <li class="cursor-pointer text-black hover:text-primary">
          Многолетние цветы
        </li>
        <li class="cursor-pointer text-black hover:text-primary">
          Однолетние цветы
        </li>
        <li class="cursor-pointer text-black hover:text-primary">
          Рододендроны
        </li>
        <li class="cursor-pointer text-black hover:text-primary">Розы</li>
        <li class="cursor-pointer text-black hover:text-primary">Лианы</li>
        <li class="cursor-pointer text-black hover:text-primary">Водные</li>
      </ul>
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-2xl font-semibold text-black">Цена</h2>
      <Slider v-model="range" min="0" max="100000" range class="w-14rem" />
      <div class=" font-semibold text-black">{{ range[0] }} р. — {{ range[1] }} р.</div>
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-2xl font-semibold text-black">Рейтинг</h2>
      <Rating v-model="rating" :cancel="false" />
    </div>

    <div class="flex flex-col gap-y-5">
      <h2 class="text-2xl font-semibold text-black">Магазины</h2>
      <InputText v-model="search" placeholder="Поиск" />

      <div class="flex flex-col gap-y-2">
        <div class="align-items-center flex">
          <Checkbox v-model="shopList" inputId="ingredient1" name="pizza" value="Cheese" />
          <label for="ingredient1" class="ml-2 cursor-pointer text-black">
            Москва
          </label>
        </div>
        <div class="align-items-center flex">
          <Checkbox v-model="shopList" inputId="ingredient2" name="pizza" value="Mushroom" />
          <label for="ingredient2" class="ml-2 cursor-pointer text-black">
            Нижний Новгород
          </label>
        </div>
        <div class="align-items-center flex">
          <Checkbox v-model="shopList" inputId="ingredient3" name="pizza" value="Pepper" />
          <label for="ingredient3" class="ml-2 cursor-pointer text-black">
            Ярославль
          </label>
        </div>
        <div class="align-items-center flex">
          <Checkbox v-model="shopList" inputId="ingredient4" name="pizza" value="Onion" />
          <label for="ingredient4" class="ml-2 cursor-pointer text-black">
            Санкт-Петербург
          </label>
        </div>
      </div>

      <div class="cursor-pointer text-primary">Показать всё</div>
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

<style scoped></style>
