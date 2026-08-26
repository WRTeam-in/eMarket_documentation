---
sidebar_position: 3
---

# Setup Node Js

This guide will walk you through setting up Node Js for the eMarket website on Windows.

## How to setup Node Js on Windows?

1. If your system already has npm package installed, you can skip this step.

2. To check whether your system already has npm package installed or not, open Command Prompt and type the following commands:

```bash
node -v
npm -v
```

3. If npm is already installed, these commands will display the versions:

![NPM Version Check](/img/website/images/react-npm-check.webp)

4. If npm is not installed, download it from the official website: [npm](https://nodejs.org/en)

5. Download the "Recommended For Most Users" option for Windows (x64):

![Download NPM](/img/website/images/react-npm-node.webp)

6. After downloading the installer, follow these steps:

   - Launch the installer
   - Click next
   - Review and accept the End-user License Agreement; click next
   - Select your destination path; click next
   - In custom setup panel, select `npm package manager` option and click next

   **Step 1:**
   ![NPM Installation Step 1](/img/website/images/react-npm-step1.webp)

   **Step 2:**
   ![NPM Installation Step 2](/img/website/images/react-npm-step2.webp)

   **Step 3:**
   ![NPM Installation Step 3](/img/website/images/react-npm-step3.webp)

   **Step 4:**
   ![NPM Installation Step 4](/img/website/images/react-npm-step4.webp)

   **Step 5:**
   ![NPM Installation Step 5](/img/website/images/react-npm-step5.webp)

   **Step 6:**
   ![NPM Installation Step 6](/img/website/images/react-npm-step6.webp)

7. Verify npm installation by running the commands mentioned in steps 2 and 3.

8. Once npm is installed, you can create a new Next.js project or install dependencies for an existing project using:

```bash
npm install
```
