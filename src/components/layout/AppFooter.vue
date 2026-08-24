<template>
  <footer class="relative bg-slate-950 text-white pt-16 pb-12 overflow-hidden border-t border-zinc-800">
    <!-- Top Gradient Brand Accent Line -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-sky-400 to-amber-500"></div>

    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 relative z-10">
      <!-- Company Info Column -->
      <div class="lg:col-span-2 flex flex-col items-start gap-4">
        <router-link to="/" aria-label="SHP Technology Home">
          <AppLogo variant="full" height="h-9" />
        </router-link>
        <p class="text-zinc-300 text-sm max-w-sm leading-relaxed">
          {{ companyData.description }}
        </p>

        <!-- SRE Badge -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200 mt-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"></span>
          <span>99.999% SLA • Production SRE Monitoring</span>
        </div>

        <!-- Quick Newsletter Box -->
        <div class="w-full max-w-sm mt-4">
          <label class="text-xs font-bold text-zinc-300 block mb-2 uppercase tracking-wider">Stay Updated with Engineering Insights</label>
          <form class="flex gap-2" @submit.prevent="handleSubscribe">
            <input
              type="email"
              v-model="subscriberEmail"
              placeholder="Enter your work email"
              required
              :disabled="isSubmitting"
              class="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-yellow disabled:opacity-50"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 rounded-xl bg-brand-yellow hover:bg-brand-hover text-darkText font-bold text-xs transition-colors shrink-0 disabled:opacity-50 flex items-center gap-1.5"
            >
              <span v-if="isSubmitting" class="w-3 h-3 border-2 border-darkText border-t-transparent rounded-full animate-spin"></span>
              <span>{{ isSubmitting ? 'Submitting...' : 'Subscribe' }}</span>
            </button>
          </form>
          <span v-if="subscribed" class="text-[11px] text-emerald-400 font-semibold block mt-1.5">✓ Saved to subscribers list! Thank you.</span>
          <span v-if="errorMessage" class="text-[11px] text-rose-400 font-semibold block mt-1.5">{{ errorMessage }}</span>
        </div>
      </div>

      <!-- Services Links -->
      <div class="flex flex-col gap-3">
        <h4 class="text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
          Services
        </h4>
        <router-link to="/services/custom-software" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Custom Enterprise Apps</router-link>
        <router-link to="/services/cloud-infrastructure" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Cloud & Kubernetes DevOps</router-link>
        <router-link to="/services/ai-solutions" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">AI RAG & Vector Engines</router-link>
        <router-link to="/services/microservices-architecture" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Microservices Architecture</router-link>
        <router-link to="/services/security-audit" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Security & Code Compliance</router-link>
      </div>

      <!-- Company Links -->
      <div class="flex flex-col gap-3">
        <h4 class="text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
          Company
        </h4>
        <router-link to="/about" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">About Us</router-link>
        <router-link to="/portfolio" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Case Studies</router-link>
        <router-link to="/careers" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Careers & Hiring</router-link>
        <router-link to="/demo" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Interactive Product Demo</router-link>
        <router-link to="/contact" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1">Contact Engineering</router-link>
      </div>

      <!-- Legal & Direct Connect Links -->
      <div class="flex flex-col gap-3">
        <h4 class="text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
          Connect
        </h4>
        <a :href="`mailto:${siteConfig.contact.email}`" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1 flex items-center gap-2">
          <span>📧</span>
          <span>{{ siteConfig.contact.email }}</span>
        </a>
        <a :href="`tel:${siteConfig.contact.phone}`" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1 flex items-center gap-2">
          <span>📞</span>
          <span>{{ siteConfig.contact.phone }}</span>
        </a>
        <a :href="siteConfig.socials.linkedin" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1 flex items-center gap-2">
          <span>🔗</span>
          <span>LinkedIn</span>
        </a>
        <a :href="siteConfig.socials.github" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-brand-yellow text-sm transition-all hover:translate-x-1 flex items-center gap-2">
          <span>💻</span>
          <span>GitHub</span>
        </a>
      </div>
    </div>

    <!-- Bottom Copyright Divider -->
    <div class="container pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
      <p>© {{ new Date().getFullYear() }} {{ companyData.legalName }}. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <span class="hover:text-zinc-200 cursor-pointer transition-colors">Privacy Policy</span>
        <span class="hover:text-zinc-200 cursor-pointer transition-colors">Terms of Service</span>
        <span class="hover:text-zinc-200 cursor-pointer transition-colors">Security Compliance (SOC 2)</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppLogo from '@/components/common/AppLogo.vue';
import { companyData } from '@/data/company';
import { siteConfig } from '@/config/site.config';

const subscriberEmail = ref('');
const isSubmitting = ref(false);
const subscribed = ref(false);
const errorMessage = ref('');

const handleSubscribe = async () => {
  if (!subscriberEmail.value) return;

  isSubmitting.value = true;
  subscribed.value = false;
  errorMessage.value = '';

  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      // Send subscriber data to Google Apps Script Web App / Webhook
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: subscriberEmail.value,
          source: 'Footer Newsletter Box',
          timestamp: new Date().toISOString()
        })
      });
    }

    subscribed.value = true;
    subscriberEmail.value = '';

    setTimeout(() => {
      subscribed.value = false;
    }, 5000);
  } catch (err) {
    console.error('Subscription error:', err);
    errorMessage.value = 'Subscription failed. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
