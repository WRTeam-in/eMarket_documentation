---
sidebar_position: 17
sidebar_label: Subscription Settings
---

# Subscription

The Subscription feature allows you to create and manage subscription plans for your customers. This offers benefits like free delivery based on plan limits.

## Add Subscription Plans

In the **Subscription** menu detailed section, you can add new subscription data.

![Subscription Settings](/img/admin-panel/subscription.png)

When creating a plan, you can specify:

-   **Plan Name**: The name of the subscription plan (e.g., Bronze, Silver, Gold).
-   **Price**: The cost of the subscription plan.
-   **Duration**: The validity period of the plan.
-   **Free Delivery Limit**: The order amount above which subscribers will get free delivery.

## Free Delivery Logic

If a user has an active subscription, they will be eligible for free delivery charges according to their plan's **Free Delivery Limit**.
-   If the order amount exceeds the limit set in their plan, the delivery charge will be waived.

## Time Slot & Delivery Logic

There is an important interaction between Subscriptions and Free Delivery Time Slots:

> **Note:** A Subscription will be created/active only if the **Free Delivery Time Slot** setting is **OFF**, and vice versa.

Ensure that you have configured your Subscription Settings correctly to enable the mode you intend to use.

## Subscription FAQs

You can also manage a list of Frequently Asked Questions (FAQs) related to subscriptions to help your customers understand the plans and benefits better.
