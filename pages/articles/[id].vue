<template>
  <div class="flex flex-col gap-y-10">
    <div class="h-[220px] w-full bg-primary sm:h-[300px] md:h-[420px] lg:h-[450px]"></div>

    <div class="mx-5 flex flex-col gap-y-4 sm:mx-10 md:mx-[100px] lg:mx-[140px] 2lg:mx-[280px]">
      <h2 class="text-[38px] font-semibold text-black sm:text-[70px]">Оформление зимнего сада</h2>
      <div class="w-fit rounded-full bg-gray px-4 py-3 text-xs font-semibold uppercase text-black">
        сезонные работы
      </div>
      <span class="font-semibold text-primary">29 ноября 200 чел. прочитали</span>
      <p class="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac
        turpis. At erat pellentesque adipiscing commodo elit. Placerat duis ultricies lacus sed
        turpis tincidunt. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.
        Scelerisque viverra mauris in aliquam sem. Lectus proin nibh nisl condimentum id venenatis.
        Diam quis enim lobortis scelerisque fermentum. Vel pharetra vel turpis nunc eget lorem.
        ullamcorper. Semper auctor neque vitae tempus quam pellentesque nec. Viverra aliquet eget
        sit amet tellus cras adipiscing enim. Eleifend donec pretium vulputate sapien nec sagittis
        aliquam. Ornare lectus sit amet est placerat in. In aliquam sem fringilla ut morbi
        tincidunt. Donec et odio pellentesque diam volutpat commodo sed. Nunc sed blandit libero
        volutpat sed cras ornare arcu. Et odio pellentesque diam volutpat commodo. Nunc pulvinar
        sapien et ligula ullamcorper malesuada proin libero nunc. Ultrices neque ornare aenean
        euismod elementum nisi quis eleifend quam.
      </p>
      <p class="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac
        turpis. At erat pellentesque adipiscing commodo elit. Placerat duis ultricies lacus sed
        turpis tincidunt. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.
        Scelerisque viverra mauris in aliquam sem. Lectus proin nibh nisl condimentum id venenatis.
        Diam quis enim lobortis scelerisque fermentum. Vel pharetra vel turpis nunc eget lorem.
        ullamcorper. Semper auctor neque vitae tempus quam pellentesque nec. Viverra aliquet eget
        sit amet tellus cras adipiscing enim. Eleifend donec pretium vulputate sapien nec sagittis
        aliquam. Ornare lectus sit amet est placerat in. In aliquam sem fringilla ut morbi
        tincidunt. Donec et odio pellentesque diam volutpat commodo sed. Nunc sed blandit libero
        volutpat sed cras ornare arcu. Et odio pellentesque diam volutpat commodo. Nunc pulvinar
        sapien et ligula ullamcorper malesuada proin libero nunc. Ultrices neque ornare aenean
        euismod elementum nisi quis eleifend quam.
      </p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-2">
          <div
            class="group flex cursor-pointer items-center justify-center rounded-full bg-gray p-[14px]"
          >
            <nuxt-icon name="thumbs-up" class="h-6 w-6 text-black group-hover:text-primary" />
          </div>
          <div
            class="group flex cursor-pointer items-center justify-center rounded-full bg-gray p-[14px]"
          >
            <nuxt-icon name="share" class="h-6 w-6 text-black group-hover:text-primary" />
          </div>
        </div>
        <Button outlined label="Вернутся" @click="$router.back()" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Просмотр статьи',
});
</script>

<style scoped></style>
