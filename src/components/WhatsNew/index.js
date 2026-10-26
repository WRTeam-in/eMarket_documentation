import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const RELEASE = { version: "4.0.2", date: "22 Oct 2026" };

const ITEMS = [
  { emoji: "📍", title: "Live Delivery Tracking", text: "Customers watch the delivery boy move on the map in real time, along the road route." },
  { emoji: "🗺️", title: "OpenStreetMap Support", text: "Choose free OpenStreetMap or Google Maps for the apps from the Admin Panel." },
  { emoji: "🧾", title: "One-Screen Cart & Checkout", text: "Cart and checkout combined into a single screen in the Customer App and Website." },
  { emoji: "🎙️", title: "Multi-Product Voice Search", text: "Say several products in one sentence and search for all of them at once." },
  { emoji: "🔎", title: "Search from Home", text: "Search products right from the home screen, without opening a new page." },
  { emoji: "🔁", title: "Out-of-Stock Replacements", text: "Swap out-of-stock cart items for similar products." },
  { emoji: "🛒", title: "Abandoned Carts", text: "Sellers follow up on abandoned carts from the Seller Panel and Partner App." },
  { emoji: "🏙️", title: "Multi-City Delivery Boys", text: "Delivery boys can serve more than one city." },
  { emoji: "✨", title: "Liquid Glass on iOS 26", text: "The Customer App takes on Apple's Liquid Glass look on iOS 26 and later." },
  { emoji: "🌙", title: "Redesigned Panels", text: "Modern Admin, Seller and Delivery Boy panels with dark mode and full RTL support." },
  { emoji: "🚀", title: "Laravel 12 & Next.js 16", text: "Backend and Website upgraded for performance, security and long-term support." },
];

const EARLIER = [
  "⚡ Quick Delivery (15 & 30 min)",
  "🍔 Food Delivery Module",
  "📱 Flutter 3.47.2",
  "🎨 Module-Wise Theme Colors",
  "🛠️ Seller-Level Attributes",
  "🖼️ WebP Images",
  "🥗 Veg / Non-Veg Fields",
  "🌐 Social Media Links",
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
