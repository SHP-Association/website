import { siteConfig } from '@/config/site.config';

export function useAnalytics() {
  const analyticsId = siteConfig.site.analyticsId;

  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] (${analyticsId}) -> ${eventName}`, params);
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, params);
      }
    }
  };

  return {
    trackEvent
  };
}
