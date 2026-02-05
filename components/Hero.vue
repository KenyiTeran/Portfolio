<script setup lang="ts">
import cv from '~/assets/img/svg/cv.svg'
import linkedin from '~/assets/img/svg/socialMedia/linkedin.svg'
import github from '~/assets/img/svg/socialMedia/github.svg'

const heroText = [
  { text: 'Software.', color: 'text-black' },
  { text: 'People.', color: 'text-[#44AFCF]' },
  { text: 'Me.', color: 'text-[#D04977]' },
]
</script>

<template>
  <div class="flex h-screen">
    <!-- Left Section -->
    <div class="w-1/2 bg-white flex flex-col justify-center items-center">
      <div class="flex flex-col gap-6">
        <!-- Main Title -->
        <h1 class="flex flex-col text-[96px] font-bold leading-none">
          <span
            v-for="(item, index) in heroText"
            :key="index"
            :class="item.color"
          >
            {{ item.text }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl">
          <span class="font-bold">¡Hola!</span> Gracias por visitar mi
          portafolio 😊
        </p>

        <!-- Buttons / Actions -->
        <div class="flex items-center gap-x-4">
          <!-- CV Button -->
          <a
            href="/cv.pdf"
            target="_blank"
            class="flex items-center justify-center gap-x-2 bg-[#242424] text-white py-3 px-8 rounded-full hover:bg-black transition-colors w-52"
          >
            <img :src="cv" alt="" class="w-5 h-5" />
            <span>CV</span>
          </a>

          <!-- Social Links -->
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

    <!-- Right Section (Image/Background) -->
    <div class="w-1/2 bg-[#29272A] flex items-end justify-center pb-20">
      <KenyoAvatar />
    </div>
  </div>
</template>
