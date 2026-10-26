import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import DocBanner from "../../docs/promotion-banner/DocBanner";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

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

  return (
    <header className={styles.hero}>
      <div className="container">
        <Link to="/docs/changelog/version-history" className={styles.releasePill}>
          <span className={styles.dot} aria-hidden="true" />
          v4.0.2 is out — see what's new
        </Link>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>
          Set up, configure, and run the eMarket multi-vendor platform — admin panel, website, and Flutter apps.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/docs/admin-panel/intro">
            Read the Docs
          </Link>
          <button type="button" className={styles.searchButton} onClick={openSearch}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            Search docs
            <kbd className={styles.kbd}>{isMac ? "⌘" : "Ctrl"} K</kbd>
          </button>
        </div>
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
        <div className={`container ${styles.banner}`}>
          <DocBanner />
        </div>
      </main>
    </Layout>
  );
}
