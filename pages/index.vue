<template>
  <div class="flex flex-col">
    <section
      class="bg_img relative flex h-[calc(600px-80px)] flex-col items-center justify-center gap-y-8"
    >
      <div class="flex flex-col items-center gap-y-3 px-4">
        <h1 class="text-7xl font-bold text-black">Find Your Plant</h1>
        <h3
          class="w-auto text-center font-semibold text-black sm:w-[480px] md:w-[620px] lg:w-[660px]"
        >
          Простой и удобный способ поиска растений по названию или сорту, доступный в самых крупных городах России.
          Введите название или сорт и получите результаты
        </h3>
      </div>

      <div class="flex flex-col items-center gap-y-3">
        <div class="relative h-14 w-[334px] md:w-[540px] lg:w-[620px]">
          <Button
            class="absolute left-1.5 mt-1.5 h-11 w-11 rounded-xl"
            severity="secondary"
            icon="pi pi-map-marker"
          />
          <InputText class="h-14 w-full rounded-xl px-14" placeholder="Название растения..." />
          <Button class="absolute right-1.5 mt-1.5 h-11 w-11 rounded-xl" icon="pi pi-search" />
        </div>

        <div class="flex gap-x-1.5">
          <span class="font-semibold text-black">Популярное: </span>
          <span class="font-semibold text-primary">Example, Example, Example</span>
        </div>
      </div>

      <div class="slidedown-icon absolute bottom-8">
        <i class="pi pi-arrow-circle-down text-4xl text-black" />
      </div>
    </section>
    <section class="flex w-full flex-col py-[70px]">
      <div class="mx-5 flex flex-col xs:mx-10 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]">
        <h1 class="mb-10 text-6xl font-bold text-black">Что такое Find Your Plant?</h1>

        <div class="flex flex-wrap gap-y-8 xs:flex-nowrap xs:gap-x-8">
          <div class="flex flex-col gap-y-3">
            <img class="mb-3 h-10 w-10 md:h-16 md:w-16" src="/img/tree_1.png" alt="img_1" />
            <h2 class="text-xl font-semibold text-black">Разнообразие выбора</h2>
            <p class="font-semibold text-black">
              Благодаря базе данных с большим количеством питомников, сайт предлагает широкий выбор растений для сада.
              Вы сможете найти как популярные растения, так и редкие экземпляры
            </p>
          </div>
          <div class="flex flex-col gap-y-3">
            <img class="mb-3 h-10 w-10 md:h-16 md:w-16" src="/img/tree_2.png" alt="img_2" />
            <h2 class="text-xl font-semibold text-black">Сравнение цен</h2>
            <p class="font-semibold text-black">
              Если вам важно найти растение по наилучшей цене, сайт позволяет сравнить цены разных питомников на одно
              и то же растение. Это поможет сделать более осознанный и выгодный выбор
            </p>
          </div>
          <div class="flex flex-col gap-y-3">
            <img class="mb-3 h-10 w-10 md:h-16 md:w-16" src="/img/tree_3.png" alt="img_3" />
            <h2 class="text-xl font-semibold text-black">Экономия времени</h2>
            <p class="font-semibold text-black">
              Сайт Find Your Plant позволяет сэкономить время, которое обычно тратится на поездки по питомникам.
              Вы можете найти нужное растение прямо сидя дома или в офисе, без лишних усилий
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col py-[40px] xs:mx-10 md:mx-[100px] md:flex-row lg:mx-[140px] 2lg:mx-[280px]"
    >
      <img
        class="mb-6 h-[260px] object-cover md:mb-0 md:mr-6 md:h-[400px] lg:h-[500px] 2lg:h-[600px]"
        src="/img/img_1.png"
        alt="img_1"
      />
      <div class="flex flex-col gap-y-4 px-5 xs:px-0">
        <div class="w-fit rounded-full bg-gray px-4 py-2">
          <span class="text-sm font-semibold uppercase text-black"> products </span>
        </div>
        <h1 class="text-4xl font-bold text-black">Для садовников и ландшафтных фирм</h1>
        <p class="font-semibold text-black">
          Доступ к широкому выбору растений для проектов различной сложности. Участие на сайте также
          дает компаниям дополнительную рекламу и повышает их узнаваемость перед целевой аудиторией.
          Для самостоятельных садоводов наша платформа также облегчает выбор растений. С большим
          разнообразием доступных вариантов, вы легко найдете идеальные растения для вашего сада.
          Присоединяйтесь к Find Your Plant и превратите свой сад в настоящий рай!
        </p>
        <Button class="w-fit" label="Присоединиться" outlined />
        <div class="flex h-full gap-x-8 md:hidden lg:flex">
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col py-[40px] xs:mx-10 md:mx-[100px] md:flex-row-reverse lg:mx-[140px] 2lg:mx-[280px]"
    >
      <img
        class="mb-6 h-[260px] object-cover md:mb-0 md:ml-6 md:h-[400px] lg:h-[500px] 2lg:h-[600px]"
        src="/img/img_2.png"
        alt="img_2"
      />
      <div class="flex flex-col gap-y-4 px-5 xs:px-0">
        <div class="w-fit rounded-full bg-gray px-4 py-2">
          <span class="text-sm font-semibold uppercase text-black"> products </span>
        </div>
        <h1 class="text-4xl font-bold text-black">Для питомников</h1>
        <p class="font-semibold text-black">
          Сайт предоставляет питомникам ряд преимуществ, включая увеличение охвата аудитории,
          продвижение редких растений, возможность сравнения цен, а также дополнительную рекламу и
          повышение узнаваемости. Все это способствует увеличению клиентской базы и объема продаж.
          Присоединяйтесь к Find Your Plant прямо сейчас!
        </p>
        <Button class="h-10 w-fit" label="Присоединиться" outlined />
        <div class="flex h-full gap-x-8 md:hidden lg:flex">
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
          <div
            class="h-[100px] w-[100px] self-end bg-black sm:h-[174px] sm:w-[174px] md:h-[100px] md:w-[100px] lg:h-[174px] lg:w-[174px] 2lg:h-[200px] 2lg:w-[200px]"
          ></div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Find your plant',
});
</script>

<style scoped>
.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, bottom;
  background-image: url('../public/img/header.png');
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
