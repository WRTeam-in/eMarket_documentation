---
sidebar_position: 10
title: Deploy Website With SEO
---

This guide explains how to deploy your eBroker web application with SEO support using Next.js on a VPS server.

:::warning
This is an advanced deployment option for users who have a VPS server and are familiar with Node.js, npm, and pm2. The instructions assume you're using a Debian-based Linux distribution.
:::

## Uploading Your Project

Before starting deployment, upload your project to the server:

1. Use an FTP client like [FileZilla](https://filezilla-project.org/download.php) to upload your project files to your server
2. Alternatively, use Git to clone your repository directly on the server

## Installing Node.js

Node.js can be installed using NVM (Node Version Manager) to easily manage multiple Node.js versions:

```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc  # or restart your terminal
nvm install node 20.*
```

Verify the installation with:

```
npm install pm2 -g
```

## Setting Up the Project

Make sure you have all the dependencies installed:

```
npm install
```

Build the production application:

```
npm run build
```

## Running with PM2

Start your application with PM2:

```
pm2 start "npm start" -n "YOUR_PROJECT_NAME"
```

Check if the PM2 process is running correctly:

```
pm2 ls
```

You should see your application in the list of running processes:

 ![Out Folder](/img/website/images/pm2_success.png)

 If you see errors:

 ![Out Folder](/img/website/images/pm2_error.png)

 Run `pm2 logs` to see detailed error messages.

 ## Managing PM2 Processes

 To restart a PM2 process:

 ```
 pm2 restart [id]
 ```

 Replace `[id]` with your process ID (e.g., `pm2 restart 0`).

To delete a PM2 process:
    
```
pm2 delete "YOUR_PROJECT_NAME"
```

For more information, refer to the [official PM2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/).

## Testing Your Deployment

After completing all steps:

1. Visit your website using your domain name
2. Verify that all pages load correctly with proper SEO metadata
3. Check that server-side rendering is working by viewing the page source
4. Test all functionality to ensure everything works as expected