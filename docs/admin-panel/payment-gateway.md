---
sidebar_position: 12
---

# Payment Gateway

Set here payment gateways list.

![Payment Gateways](/img/admin-panel/payment_gateways.png)

Set here payment method details.

![Payment Method](/img/admin-panel/payment_method.png)

Here you can set Stripe and Razorpay details.

![Stripe Setting](/img/admin-panel/stripe_setting.png)

![Razorpay Setting](/img/admin-panel/razorpay_setting.png)

Here you can enable Paystack.

![Paystack Setting](/img/admin-panel/paystack_setting.png)

Here you can enable your Paytm account.

![Paytm Setting](/img/admin-panel/paytm_setting.png)

Here you can enable your PayPal account.

![PayPal Setting](/img/admin-panel/paypal_setting.png)

Here you can set your Direct Bank Transfer information.

![Direct Bank Transfer](/img/admin-panel/direct_bank_transfer.png)

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

## Paytm

1. Go to [https://dashboard.paytm.com/](https://dashboard.paytm.com/) and sign in with your Paytm account either with credentials or with QR code
   ![Paytm Login](/img/admin-panel/paytm-login.webp)
2. Active account if not active

## DPO 
1. Go to DPO Pay Portal [https://dpogroup.com/] and sign in with your DPO Pay merchant account.
2. After login, open your merchant dashboard.
3. Go to Settings or Integration Settings from the dashboard menu.
4. Copy your following credentials:-Company Token,Service Type,API URL (if required)
4. In your admin panel, navigate to:
       System -> Payment Methods -> DPO Pay

5. Paste all DPO Pay credentials into the required fields and clcik on update
