<template>
  <div class="page-demo">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-10 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          Interactive Architecture Simulator
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Simulate Enterprise API Load & Distributed Performance
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          Test our high-concurrency microservices, auto-scaling Kubernetes cluster, and Redis cache layer throughput under simulated traffic spikes.
        </p>
      </div>

      <div class="demo-card bg-surface-dark text-white p-8 rounded-3xl border border-gray-800 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Controls Column -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-white mb-4">Traffic Simulator Controls</h2>

            <div>
              <label for="rps-slider" class="text-sm font-semibold text-zinc-300 block mb-2">Simulated RPS (Requests/Sec): {{ rps }}</label>
              <input
                id="rps-slider"
                type="range"
                min="500"
                max="25000"
                step="500"
                v-model.number="rps"
                class="w-full accent-brand-yellow cursor-pointer"
              />
            </div>

            <div>
              <label for="cache-slider" class="text-sm font-semibold text-zinc-300 block mb-2">Redis Cache Hit Ratio: {{ cacheHitRatio }}%</label>
              <input
                id="cache-slider"
                type="range"
                min="0"
                max="99"
                v-model.number="cacheHitRatio"
                class="w-full accent-brand-yellow cursor-pointer"
              />
            </div>

            <div>
              <label for="pods-slider" class="text-sm font-semibold text-zinc-300 block mb-2">Active EKS Pod Replicas: {{ pods }}</label>
              <input
                id="pods-slider"
                type="range"
                min="2"
                max="32"
                v-model.number="pods"
                class="w-full accent-brand-yellow cursor-pointer"
              />
            </div>

            <div class="pt-4 border-t border-zinc-800">
              <BaseButton variant="primary" full-width @click="runSimulation" :loading="isSimulating">
                Run Load Benchmark Simulation
              </BaseButton>
            </div>
          </div>

          <!-- Real-Time Metric Display -->
          <div class="lg:col-span-2 space-y-6">
            <h2 class="text-xl font-bold text-white mb-4">Calculated System Metrics</h2>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span class="text-xs text-zinc-400 block">Avg Latency</span>
                <span class="text-2xl font-extrabold text-brand-yellow">{{ calculatedLatency }}ms</span>
              </div>
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span class="text-xs text-zinc-400 block">System Health</span>
                <span class="text-2xl font-extrabold text-emerald-400">{{ systemHealth }}</span>
              </div>
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span class="text-xs text-zinc-400 block">DB Load</span>
                <span class="text-2xl font-extrabold text-sky-400">{{ dbLoad }}%</span>
              </div>
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span class="text-xs text-zinc-400 block">Estimated SLA</span>
                <span class="text-2xl font-extrabold text-purple-400">99.999%</span>
              </div>
            </div>

            <!-- Visualization Bar -->
            <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
              <h3 class="text-sm font-bold text-zinc-300">Throughput Capacity Allocation</h3>
              <div class="w-full h-4 rounded-full bg-zinc-800 overflow-hidden flex">
                <div class="bg-brand-yellow h-full transition-all duration-300" :style="{ width: `${Math.min(100, (rps / 25000) * 100)}%` }"></div>
              </div>
              <p class="text-xs text-zinc-400">
                Current load consumes <strong>{{ Math.round((rps / 25000) * 100) }}%</strong> of maximum benchmarked pod cluster capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Interactive System Load Simulator',
  description: 'Simulate high-concurrency microservices, auto-scaling Kubernetes cluster performance, and Redis latency benchmarks in real-time.'
});

const rps = ref(5000);
const cacheHitRatio = ref(85);
const pods = ref(8);
const isSimulating = ref(false);

const calculatedLatency = computed(() => {
  const baseLatency = 45;
  const loadFactor = (rps.value / pods.value) / 500;
  const cacheDiscount = (cacheHitRatio.value / 100) * 20;
  return Math.max(12, Math.round(baseLatency + loadFactor - cacheDiscount));
});

const dbLoad = computed(() => {
  const uncachedRps = rps.value * (1 - cacheHitRatio.value / 100);
  return Math.min(100, Math.round((uncachedRps / 3000) * 100));
});

const systemHealth = computed(() => {
  if (dbLoad.value > 90) return 'Degraded';
  if (dbLoad.value > 75) return 'Warning';
  return 'Optimal';
});

const runSimulation = () => {
  isSimulating.value = true;
  setTimeout(() => {
    isSimulating.value = false;
  }, 1200);
};
</script>
