<template>
  <div class="app-wrapper bg-surface-main dark:bg-zinc-950 min-h-screen text-darkText dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <ScrollProgress />
    <AppHeader />
    <main class="app-main flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import ScrollProgress from '@/components/common/ScrollProgress.vue';
import BackToTop from '@/components/common/BackToTop.vue';
</script>

<style>
/* Page Transition Effects */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity var(--transition-fast);
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
