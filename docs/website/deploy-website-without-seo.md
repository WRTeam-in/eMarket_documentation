---
sidebar_position: 8
title: Deploy Website Without SEO
---

## DNS record entry

DNS records are crucial because they translate your domain name into the correct server IP address, allowing users to access your website and services. Without proper DNS records, your domain won’t function as intended online.

[Hostinger reference for DNS entry](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records)

# Deploy Website

Learn how to deploy the eMarket website to a production server.

## How to deploy website on server?

1. The command `npm run export` will create an optimized version of your web application in the `out` folder. After the process completes, navigate to the `out` folder and upload these files to your live server (only upload files from the out folder).

   ![Out Folder](/img/website/images/nextjs-out-folder.png)

:::tip
If you encounter any deployment-related problems, you can follow the official Next.js deployment documentation: [Next.js Deployment](https://nextjs.org/docs/pages/building-your-application/deploying)
:::
