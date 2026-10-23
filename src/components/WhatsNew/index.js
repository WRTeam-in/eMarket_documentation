import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const RELEASE = { version: "4.0.2", date: "22 Oct 2026" };

const ITEMS = [
  { emoji: "📍", title: "Live Delivery Tracking", text: "Follow the delivery boy on the map in real time." },
  { emoji: "🏙️", title: "Multi-City Delivery Boys", text: "Serve many cities; manage per admin or seller." },
  { emoji: "🛒", title: "Abandoned Carts", text: "Sellers follow up on carts left at checkout." },
  { emoji: "🗺️", title: "OpenStreetMap", text: "Alternative map provider to Google Maps." },
  { emoji: "⏱️", title: "Arrival Countdown", text: "Live ETA countdown for Quick Delivery orders." },
  { emoji: "🎙️", title: "Multi-Product Voice Search", text: "Find several products at once by voice." },
  { emoji: "🔁", title: "Similar Product Swap", text: "Replace out-of-stock cart items in one tap." },
  { emoji: "💳", title: "One-Screen Checkout", text: "Cart and checkout merged on app and website." },
  { emoji: "🖥️", title: "Redesigned Panels", text: "Responsive UI with dark mode, RTL, and table views." },
  { emoji: "🍎", title: "Liquid Glass on iOS 26", text: "Native iOS 26 design in the Customer App." },
  { emoji: "🚀", title: "Laravel 12 & Next.js 16", text: "Faster, more secure stack with SSR for SEO." },
];

const EARLIER = [
  "⚡ Quick Delivery (15 & 30 min)",
  "🍔 Food Delivery Module",
  "🛠️ Seller-Level Attributes",
  "🎨 Module-Wise Theme Colors",
  "🖼️ WebP Images",
  "🌐 Social Media Links",
  "🥗 Veg / Non-Veg Fields",
  "📱 Flutter 3.47.2",
  "⚠️ Seller Migration Alerts",
];

export default function WhatsNew() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2 className={styles.heading}>✨ What's New</h2>
        <span className={styles.badge}>
          v{RELEASE.version} · {RELEASE.date}
        </span>
        <Link className={styles.link} to="/docs/changelog/version-history">
          Full changelog →
        </Link>
      </header>

      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.emoji} aria-hidden="true">
              {item.emoji}
            </span>
            <span>
              <strong className={styles.title}>{item.title}</strong>
              <span className={styles.text}>{item.text}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.earlier}>
        <span className={styles.earlierLabel}>Earlier highlights</span>
        {EARLIER.map((label) => (
          <span key={label} className={styles.chip}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
