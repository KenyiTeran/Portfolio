<template>
  <header class="absolute top-0 left-0 w-full pt-10 z-50 px-5 lg:px-0">
    <div
      class="xs:bg-[#D04977] flex justify-between items-center max-w-3xl mx-auto px-5 xs:px-10 text-white py-3 rounded-full xs:shadow-xl relative"
    >
      <NuxtLink
        v-for="(item, index) in menu"
        :key="index"
        :to="item.to"
        class="items-center"
        :class="getLinkClasses(index)"
      >
        <img
          v-if="item.isLogo"
          :src="item.title"
          alt="Logo"
          class="w-auto"
          :class="item.customClass || 'h-8'"
        />

        <span v-else class="hidden xs:block">{{ item.title }}</span>

        <div v-if="index === 5" class="ml-2 xs:hidden">
          <MenuToggle />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/img/svg/logo/k.svg'
import k from '~/assets/img/svg/k.svg'

const menu = [
  { title: 'Inicio,', to: '/', isLogo: false },
  { title: 'Experiencia', to: '/experience', isLogo: false },
  { title: logo, to: '/', isLogo: true },
  { title: k, to: '/', isLogo: true, customClass: 'h-9' },
  { title: 'Proyectos', to: '/projects', isLogo: false },
  { title: 'Contacto', to: '/', isLogo: false },
]

const getLinkClasses = (index: number) => {
  if (index === 3) return 'flex xs:hidden'
  if (index === 5) return 'flex'
  return 'hidden xs:flex'
}
</script>
