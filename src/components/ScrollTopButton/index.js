import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const RADIUS = 20;
const RING = 2 * Math.PI * RADIUS;

// Floating back-to-top button whose ring fills as the page is scrolled
export default function ScrollTopButton() {
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setShown(window.scrollY > 300);
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

  return (
    <button
      type="button"
      className={`${styles.button} ${shown ? styles.shown : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={shown ? 0 : -1}
    >
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle className={styles.track} cx="24" cy="24" r={RADIUS} />
        <circle
          className={styles.fill}
          cx="24"
          cy="24"
          r={RADIUS}
          strokeDasharray={RING}
          strokeDashoffset={RING * (1 - progress)}
        />
      </svg>
      <span className={styles.arrow} aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
