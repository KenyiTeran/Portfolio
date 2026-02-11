<template>
  <header class="absolute top-0 left-0 w-full pt-10 z-50 px-5 lg:px-0">
    <div
      class="bg-[#D04977] flex justify-between items-center max-w-3xl mx-auto px-10 text-white py-3 rounded-full shadow-xl relative"
    >
      <NuxtLink
        v-for="(item, index) in menu"
        :key="index"
        :to="item.to"
        class="flex items-center"
      >
        <img
          v-if="item.isLogo"
          :src="item.title"
          alt="Logo"
          class="h-8 w-auto"
        />
        <span v-else>{{ item.title }}</span>
        <div v-if="index === 4" class="ml-2">
          <MenuToggle />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/img/svg/logo/k.svg'

const menu = [
  { title: 'Inicio,', to: '/', isLogo: false },
  { title: 'Experiencia', to: '/experience', isLogo: false },
  { title: logo, to: '/', isLogo: true },
  { title: 'Proyectos', to: '/projects', isLogo: false },
  { title: 'Contacto', to: '/', isLogo: false },
]
</script>
