<template>
  <SectionContainer
    tag="Working Process"
    title="Structured Methodology Built for Predictable Success"
    subtitle="We eliminate ambiguity through a transparent 6-stage engineering process designed to deliver stable production software on time."
    bg-alt
  >
    <div class="methodology-grid">
      <div
        v-for="step in processSteps"
        :key="step.number"
        class="step-card"
      >
        <div class="step-header">
          <span class="step-number">{{ step.number }}</span>
          <div class="step-icon-bg">
            <component :is="step.icon" class="step-icon" />
          </div>
        </div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-desc">{{ step.description }}</p>
        <ul class="step-outcomes">
          <li v-for="outcome in step.outcomes" :key="outcome">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{{ outcome }}</span>
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {
  Search,
  FileText,
  Code,
  CheckCircle2,
  Rocket,
  TrendingUp
} from 'lucide-vue-next';

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    icon: Search,
    description: 'We perform deep technical discovery, audit existing systems, and clarify root business goals before writing code.',
    outcomes: ['Architecture Audit', 'Risk Assessment', 'Requirements Matrix']
  },
  {
    number: '02',
    title: 'Plan',
    icon: FileText,
    description: 'We establish clear system architecture, database schemas, technology choices, and milestones.',
    outcomes: ['Technical Specification', 'API Blueprint', 'Sprint Milestones']
  },
  {
    number: '03',
    title: 'Build',
    icon: Code,
    description: 'Our senior engineers develop clean, type-safe, modular software adhering to design system tokens and clean code principles.',
    outcomes: ['Vue 3 Frontend', 'Microservices APIs', 'CI/CD Automation']
  },
  {
    number: '04',
    title: 'Test',
    icon: CheckCircle2,
    description: 'Rigorous unit testing, integration tests, load tests, and security vulnerability scans ensure bulletproof stability.',
    outcomes: ['90%+ Test Coverage', 'Load Benchmark', 'Security Audit']
  },
  {
    number: '05',
    title: 'Deploy',
    icon: Rocket,
    description: 'We orchestrate zero-downtime production deployments to containerized cloud environments with automated rollback triggers.',
    outcomes: ['Kubernetes Rollout', 'Zero Downtime', 'DNS & SSL Config']
  },
  {
    number: '06',
    title: 'Improve',
    icon: TrendingUp,
    description: 'Continuous monitoring, APM metrics analysis, cost optimization, and iterative performance tuning.',
    outcomes: ['24/7 Monitoring', 'Latency Reduction', 'Feature Iterations']
  }
];
</script>

<style scoped>
.methodology-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .methodology-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .methodology-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: relative;
  transition: all var(--transition-normal);
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--brand-yellow);
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.step-number {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--brand-yellow-hover);
  letter-spacing: -0.05em;
}

.step-icon-bg {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: var(--bg-surface-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.step-icon {
  width: 20px;
  height: 20px;
}

.step-title {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.step-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.step-outcomes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px dashed var(--border-color);
}

.step-outcomes li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--text-primary);
}
</style>
