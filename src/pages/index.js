import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import DocBanner from "../../docs/promotion-banner/DocBanner";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="/docs/admin-panel/intro"
          >
            Read the Docs
          </Link>
          <Link
            className={clsx("button button--md", styles.ghostButton)}
            to="/docs/features"
          >
            What's New in 4.0.2
          </Link>
        </div>
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
