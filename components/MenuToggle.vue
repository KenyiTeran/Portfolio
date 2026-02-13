<template>
  <div class="menu" :class="{ active: isActive }" @click="toggleMenu">
    <span class="bar top"></span>
    <span class="bar mid"></span>
    <span class="bar bot"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

const toggleMenu = () => {
  isActive.  value = !isActive.value
}
</script>

<style scoped>
.menu {
  width: 45px;
  height: 45px;  
  border: 2px solid white; 
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px; 
  cursor: pointer;
  transition: all 0.3s ease;
}

.bar {
  height: 3px;
  width: 25px;
  background-color: white;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;  
  transform-origin: center;
}

.menu.active .top {  
  transform: translateY(9px) rotate(45deg);
}
.menu.active .mid {
  transform: scaleX(0);
  opacity: 0;
}
.menu.active .bot {
  transform: translateY(-9px) rotate(-45deg);
}
</style>