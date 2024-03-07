<template>
  <div class="flex flex-col">
    <section
      class="relative flex flex-col items-center justify-center gap-y-8 h-[calc(600px-80px)] bg_img"
    >
      <div class="flex flex-col items-center gap-y-3 px-4">
        <h1 class="text-4xl text-black font-bold">Find Your Plant</h1>
        <h3
          class="text-sm text-black text-center font-semibold w-auto sm:w-[480px] md:w-[620px] lg:w-[660px]"
        >
          Простой и удобный способ поиска растений по названию или сорту,
          доступный в самых крупных городах России. Вам не нужно тратить время
          на поездки по питомникам - достаточно ввести его название или сорт и
          получить результаты
        </h3>
      </div>

      <div class="flex flex-col items-center gap-y-3">
        <div class="relative h-14 w-[334px] md:w-[540px] lg:w-[620px]">
          <Button
            class="absolute left-1.5 mt-1.5 w-11 h-11 rounded-xl"
            severity="secondary"
            icon="pi pi-map-marker"
          />
          <InputText
            class="rounded-xl w-full h-14 px-14"
            placeholder="Название растения..."
          />
          <Button
            class="absolute right-1.5 mt-1.5 w-11 h-11 rounded-xl"
            icon="pi pi-search"
          />
        </div>

        <div class="flex gap-x-1.5">
          <span class="text-sm text-black font-semibold">Популярное: </span>
          <span class="text-sm text-primary font-semibold"
            >Example, Example, Example</span
          >
        </div>
      </div>

      <div class="absolute slidedown-icon bottom-8">
        <i class="pi pi-arrow-circle-down text-black text-4xl" />
      </div>
    </section>
    <section class="flex flex-col py-[70px] w-full">
      <div
        class="flex flex-col mx-5 xs:mx-10 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]"
      >
        <h1 class="text-4xl text-black font-bold mb-10">
          Что такое Find Your Plant?
        </h1>

        <div class="flex flex-wrap gap-y-8 xs:flex-nowrap xs:gap-x-8">
          <div class="flex flex-col gap-y-3">
            <img
              class="w-10 h-10 mb-3 md:w-16 md:h-16"
              src="/img/tree_1.png"
              alt="img_1"
            />
            <h2 class="text-xl text-black font-semibold">
              Разнообразие выбора
            </h2>
            <p class="text-sm text-black font-semibold">
              Если вам важно найти растение по наилучшей цене, сайт позволяет
              сравнить цены разных питомников на одно и то же растение. Это
              поможет сделать более осознанный и выгодный выбор
            </p>
          </div>
          <div class="flex flex-col gap-y-3">
            <img
              class="w-10 h-10 mb-3 md:w-16 md:h-16"
              src="/img/tree_2.png"
              alt="img_2"
            />
            <h2 class="text-xl text-black font-semibold">Сравнение цен</h2>
            <p class="text-sm text-black font-semibold">
              Благодаря базе данных с большим количеством питомников, сайт
              предлагает широкий выбор растений для сада. Вы сможете найти как
              популярные растения, так и редкие экземпляры для создания
              особенного облика вашего сада
            </p>
          </div>
          <div class="flex flex-col gap-y-3">
            <img
              class="w-10 h-10 mb-3 md:w-16 md:h-16"
              src="/img/tree_3.png"
              alt="img_3"
            />
            <h2 class="text-xl text-black font-semibold">Экономия времени</h2>
            <p class="text-sm text-black font-semibold">
              Сайт Find Your Plant позволяет сэкономить время, которое обычно
              тратится на поездки по питомникам. Вы можете найти нужное растение
              прямо сидя дома или в офисе, без лишних усилий
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col xs:mx-10 md:mx-[100px] md:flex-row lg:mx-[140px] 2lg:mx-[280px] py-[40px]"
    >
      <img
        class="mb-6 h-[260px] object-cover md:mb-0 md:mr-6 md:h-[400px] lg:h-[500px] 2lg:h-[600px]"
        src="/public/img/img_1.png"
        alt="img_1"
      />
      <div class="flex flex-col gap-y-4 px-5 xs:px-0">
        <div class="px-4 py-2 rounded-full bg-gray w-fit">
          <span class="text-sm text-black font-semibold uppercase">
            products
          </span>
        </div>
        <h1 class="text-4xl text-black font-bold">
          Для садовников и ландшафтных фирм
        </h1>
        <p class="text-sm text-black font-semibold">
          Доступ к широкому выбору растений для проектов различной сложности.
          Участие на сайте также дает компаниям дополнительную рекламу и
          повышает их узнаваемость перед целевой аудиторией. Для самостоятельных
          садоводов наша платформа также облегчает выбор растений. С большим
          разнообразием доступных вариантов, вы легко найдете идеальные растения
          для вашего сада. Присоединяйтесь к Find Your Plant и превратите свой
          сад в настоящий рай!
        </p>
        <Button class="w-fit" label="Присоединиться" outlined />
        <div class="flex h-full gap-x-8 md:hidden lg:flex">
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col xs:mx-10 md:mx-[100px] md:flex-row-reverse lg:mx-[140px] 2lg:mx-[280px] py-[40px]"
    >
      <img
        class="mb-6 h-[260px] object-cover md:mb-0 md:ml-6 md:h-[400px] lg:h-[500px] 2lg:h-[600px]"
        src="/public/img/img_1.png"
        alt="img_1"
      />
      <div class="flex flex-col gap-y-4 px-5 xs:px-0">
        <div class="px-4 py-2 rounded-full bg-gray w-fit">
          <span class="text-sm text-black font-semibold uppercase">
            products
          </span>
        </div>
        <h1 class="text-4xl text-black font-bold">Для питомников</h1>
        <p class="text-sm text-black font-semibold">
          Сайт предоставляет питомникам ряд преимуществ, включая увеличение
          охвата аудитории, продвижение редких растений, возможность сравнения
          цен, а также дополнительную рекламу и повышение узнаваемости. Все это
          способствует увеличению клиентской базы и объема продаж.
          Присоединяйтесь к Find Your Plant прямо сейчас!
        </p>
        <Button class="w-fit h-10" label="Присоединиться" outlined />
        <div class="flex h-full gap-x-8 md:hidden lg:flex">
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
          <div
            class="h-[100px] w-[100px] sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px] bg-black self-end"
          ></div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Find your plant",
});
</script>

<style scoped>
.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url("../public/img/header.png");
}

@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
</style>
