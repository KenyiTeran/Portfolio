<script setup lang="ts">
import cv from '~/assets/img/svg/cv.svg'
import linkedin from '~/assets/img/svg/socialMedia/linkedin.svg'
import github from '~/assets/img/svg/socialMedia/github.svg'
import Spotlight from '~/components/svg/Spotlight.vue'

const heroText = [
  { text: 'Software.', color: 'text-black' },
  { text: 'People.', color: 'text-[#44AFCF]' },
  { text: 'Me.', color: 'text-[#D04977]' },
]
</script>

<template>
  <div class="flex min-h-screen relative overflow-hidden">
    
    <div
      class="absolute top-23 left-1/2 -translate-x-1/2 w-full flex justify-center z-20 pointer-events-none ml-[20px]"
    >
      <Spotlight />
    </div>

    <div class="w-1/2 bg-white flex flex-col justify-center items-center relative z-10">
      <div class="flex flex-col gap-6">
        <h1 class="flex flex-col text-[96px] font-bold leading-none">
          <span
            v-for="(item, index) in heroText"
            :key="index"
            :class="item.color"
          >
            {{ item.text }}
          </span>
        </h1>

        <p class="text-xl">
          <span class="font-bold">¡Hola!</span> Gracias por visitar mi
          portafolio 😊
        </p>

        <div class="flex items-center gap-x-4">
          <a
            href="/cv.pdf"
            target="_blank"
            class="flex items-center justify-center gap-x-2 bg-[#242424] text-white py-3 px-8 rounded-full hover:bg-black transition-colors w-52"
          >
            <img :src="cv" alt="" class="w-5 h-5" />
            <span>CV</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            class="hover:scale-110 transition-transform"
          >
            <img :src="linkedin" alt="LinkedIn" class="w-9 h-9" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            class="hover:scale-110 transition-transform"
          >
            <img :src="github" alt="GitHub" class="w-9 h-9" />
          </a>
        </div>
      </div>
    </div>

    <div class="w-1/2 bg-[#29272A] flex items-end justify-center pb-20 relative z-10">
      <svg-KenyoAvatar />
    </div>
  </div>
</template>
