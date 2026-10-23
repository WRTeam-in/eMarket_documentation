import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const INSTALL_URL =
  "https://api.whatsapp.com/send?phone=916359302924&text=Hello%20Vimal,%20I%20want%20to%20know%20more%20about%20the%20installation%20service%20for%20eMarket";

const COLUMNS = [
  {
    title: "Documentation",
    links: [
      { label: "Admin Panel", to: "/docs/admin-panel/intro" },
      { label: "Website", to: "/docs/website/intro" },
      { label: "Customer App", to: "/docs/flutter-app/intro" },
      { label: "Partner App", to: "/docs/flutter-partner-app/intro" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Features", to: "/docs/features" },
      { label: "Changelog", to: "/docs/changelog/version-history" },
      { label: "Version Compatibility", to: "/docs/changelog/version-compatibility" },
      { label: "FAQ", to: "/docs/faq/intro" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "WRTeam", href: "https://wrteam.in" },
      { label: "Contact Us", to: "/docs/contact" },
      { label: "support@wrteam.in", copy: "support@wrteam.in" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/wrteam",
    path: "M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z",
  },
  {
    label: "X",
    href: "https://twitter.com/wrteam",
    path: "M4 4l6.5 8.6L4.3 20H6l5.3-6.1L16 20h4l-6.8-9L19 4h-1.7l-4.9 5.6L8 4H4z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wrteam",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/wrteam",
    path: "M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 6h3.8v1.7c.6-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 6V21h-4v-5.5c0-1.4 0-3.1-1.9-3.1s-2.1 1.5-2.1 3V21h-4z",
  },
];

function CopyLink({ label, copy }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${copy}`;
    }
  };
  return (
    <button type="button" className={`${styles.link} ${styles.copyLink}`} onClick={onClick} title="Click to copy">
      {label}
      <span className={`${styles.copyBadge} ${copied ? styles.copyBadgeOn : ""}`} aria-live="polite">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}

function FooterLink({ label, to, href, copy }) {
  if (copy) return <CopyLink label={label} copy={copy} />;
  return href ? (
    <a className={styles.link} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {label}
      {href.startsWith("http") && <span className={styles.external} aria-hidden="true">↗</span>}
    </a>
  ) : (
    <Link className={styles.link} to={to}>
      {label}
    </Link>
  );
}

// Fills a ring around the back-to-top button as the page is scrolled
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const logo = useBaseUrl("/img/app_icon.png");
  const copyright =
    siteConfig.themeConfig.footer?.copyright ??
    `Copyright © ${new Date().getFullYear()} WRTeam. All rights reserved.`;
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const progress = useScrollProgress();

  // Reveal the columns once the footer scrolls into view
  useEffect(() => {
    const el = footerRef.current;
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
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Spotlight that follows the cursor
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const ring = 2 * Math.PI * 15;

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${visible ? styles.visible : ""}`}
      onMouseMove={onMouseMove}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.cta} ${styles.reveal}`}>
          <div>
            <p className={styles.ctaEyebrow}>Launch faster</p>
            <h2 className={styles.ctaTitle}>Need help getting eMarket live?</h2>
            <p className={styles.ctaText}>
              Our team can install and configure the apps and panels for you.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a className={styles.primaryBtn} href={INSTALL_URL} target="_blank" rel="noopener noreferrer">
              Installation Service <span className={styles.btnArrow}>→</span>
            </a>
            <Link className={styles.ghostBtn} to="/docs/contact">
              Contact Support
            </Link>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.brand} ${styles.reveal}`} style={{ "--delay": "80ms" }}>
            <Link to="/" className={styles.brandName}>
              <span className={styles.logoTile}>
                <img src={logo} alt="" width="24" height="24" />
              </span>
              {siteConfig.title.replace(/ Documentation$/, "")}
            </Link>
            <Link to="/docs/changelog/version-history" className={styles.releasePill}>
              <span className={styles.pulse} aria-hidden="true" />
              v4.0.2 is out · See what's new
            </Link>
            <p className={styles.brandText}>
              Multi-vendor, multi-module commerce for Grocery, Pharmacy, Food, and eCommerce, with
              Flutter apps and a powerful admin panel.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  className={styles.social}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-tip={s.label}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col, i) => (
            <nav
              key={col.title}
              className={`${styles.column} ${styles.reveal}`}
              style={{ "--delay": `${160 + i * 80}ms` }}
              aria-label={col.title}
            >
              <h3 className={styles.columnTitle}>{col.title}</h3>
              <ul className={styles.list}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>{copyright}</span>
          <button
            type="button"
            className={styles.toTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className={styles.ringWrap}>
              <svg viewBox="0 0 36 36" width="36" height="36" aria-hidden="true">
                <circle className={styles.ringTrack} cx="18" cy="18" r="15" />
                <circle
                  className={styles.ringFill}
                  cx="18"
                  cy="18"
                  r="15"
                  strokeDasharray={ring}
                  strokeDashoffset={ring * (1 - progress)}
                />
              </svg>
              <span className={styles.ringArrow}>↑</span>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
