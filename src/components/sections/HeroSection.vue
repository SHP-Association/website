<template>
  <section class="relative py-16 lg:py-24 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.12)_0%,rgba(248,249,250,0)_50%)] dark:bg-none dark:bg-zinc-950 overflow-hidden">
    <div class="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
      <div class="flex flex-col items-start animate-fade-in-up">
        <!-- Tag Badge -->
        <div class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-brand-hover shadow-[0_0_8px_#FACC15] animate-pulse-glow"></span>
          <span>Software Development Company • Build • Automate • Grow</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkText dark:text-white leading-tight tracking-tight mb-6">
          Engineering High-Impact Systems That Scale With Your Business
        </h1>

        <!-- Subtitle -->
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-xl">
          We design, build, and deploy resilient cloud architecture, custom enterprise web applications, microservices, and practical AI solutions for forward-thinking companies.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-wrap gap-4 mb-12 w-full sm:w-auto">
          <BaseButton to="/contact" variant="primary" size="lg" class="group shadow-yellow-glow">
            Start a Conversation
            <template #iconRight>
              <svg class="group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </template>
          </BaseButton>

          <BaseButton to="/portfolio" variant="outline" size="lg" class="hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200">
            Explore Our Work
          </BaseButton>
        </div>

        <!-- Metric Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 border-t border-gray-200 dark:border-zinc-800">
          <div v-for="stat in companyData.metrics" :key="stat.label" class="flex flex-col group">
            <span class="text-2xl font-extrabold text-darkText dark:text-white leading-none group-hover:text-brand-hover dark:group-hover:text-brand-yellow transition-colors">{{ stat.value }}</span>
            <span class="text-xs text-gray-500 dark:text-zinc-400 font-medium mt-1">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Interactive Tabbed Code Visual Card with Gentle Float Animation -->
      <div class="relative animate-float-slow">
        <div class="bg-surface-dark rounded-2xl border border-gray-800 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-yellow-glow/20">
          <!-- Card Header & Code Tabs -->
          <div class="flex items-center justify-between px-4 py-3 bg-zinc-800 border-b border-zinc-700">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <!-- Code Tab Selectors -->
            <div class="flex gap-1 bg-zinc-900 p-1 rounded-lg">
              <button
                v-for="tab in codeTabs"
                :key="tab.id"
                type="button"
                :class="['px-2.5 py-1 text-xs font-mono rounded transition-all duration-200', activeTab === tab.id ? 'bg-brand-yellow text-darkText font-bold shadow-sm' : 'text-zinc-400 hover:text-zinc-200']"
                @click="activeTab = tab.id"
              >
                {{ tab.filename }}
              </button>
            </div>
          </div>

          <!-- Code Snippet Display with Fade Transition -->
          <div class="p-6 overflow-x-auto min-h-[220px]">
            <Transition name="fade" mode="out-in">
              <pre v-if="activeTab === 'ts'" key="ts" class="font-mono text-xs text-zinc-200 leading-relaxed"><code><span class="text-brand-yellow font-semibold">import</span> { EnterpriseSystem } <span class="text-brand-yellow font-semibold">from</span> <span class="text-emerald-400">'@shp/core'</span>;

<span class="text-zinc-500 italic">// High-availability microservice setup</span>
<span class="text-brand-yellow font-semibold">export async function</span> <span class="text-blue-400">deployProductionSystem</span>() {
  <span class="text-brand-yellow font-semibold">const</span> system = <span class="text-brand-yellow font-semibold">new</span> EnterpriseSystem({
    uptimeTarget: <span class="text-emerald-400">'99.999%'</span>,
    autoScaling: <span class="text-brand-yellow font-semibold">true</span>,
    architecture: <span class="text-emerald-400">'Event-Driven Microservices'</span>
  });

  <span class="text-brand-yellow font-semibold">await</span> system.<span class="text-blue-400">optimizeLatency</span>({ target: <span class="text-emerald-400">'&lt;85ms'</span> });
  <span class="text-brand-yellow font-semibold">return</span> system.<span class="text-blue-400">launch</span>();
}</code></pre>

              <pre v-else-if="activeTab === 'k8s'" key="k8s" class="font-mono text-xs text-zinc-200 leading-relaxed"><code><span class="text-brand-yellow font-semibold">apiVersion</span>: apps/v1
<span class="text-brand-yellow font-semibold">kind</span>: Deployment
<span class="text-brand-yellow font-semibold">metadata</span>:
  <span class="text-brand-yellow font-semibold">name</span>: <span class="text-emerald-400">shp-api-cluster</span>
<span class="text-brand-yellow font-semibold">spec</span>:
  <span class="text-brand-yellow font-semibold">replicas</span>: <span class="text-blue-400">12</span>
  <span class="text-brand-yellow font-semibold">strategy</span>:
    <span class="text-brand-yellow font-semibold">type</span>: <span class="text-emerald-400">RollingUpdate</span>
    <span class="text-brand-yellow font-semibold">rollingUpdate</span>:
      <span class="text-brand-yellow font-semibold">maxSurge</span>: <span class="text-blue-400">25%</span>
      <span class="text-brand-yellow font-semibold">maxUnavailable</span>: <span class="text-blue-400">0</span></code></pre>

              <pre v-else key="ai" class="font-mono text-xs text-zinc-200 leading-relaxed"><code><span class="text-brand-yellow font-semibold">from</span> shp.ai <span class="text-brand-yellow font-semibold">import</span> RAGEngine, VectorStore

<span class="text-zinc-500 italic"># Initialize HIPAA-compliant vector retrieval</span>
vector_db = VectorStore.<span class="text-blue-400">connect</span>(index=<span class="text-emerald-400">"clinical-docs"</span>)
rag = RAGEngine(store=vector_db, model=<span class="text-emerald-400">"gemini-pro"</span>)

<span class="text-brand-yellow font-semibold">async def</span> <span class="text-blue-400">query_knowledge</span>(query_text):
    results = <span class="text-brand-yellow font-semibold">await</span> rag.<span class="text-blue-400">search_semantic</span>(query_text, top_k=<span class="text-blue-400">5</span>)
    <span class="text-brand-yellow font-semibold">return</span> rag.<span class="text-blue-400">synthesize_response</span>(results)</code></pre>
            </Transition>
          </div>

          <div class="px-4 py-3 bg-zinc-800 border-t border-zinc-700 flex justify-between items-center text-xs text-zinc-400">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational (99.999% SLA)</span>
            </div>
            <span class="font-mono text-[10px]">Zero Downtime CI/CD</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { companyData } from '@/data/company';

type TabType = 'ts' | 'k8s' | 'ai';
const activeTab = ref<TabType>('ts');

const codeTabs: Array<{ id: TabType; filename: string }> = [
  { id: 'ts', filename: 'architecture.ts' },
  { id: 'k8s', filename: 'k8s-cluster.yaml' },
  { id: 'ai', filename: 'rag-engine.py' }
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
