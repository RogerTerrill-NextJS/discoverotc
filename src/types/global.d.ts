declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | undefined,
      config?: Record<string, unknown>,
    ) => void;
  }
}
export {};
