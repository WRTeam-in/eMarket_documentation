---
sidebar_position: 12
---

# Payment Gateway

here payment gateways list.

- Cash on Delivery (COD)
- PayPal
- PayUmoney
- Razorpay
- Paystack
- Flutterwave
- Stripe
- SSLCommerz (ssl_commerce)
- Direct Bank Transfer (manual, not a gateway API)
- Midtrans
- PhonePe (phonepay)
- Cashfree
- PayTabs
- DPO

here payment method details.

![Payment Gateways & Methods Settings](/img/admin-panel/payment_gateways_methods_settings.webp)


Verity of options available for payments, just follow the below steps to configure the payment gateways for eMarket.

## Stripe

1. Go to [https://dashboard.stripe.com/login](https://dashboard.stripe.com/login) and sign in with your Stripe account
2. Sign in with your account
   ![Stripe 1](/img/admin-panel/stripe1.webp)
3. Click on Developers on top right of the browser
   ![Stripe 2](/img/admin-panel/stripe2.webp)
4. Click Api keys on left Navigation bar
   ![Stripe 3](/img/admin-panel/stripe3.webp)
5. Click Reveal Key and copy Publishable key and Secret Key.
   ![Stripe 4](/img/admin-panel/stripe4.webp)
6. Paste all Stripe Credentials here. (System -> Payment Methods)
   ![Stripe](/img/admin-panel/stripe.webp)

## Razorpay

1. Go to [https://dashboard.razorpay.com/](https://dashboard.razorpay.com/) and sign in with your Razorpay account
   ![RP](/img/admin-panel/rp.webp)
2. Click Settings
   ![RP 1](/img/admin-panel/rp1.webp)
3. Click Api keys
   ![RP 2](/img/admin-panel/rp2.webp)
4. Genetare new key or regenerate key and copy it.
   ![RP 3](/img/admin-panel/rp3.webp)
5. Paste all Razorpay Credentials here. (System -> Payment Methods)
   ![Razorpay](/img/admin-panel/razorpay.webp)

## Paystack

1. Go to [https://dashboard.paystack.com/](https://dashboard.paystack.com/) and sign in with your Paystack account
   ![PS](/img/admin-panel/ps.webp)
2. Click settings and click API Keys & Webhooks
   ![PS 1](/img/admin-panel/ps1.webp)
3. Copy Credentials
   ![PS 2](/img/admin-panel/ps2.webp)
4. Paste all Paystack Credentials here. (System -> Payment Methods)
   ![Paystack](/img/admin-panel/paystack.webp)

## Cashfree

1. Go to the Cashfree merchant dashboard and sign in with your Cashfree account. Use the **Test Environment** for sandbox testing.
2. Click **Developers** at the top right, then under **Payment Gateway** click **API Keys**.
   ![Cashfree Developers](/img/admin-panel/cashfree-demo-dashboard.webp)
3. Copy your **App ID** (x-client-id) and **Secret Key** (x-secret-key). If no keys exist, click **Generate API Keys**.
   ![Cashfree API Keys](/img/admin-panel/cashfree-copy-keys.webp)
4. In your admin panel, go to **System → Payment Methods** and find **Cashfree Payments**.
5. Turn on **Cashfree Payments**, select the **Cashfree Payment Mode** (sandbox or live), and paste the **App ID** and **Secret Key**.
   ![Cashfree Payments Settings](/img/admin-panel/cashfree-payment-settings.webp)
   ![Cashfree Paste Credentials](/img/admin-panel/cashfree-paste-server-key.webp)
6. Copy the **Notification URL** shown in the Cashfree Payments card (for example `https://your-domain.com/cashfree/callback`). Set it as the webhook URL in your Cashfree account in the next steps.
   ![Cashfree Notification URL](/img/admin-panel/cashfree-callback-url-copy.webp)
7. In the Cashfree dashboard, click **Developers**, then under **Payment Gateway** click **Webhooks**.
   ![Cashfree Webhooks](/img/admin-panel/cashfree-callback-url-set-1.webp)
8. Click **Add Webhook Endpoint**. Paste the Notification URL in **Endpoint URL**, click **Test**, keep the webhook version as `2022-09-01`, and click **Continue**.
   ![Cashfree Endpoint Details](/img/admin-panel/cashfree-callback-url-set-2.webp)
9. In **Add Policy**, keep the **Default** retry policy, click **Select all** under **Select Events**, and click **Continue**.
   ![Cashfree Add Policy](/img/admin-panel/cashfree-callback-url-set-3.webp)
10. Check the **Summary** and click **Save**.
    ![Cashfree Summary](/img/admin-panel/cashfree-callback-url-set-4.webp)
11. Back in the admin panel, click **Update** to save the Cashfree settings.

**Going live**

1. In the Cashfree dashboard, first click **Switch to Prod** to switch to production mode.
2. Then go to **Developers → API Keys** and copy the live **App ID** and **Secret Key**.
   ![Cashfree Live Dashboard](/img/admin-panel/cashfree-live-dashboard.webp)
3. In the admin panel, set **Cashfree Payment Mode** to live, paste the live credentials and click **Update**.
4. Add the webhook endpoint again in the production dashboard (steps 7 to 10).

## DPO 
1. Go to DPO Pay Portal [https://dpogroup.com/] and sign in with your DPO Pay merchant account.
2. After login, open your merchant dashboard.
3. Go to Settings or Integration Settings from the dashboard menu.
4. Copy your following credentials:-Company Token,Service Type,API URL (if required)
4. In your admin panel, navigate to:
       System -> Payment Methods -> DPO Pay

5. Paste all DPO Pay credentials into the required fields and clcik on update
