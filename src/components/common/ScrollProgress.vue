<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-transparent z-[1000] pointer-events-none">
    <div
      class="h-full bg-gradient-to-r from-sky-500 via-brand-yellow to-amber-500 transition-all duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (scrollHeight > 0) {
    progress.value = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
  } else {
    progress.value = 0;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
