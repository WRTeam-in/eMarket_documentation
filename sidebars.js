// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for all documentation
  docsSidebar: [
    // Admin Panel Documentation
    {
      type: "category",
      label: "Admin Panel",
      items: [
        "admin-panel/intro",
        "admin-panel/server-requirements",
        "admin-panel/create-subdomain",
        "admin-panel/php-ini-settings",
        "admin-panel/localhost-setup",
        "admin-panel/server-setup",
        "admin-panel/configure-egroccer",
        "admin-panel/modules",
        "admin-panel/store-settings",
        "admin-panel/theme-settings",
        "admin-panel/selfpickup-setting",
        "admin-panel/email-settings",
        "admin-panel/login-settings",
        "admin-panel/firebase-settings",
        "admin-panel/twilio-settings",
        "admin-panel/payment-gateway",
        "admin-panel/cart-reminder",
        "admin-panel/app-settings",
        "admin-panel/map-api-key-settings",
        "admin-panel/subscription",
        "admin-panel/support",
        "admin-panel/feedback",
        "admin-panel/contact",
      ],
    },
    // Website Documentation
    {
      type: "category",
      label: "Website",
      items: [
        "website/intro",
        "website/installation",
        "website/setup-nodejs",
        "website/setup-env-variables",
        "website/change-theme-color",
        "website/firebase-setup",
        "website/run-website",
        "website/deploy-website-without-seo",
        "website/seo-for-web",
        "website/deploy-website-with-seo",
        "website/htaccess-configuration",
        "website/support",
      ],
    },

    // Flutter App Documentation
    {
      type: "category",
      label: "Flutter App",
      items: [
        "flutter-app/intro",
        "flutter-app/installation",
        "flutter-app/app-configuration",
        "flutter-app/server-api-config",
        "flutter-app/firebase-integration",
        "flutter-app/map-location-services",
        "flutter-app/additional-config",
        "flutter-app/in-app-purchase",
        "flutter-app/app-distribution",
        "flutter-app/support",
      ],
    },

    // Flutter Partner App Documentation
    {
      type: "category",
      label: "Flutter Partner App",
      items: [
        "flutter-partner-app/intro",
        "flutter-partner-app/installation",
        "flutter-partner-app/configuration",
        "flutter-partner-app/map-location-services",
        "flutter-partner-app/firebase-integration",
        "flutter-partner-app/app-distribution",
        "flutter-partner-app/server-api-config",
        "flutter-partner-app/support",
        "flutter-partner-app/additional-config",
        "flutter-partner-app/gemini-config"
      ],
    },

    // Features Documentation
    {
      type: "category",
      label: "Features",
      items: ["features/intro"],
    },

    // Changelog Documentation
    {
      type: "category",
      label: "Changelog",
      items: ["changelog/intro", "changelog/version-history"],
    },

    // FAQ Documentation
    {
      type: "category",
      label: "FAQ",
      items: ["faq/intro"],
    },
  ],
};

export default sidebars;
