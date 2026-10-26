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

function Feature({ Svg, title, description, link }) {
  return (
    <Link to={link} className={styles.card}>
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
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
