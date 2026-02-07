<template>
  <header class="absolute top-0 left-0 w-full pt-10 z-50">
    <div
      class="bg-[#D04977] flex justify-between items-center max-w-3xl mx-auto px-10 text-white py-3 rounded-full shadow-xl relative"
    >
      <NuxtLink to="/">Inicio</NuxtLink>
      <NuxtLink to="/">Experiencia</NuxtLink>
      <NuxtLink to="/">
        <img :src="logo" alt="Logo" class="w-8 h-8" />
      </NuxtLink>
      <NuxtLink to="/">Proyecto</NuxtLink>
      <NuxtLink to="/">Contacto</NuxtLink>

      <!-- <div
        class="absolute top-13 left-1/2 -translate-x-1/2 ml-[20px] -z-10"
      >
        <svg-Spotlight />
      </div> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/img/svg/logo/k.svg'
</script>
