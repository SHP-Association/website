<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <BaseInput
        id="name"
        v-model="form.name"
        label="Full Name"
        placeholder="Jane Doe"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="email"
        v-model="form.email"
        label="Work Email"
        type="email"
        placeholder="jane@company.com"
        required
        :error="errors.email"
        @blur="validateEmail('email', form.email)"
      />
    </div>

    <div class="form-row">
      <BaseInput
        id="company"
        v-model="form.company"
        label="Company Name"
        placeholder="Acme Corp"
        required
        :error="errors.company"
        @blur="validateRequired('company', form.company)"
      />
      <BaseSelect
        id="subject"
        v-model="form.subject"
        label="Project Type / Inquiry"
        placeholder="Select inquiry category"
        required
        :options="subjectOptions"
        :error="errors.subject"
      />
    </div>

    <BaseTextarea
      id="message"
      v-model="form.message"
      label="Project Details & Requirements"
      placeholder="Tell us about your project goals, technical requirements, timeline, and budget..."
      :rows="5"
      required
      :error="errors.message"
      @blur="validateMinLength('message', form.message, 15)"
    />

    <div class="form-actions">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        full-width
      >
        Send Inquiry
        <template #iconRight>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </template>
      </BaseButton>
    </div>

    <!-- Feedback Toast -->
    <BaseToast
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      :type="toast.type"
      @close="toast.show = false"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseTextarea from '@/components/common/BaseTextarea.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseToast from '@/components/common/BaseToast.vue';
import { useFormValidation } from '@/composables/useFormValidation';
import { useAnalytics } from '@/composables/useAnalytics';

const { errors, validateRequired, validateEmail, validateMinLength, clearErrors } = useFormValidation();
const { trackEvent } = useAnalytics();

const loading = ref(false);
const toast = reactive({
  show: false,
  title: '',
  message: '',
  type: 'success' as 'success' | 'error'
});

const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
});

const subjectOptions = [
  { label: 'Enterprise Software Development', value: 'software' },
  { label: 'Cloud Architecture & DevOps', value: 'cloud' },
  { label: 'AI & Machine Learning Integration', value: 'ai' },
  { label: 'Distributed Systems & Microservices', value: 'distributed' },
  { label: 'Security & Compliance Audit', value: 'security' },
  { label: 'Other Business Inquiry', value: 'other' }
];

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validCompany = validateRequired('company', form.company);
  const validSubject = validateRequired('subject', form.subject, 'Please select a subject');
  const validMsg = validateMinLength('message', form.message, 15);

  if (!validName || !validEmail || !validCompany || !validSubject || !validMsg) {
    return;
  }

  loading.value = true;
  trackEvent('Contact Form Started', { subject: form.subject });

  try {
    // Simulate async API network call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    trackEvent('Contact Form Submitted', { subject: form.subject });
    toast.title = 'Inquiry Sent Successfully!';
    toast.message = 'Thank you for reaching out. Our engineering director will respond within 24 hours.';
    toast.type = 'success';
    toast.show = true;

    // Reset Form
    form.name = '';
    form.email = '';
    form.company = '';
    form.subject = '';
    form.message = '';
  } catch (e) {
    toast.title = 'Submission Failed';
    toast.message = 'An error occurred while submitting your message. Please try again or email us directly.';
    toast.type = 'error';
    toast.show = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-form {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-actions {
  margin-top: var(--space-6);
}
</style>
