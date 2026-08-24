import { ref } from 'vue';

export function useFormValidation() {
  const errors = ref<Record<string, string>>({});

  const validateRequired = (field: string, value: string, customMsg?: string) => {
    if (!value || value.trim() === '') {
      errors.value[field] = customMsg || 'This field is required.';
      return false;
    }
    delete errors.value[field];
    return true;
  };

  const validateEmail = (field: string, value: string) => {
    if (!validateRequired(field, value)) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errors.value[field] = 'Please enter a valid email address.';
      return false;
    }
    delete errors.value[field];
    return true;
  };

  const validateMinLength = (field: string, value: string, min: number) => {
    if (!validateRequired(field, value)) return false;
    if (value.trim().length < min) {
      errors.value[field] = `Must be at least ${min} characters long.`;
      return false;
    }
    delete errors.value[field];
    return true;
  };

  const clearErrors = () => {
    errors.value = {};
  };

  return {
    errors,
    validateRequired,
    validateEmail,
    validateMinLength,
    clearErrors
  };
}
