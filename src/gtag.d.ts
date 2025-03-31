// Type definitions for Google Analytics gtag.js
interface Window {
  dataLayer: any[];
}

declare function gtag(...args: any[]): void;
