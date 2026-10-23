import React, { useEffect, useRef, useState } from "react";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Admin Panel",
    Svg: require("@site/static/img/admin.png").default,
    description: "Manage products, orders, vendors, and customers from one dashboard.",
    link: "/docs/admin-panel/intro",
  },
  {
    title: "Website",
    Svg: require("@site/static/img/website.png").default,
    description: "Responsive storefront for shopping on desktop and mobile browsers.",
    link: "/docs/website/intro",
  },

  {
    title: "Flutter Customer App",
    Svg: require("@site/static/img/mobile.png").default,
    description: "iOS and Android app to shop, order, and track deliveries.",
    link: "/docs/flutter-app/intro",
  },
  {
    title: "Flutter Partner App",
    Svg: require("@site/static/img/mobile.png").default,
    description: "App for sellers and delivery partners to run orders and stores.",
    link: "/docs/flutter-partner-app/intro",
  },
  {
    title: "Features",
    Svg: require("@site/static/img/features.png").default,
    description: "Everything eMarket offers, from multi-vendor to payments.",
    link: "/docs/features",
  },
  {
    title: "Changelog",
    Svg: require("@site/static/img/changelog.png").default,
    description: "Latest releases, improvements, and fixes, version by version.",
    link: "/docs/changelog/intro",
  },
  {
    title: "FAQ",
    Svg: require("@site/static/img/faq.png").default,
    description: "Answers on installation, updates, and troubleshooting.",
    link: "/docs/faq/intro",
  },
  {
    title: "Detailed Documentation",
    Svg: require("@site/static/img/documentation.png").default,
    description: "In-depth setup, module, and configuration guides.",
    link: "/docs/detailed-documentation",
  },
];

// Tilts the card toward the cursor and moves a glow under it
function onCardMove(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  el.style.setProperty("--glow-x", `${x * 100}%`);
  el.style.setProperty("--glow-y", `${y * 100}%`);
  el.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
  el.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
}

function onCardLeave(e) {
  e.currentTarget.style.setProperty("--tilt-x", "0deg");
  e.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function Feature({ Svg, title, description, link, index }) {
  return (
    <Link
      to={link}
      className={styles.card}
      style={{ "--delay": `${index * 60}ms` }}
      onMouseMove={onCardMove}
      onMouseLeave={onCardLeave}
    >
      <span className={styles.iconTile}>
        <span
          className={styles.featureSvg}
          role="img"
          aria-label={title}
          style={{
            WebkitMaskImage: `url(${Svg})`,
            maskImage: `url(${Svg})`,
          }}
        />
      </span>
      <span className={styles.body}>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <span className={styles.description}>{description}</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function HomepageFeatures() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Stagger the cards in once the grid scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Explore the documentation</h2>
        <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
          {FeatureList.map((props, index) => (
            <Feature key={props.title} index={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
