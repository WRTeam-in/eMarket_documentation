import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { TOPIC_COUNT } from "@site/src/components/TopicGrid";
import DocBanner from "../../docs/promotion-banner/DocBanner";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

const ROTATING_WORDS = ["Grocery", "Pharmacy", "Food Delivery", "eCommerce", "POS"];

const STATS = [
  { value: 5, label: "Business modules" },
  { value: 4, label: "Platforms" },
  { value: TOPIC_COUNT, label: "Documented features" },
  { text: "v4.0.2", label: "Latest release" },
];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={styles.rotator} aria-live="polite">
      <span key={index} className={styles.rotatorWord}>
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

// Counts from 0 to `value` once the element scrolls into view
function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setShown(value);
      return undefined;
    }
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1100);
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

function openSearch() {
  const input = document.querySelector(".navbar__search-input");
  if (input) {
    input.focus();
    input.click();
  }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isMac, setIsMac] = useState(true);
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)} onMouseMove={onMouseMove}>
      <div className={styles.blobs} aria-hidden="true">
        <span className={styles.blobA} />
        <span className={styles.blobB} />
        <span className={styles.blobC} />
      </div>
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <Link to="/docs/changelog/version-history" className={styles.releasePill}>
          <span className={styles.pulse} aria-hidden="true" />
          New in v4.0.2: live delivery tracking, voice search &amp; more
          <span className={styles.pillArrow} aria-hidden="true">→</span>
        </Link>
        <Heading as="h1" className={clsx("hero__title", styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          One multi-vendor platform for <RotatingWord />
          <br className={styles.desktopBreak} /> with Flutter apps, a website, and a powerful admin panel.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx("button button--secondary button--md", styles.primaryButton)} to="/docs/admin-panel/intro">
            Read the Docs <span className={styles.btnArrow}>→</span>
          </Link>
          <Link className={clsx("button button--md", styles.ghostButton)} to="/docs/features">
            What's New in 4.0.2
          </Link>
          <button type="button" className={styles.searchHint} onClick={openSearch}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            Search the docs
            <kbd className={styles.kbd}>{isMac ? "⌘" : "Ctrl"} K</kbd>
          </button>
        </div>

        <dl className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>{s.text ?? <CountUp value={s.value} suffix={s.suffix} />}</dd>
            </div>
          ))}
        </dl>

        <DocBanner />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for eMarket - Multi-Vendor, Multi-Module Commerce Platform covering Grocery, Pharmacy, eCommerce modules, with Flutter Apps and Admin Panel"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
