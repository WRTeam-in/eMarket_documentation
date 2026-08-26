import React from "react";
import Link from "@docusaurus/Link";
import Icon from "./icons";
import styles from "./styles.module.css";

const TOPICS = [
  {
    icon: "cube",
    title: "Multi-Module Commerce Ecosystem",
    description:
      "A unified platform bringing Grocery, Pharmacy, eCommerce, POS, and delivery modules together in one system — with Food Delivery, Parcel Delivery, and Ride Booking on the roadmap.",
  },
  {
    icon: "store",
    title: "Multi-Vendor Marketplace",
    description:
      "Allow multiple sellers to list and manage their own products, orders, and storefronts.",
  },
  {
    icon: "gauge",
    title: "Role-Based Management Dashboards",
    description:
      "Dedicated dashboards for admins, sellers, and delivery partners with permissions tailored to each role.",
  },
  {
    icon: "package",
    title: "Unified Order Management",
    description:
      "Track and manage every order across vendors and delivery types from a single control panel.",
  },
  {
    icon: "store",
    title: "Self Pickup Order Management",
    description:
      "Let customers place orders and pick them up in-store instead of choosing home delivery.",
  },
  {
    icon: "list",
    title: "Category Management",
    description:
      "Organize products into categories and sub-categories for easier browsing and discovery.",
  },
  {
    icon: "box",
    title: "Product Management",
    description:
      "Add, edit, and organize products with pricing, images, variants, and stock details.",
  },
  {
    icon: "archive",
    title: "Stock Management",
    description:
      "Monitor inventory levels in real time and get notified before products run out of stock.",
  },
  {
    icon: "rotateCcw",
    title: "Return Request Management",
    description:
      "Handle customer return and refund requests with a streamlined approval workflow.",
  },
  {
    icon: "wallet",
    title: "Withdrawal Request Management",
    description:
      "Review and process withdrawal requests submitted by sellers and delivery partners.",
  },
  {
    icon: "truck",
    title: "Delivery Partner Management",
    description:
      "Onboard, verify, and manage delivery partners along with their assignments and performance.",
  },
  {
    icon: "send",
    title: "Fund Transfer Management",
    description:
      "Transfer earnings and settlements to vendors and delivery partners securely from the admin panel.",
  },
  {
    icon: "wallet",
    title: "Cash Collection Management",
    description:
      "Track cash collected by delivery partners for cash-on-delivery orders and reconcile balances.",
  },
  {
    icon: "creditCard",
    title: "Salary Management",
    description:
      "Manage salary structures and payouts for delivery partners and staff members.",
  },
  {
    icon: "monitor",
    title: "Point of Sale (POS)",
    description:
      "A dedicated POS system to manage in-store sales alongside your online orders.",
  },
  {
    icon: "wallet",
    title: "Wallet Transaction Management",
    description:
      "View and manage all wallet credits, debits, and transaction history across the platform.",
  },
  {
    icon: "barChart",
    title: "Product Sales Reports",
    description:
      "Analyze best-selling and low-performing products with detailed sales breakdowns.",
  },
  {
    icon: "trendingUp",
    title: "Sales Reports",
    description:
      "Get a complete overview of platform-wide sales performance across a chosen time period.",
  },
  {
    icon: "pieChart",
    title: "POS Reports",
    description:
      "Review in-store POS sales separately with dedicated reporting and summaries.",
  },
  {
    icon: "userPlus",
    title: "Seller Onboarding",
    description:
      "A guided flow for new sellers to register and get approved to start selling on the platform.",
  },
  {
    icon: "userCheck",
    title: "Seller Request Management",
    description:
      "Review, approve, or reject seller registration and product listing requests.",
  },
  {
    icon: "users",
    title: "Seller Account Management",
    description:
      "Manage seller profiles, permissions, commissions, and account status.",
  },
  {
    icon: "shield",
    title: "Seller Policy Management",
    description:
      "Define and enforce platform policies and terms that sellers must comply with.",
  },
  {
    icon: "image",
    title: "Home Slider Management",
    description:
      "Manage homepage banners and sliders to highlight offers, products, and campaigns.",
  },
  {
    icon: "tag",
    title: "Offer Management",
    description:
      "Create and schedule special offers and discounts to boost sales and engagement.",
  },
  {
    icon: "image",
    title: "Popup Management",
    description:
      "Configure promotional popups shown to customers on the website and apps.",
  },
  {
    icon: "percent",
    title: "Promo Code Management",
    description:
      "Create promo codes and coupons with custom rules, limits, and expiry dates.",
  },
  {
    icon: "star",
    title: "Featured Section Management",
    description:
      "Curate featured products and categories to highlight them across the storefront.",
  },
  {
    icon: "edit",
    title: "Blog Management",
    description:
      "Publish and manage blog content to drive engagement and improve SEO.",
  },
  {
    icon: "sliders",
    title: "Module Management",
    description:
      "A complete list of admin panel modules and control over which ones are enabled.",
    link: "/docs/admin-panel/modules",
  },
  {
    icon: "messageSquare",
    title: "Communication Management",
    description:
      "Manage notifications, emails, and SMS communication sent to customers and partners.",
  },
  {
    icon: "settings",
    title: "Platform Configuration",
    description:
      "Configure core platform settings such as store details, currency, and delivery charges.",
  },
  {
    icon: "tool",
    title: "Technical Configuration",
    description:
      "Manage technical settings including API keys, integrations, and server-side configuration.",
  },
  {
    icon: "server",
    title: "System Administration",
    description:
      "Oversee platform health, backups, and administrative controls from a central place.",
  },
  {
    icon: "package",
    title: "Subscription Plan Management",
    description:
      "Manage vendor subscription plans and control feature access across the marketplace.",
    link: "/docs/admin-panel/subscription",
  },
  {
    icon: "languages",
    title: "Localization Management",
    description:
      "Translate and manage content for multiple languages across the website and apps.",
  },
  {
    icon: "users",
    title: "Customer Management",
    description:
      "View and manage customer profiles, order history, and account activity.",
  },
  {
    icon: "wallet",
    title: "Customer Financial Management",
    description:
      "Track customer wallet balances, refunds, and financial transactions in one place.",
  },
  {
    icon: "barChart",
    title: "Business Reports & Analytics",
    description:
      "Gain insights into platform performance with comprehensive reports and analytics dashboards.",
  },
  {
    icon: "shield",
    title: "User & Role Management",
    description:
      "Create admin users and assign granular roles and permissions across the panel.",
  },
  {
    icon: "helpCircle",
    title: "FAQ Management",
    description:
      "Add and manage frequently asked questions shown to customers on the website and apps.",
    link: "/docs/faq/intro",
  },
  {
    icon: "map",
    title: "Location-Based Shopping",
    description:
      "Show customers products and stores available in their selected location.",
    link: "/docs/admin-panel/map-api-key-settings",
  },
  {
    icon: "map",
    title: "Distance & Delivery Estimates",
    description:
      "Calculate delivery distance and estimated time based on customer and store location.",
    link: "/docs/admin-panel/map-api-key-settings",
  },
  {
    icon: "layout",
    title: "Dynamic Homepage",
    description:
      "A configurable homepage layout that adapts to featured content, offers, and categories.",
  },
  {
    icon: "list",
    title: "Infinite Category Structure",
    description:
      "Create unlimited nested categories and sub-categories to organize a large catalog.",
  },
  {
    icon: "search",
    title: "Smart Search & Product Discovery",
    description:
      "Help customers quickly find products with intelligent search and filtering.",
  },
  {
    icon: "scan",
    title: "Barcode Scanner",
    description:
      "Scan product barcodes for faster checkout and inventory management at POS.",
  },
  {
    icon: "layout",
    title: "Grid & List Product View",
    description:
      "Let customers switch between grid and list layouts when browsing products.",
  },
  {
    icon: "sliders",
    title: "Product Variants",
    description:
      "Offer products in multiple sizes, colors, or configurations with individual pricing and stock.",
  },
  {
    icon: "star",
    title: "Ratings & Reviews",
    description:
      "Let customers rate and review products to build trust and improve buying decisions.",
  },
  {
    icon: "refreshCw",
    title: "Recently Viewed Products",
    description:
      "Automatically show customers the products they viewed most recently.",
  },
  {
    icon: "shuffle",
    title: "Cross-Selling Recommendations",
    description:
      "Suggest related or complementary products to increase average order value.",
  },
  {
    icon: "fileText",
    title: "Product Request Management",
    description:
      "Let customers request products that aren't yet listed and manage those requests.",
  },
  {
    icon: "calendarClock",
    title: "Customer Subscription Management",
    description:
      "Manage recurring product subscriptions ordered by customers.",
  },
  {
    icon: "cart",
    title: "Cart Management",
    description:
      "Give customers a smooth cart experience with saved items and quick checkout.",
  },
  {
    icon: "truck",
    title: "Home Delivery",
    description:
      "Deliver orders directly to customers' doorsteps with real-time tracking.",
  },
  {
    icon: "calendarClock",
    title: "Scheduled Delivery",
    description:
      "Let customers choose a preferred delivery date and time slot for their order.",
  },
  {
    icon: "map",
    title: "Live Order Tracking",
    description:
      "Provide real-time tracking so customers can follow their order from dispatch to delivery.",
  },
  {
    icon: "creditCard",
    title: "Multiple Payment Gateways",
    description:
      "Connect Stripe, Razorpay, PayPal, and other gateways to accept payments across all platforms.",
    link: "/docs/admin-panel/payment-gateway",
  },
  {
    icon: "wallet",
    title: "Cash on Delivery (COD)",
    description:
      "Offer customers the option to pay in cash at the time of delivery.",
  },
  {
    icon: "wallet",
    title: "Digital Wallet",
    description:
      "A built-in wallet customers can use to pay for orders and store refunds or cashback.",
  },
  {
    icon: "wallet",
    title: "Add Funds to Wallet",
    description:
      "Let customers top up their wallet balance using their preferred payment method.",
  },
  {
    icon: "wallet",
    title: "Partial Wallet Payment",
    description:
      "Allow customers to pay part of an order using wallet balance and the rest via another method.",
  },
  {
    icon: "percent",
    title: "Coupon & Discount Management",
    description:
      "Create and manage coupons and discounts to run targeted promotional campaigns.",
  },
  {
    icon: "crown",
    title: "Membership Plans",
    description:
      "Offer premium membership plans with exclusive benefits and discounts for loyal customers.",
  },
  {
    icon: "userPlus",
    title: "Refer & Earn",
    description:
      "Reward customers with wallet credit or discounts for referring new users to the platform.",
  },
  {
    icon: "shield",
    title: "Secure Login & Authentication",
    description:
      "Enable secure authentication options including email, phone OTP, and social login via Firebase.",
    link: "/docs/admin-panel/login-settings",
  },
  {
    icon: "bell",
    title: "Push Notifications",
    description:
      "Send real-time push notifications to keep customers and partners informed and engaged.",
  },
  {
    icon: "messageSquare",
    title: "SMS Gateway Integration",
    description:
      "Integrate SMS gateways to send OTPs, order updates, and alerts to users.",
    link: "/docs/admin-panel/twilio-settings",
  },
  {
    icon: "mail",
    title: "Email Notification System",
    description:
      "Configure SMTP so the platform can send order confirmations, invoices, and account notifications.",
    link: "/docs/admin-panel/email-settings",
  },
  {
    icon: "languages",
    title: "Multi-Language Support",
    description:
      "Support multiple languages across the website and apps for a global customer base.",
  },
  {
    icon: "moon",
    title: "Dark & Light Mode",
    description:
      "Give users the choice to switch between dark and light themes across the apps.",
  },
  {
    icon: "refreshCw",
    title: "Force Update",
    description:
      "Prompt users to update the app to the latest version to ensure compatibility and security.",
  },
  {
    icon: "globe",
    title: "SEO Management",
    description:
      "Manage meta tags, sitemaps, and SEO settings to improve website search rankings.",
    link: "/docs/website/seo-for-web",
  },
];

function Card({ topic, number }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <Icon name={topic.icon} size={32} />
      </div>
      <h3 className={styles.title}>
        {number}. {topic.title}
      </h3>
      <p className={styles.description}>{topic.description}</p>
    </div>
  );
}

export default function TopicGrid() {
  return (
    <div className={styles.grid}>
      {TOPICS.map((topic, idx) =>
        topic.link ? (
          <Link key={idx} to={topic.link} className={styles.cardLink}>
            <Card topic={topic} number={idx + 1} />
          </Link>
        ) : (
          <div key={idx} className={styles.plainCard}>
            <Card topic={topic} number={idx + 1} />
          </div>
        )
      )}
    </div>
  );
}
