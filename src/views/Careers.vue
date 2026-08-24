<template>
  <div class="page-careers">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          Engineering Careers
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Join a Senior Software Engineering Pod Building High-Scale Systems
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          We offer remote flexibility, technical autonomy, and an environment focused on high-quality software craftsmanship.
        </p>
      </div>

      <!-- Perks & Benefits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="perk in perks" :key="perk.title" class="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <span class="text-2xl" aria-hidden="true">{{ perk.icon }}</span>
          <h3 class="font-bold text-darkText dark:text-white text-base">{{ perk.title }}</h3>
          <p class="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">{{ perk.desc }}</p>
        </div>
      </div>

      <div class="culture-cards">
        <div v-for="val in companyCultureValues" :key="val.title" class="val-card">
          <h3 class="val-title">{{ val.title }}</h3>
          <p class="val-desc">{{ val.description }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Hiring Process Section -->
    <SectionContainer
      tag="Hiring Workflow"
      title="Transparent 6-Step Hiring Process"
      subtitle="We respect your time. Our hiring process is practical and focuses on real-world engineering decisions."
      bg-alt
    >
      <div class="steps-grid">
        <div v-for="s in hiringProcessSteps" :key="s.step" class="hiring-step-card">
          <span class="step-num">{{ s.step }}</span>
          <h3 class="step-name">{{ s.title }}</h3>
          <p class="step-desc">{{ s.description }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Open Positions Section -->
    <SectionContainer
      tag="Openings"
      title="Current Open Positions"
      subtitle="Explore available roles. All engineering roles offer flexible remote work options and competitive packages."
    >
      <!-- Department Filter -->
      <div class="flex justify-center gap-2 mb-8" role="tablist" aria-label="Department filters">
        <button
          v-for="dept in departments"
          :key="dept"
          role="tab"
          :aria-selected="activeDept === dept"
          :class="['px-4 py-2 rounded-full text-xs font-semibold border transition-all', activeDept === dept ? 'bg-brand-yellow border-brand-yellow text-darkText shadow-sm font-bold' : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 hover:border-brand-yellow']"
          @click="activeDept = dept"
        >
          {{ dept }}
        </button>
      </div>

      <div class="jobs-grid">
        <BaseCard v-for="job in filteredJobs" :key="job.id" class="job-card">
          <div class="job-header">
            <BaseBadge variant="yellow">{{ job.department }}</BaseBadge>
            <span class="job-exp">{{ job.experienceLevel }}</span>
          </div>

          <h3 class="job-title">{{ job.title }}</h3>
          <p class="job-loc">📍 {{ job.location }} ({{ job.employmentType }})</p>
          <p class="job-desc">{{ job.shortDescription }}</p>

          <div class="job-actions">
            <BaseButton :to="`/careers/${job.slug}`" variant="primary" size="md">
              View Position & Apply
            </BaseButton>
          </div>
        </BaseCard>
      </div>

      <div class="spontaneous-apply-banner">
        <h3>Don't see the right role?</h3>
        <p>We are always looking for exceptional software engineers, architects, and designers.</p>
        <BaseButton to="/contact" variant="outline" class="mt-3">
          Send Us Your Profile
        </BaseButton>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { jobsData, hiringProcessSteps, companyCultureValues } from '@/data/jobs';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Careers & Open Senior Engineering Roles',
  description: 'Explore engineering job opportunities at SHP Technology. Learn about our culture, hiring process, remote perks, and competitive packages.'
});

const activeDept = ref('All');
const departments = ['All', 'Engineering', 'DevOps', 'Data & AI'];

const filteredJobs = computed(() => {
  if (activeDept.value === 'All') return jobsData;
  return jobsData.filter((j) => j.department === activeDept.value);
});

const perks = [
  { icon: '🌎', title: '100% Remote Flexibility', desc: 'Work from anywhere with home office setup stipends.' },
  { icon: '🏖️', title: 'Unlimited Paid Off', desc: 'Mandatory 3-week minimum annual vacation policy.' },
  { icon: '📚', title: '$3,000 Learning Budget', desc: 'Annual budget for tech conferences, books, and courses.' },
  { icon: '🏥', title: 'Comprehensive Care', desc: 'Full medical, dental, vision & health coverage.' }
];
</script>

<style scoped>
.culture-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .culture-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .culture-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

.val-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.val-title {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.val-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.hiring-step-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.step-num {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--brand-yellow-hover);
  display: block;
  margin-bottom: var(--space-2);
}

.step-name {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.step-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

@media (min-width: 768px) {
  .jobs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.job-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.job-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.job-exp {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  font-weight: 600;
}

.job-title {
  font-size: var(--fs-xl);
  margin-bottom: 2px;
}

.job-loc {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  margin-bottom: var(--space-3);
}

.job-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.job-actions {
  margin-top: auto;
}

.spontaneous-apply-banner {
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  text-align: center;
}

.spontaneous-apply-banner h3 {
  color: var(--text-inverse);
  font-size: var(--fs-2xl);
  margin-bottom: var(--space-2);
}

.spontaneous-apply-banner p {
  color: #A1A1AA;
}
</style>
