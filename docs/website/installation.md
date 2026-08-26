---
sidebar_position: 2
---

# Website Installation

This guide will walk you through the process of installing and setting up the eMarket website on your system.

## System Requirements

Before you begin, make sure your system meets the following requirements:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- Git (optional, for version control)

## Installation Steps

Follow these steps to install the eMarket website:

### 1. Download the Package

Download the eMarket website package from your purchase source or repository.

### 2. Extract the Files

Extract the downloaded package to your local development directory.

### 3. Install Node.js and npm

If you haven't already installed Node.js and npm, download and install them from the [official Node.js website](https://nodejs.org/).

To verify the installation, open your terminal/command prompt and run:

```bash
node -v
npm -v
```

These commands should display the installed versions of Node.js and npm.

### 4. Navigate to Project Directory

Open your terminal/command prompt and navigate to the extracted project directory:

```bash
cd path/to/egroccer-website
```

### 5. Install Dependencies

Install all the required dependencies using npm:

```bash
npm install
```

This command will install all the packages listed in the `package.json` file.

### 6. Configure Environment Variables

Create a `.env` file in the root directory of your project:

```bash
cp .env.example .env
```

If there's no `.env.example` file, create a new `.env` file and add the required environment variables:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
# Add other required environment variables
```

Make sure to update these values according to your setup. See [Environment Variables Setup](./setup-env-variables.md) for more details.

### 7. Firebase Configuration (Optional)

If you want to use Firebase for authentication, real-time database, or other services, follow the [Firebase Setup guide](./firebase-setup.md).

### 8. Run Development Server

To start the development server locally, run:

```bash
npm run dev
```

This will start the Next.js development server, usually at http://localhost:3000.

### 9. Build for Production

When you're ready to deploy, create an optimized production build:

```bash
npm run export
```

This will generate the static files in the `out` directory that you can deploy to any static hosting service.

## Verify Installation

After completing the installation steps, you can verify that everything is working properly by checking the following:

1. **Development Server**: Make sure the development server is running without errors at http://localhost:3000.

2. **Website Navigation**: Check that you can navigate through different pages of the website.

3. **API Integration**: Verify that the website can connect to the backend API by testing features that require API calls.

4. **Responsive Design**: Test the website on different screen sizes to ensure it's responsive.

## Troubleshooting

If you encounter any issues during installation, check the following:

- Make sure your Node.js and npm versions meet the requirements
- Verify that all environment variables are correctly set in the `.env` file
- Check for any error messages in the terminal/console
- Ensure the API endpoints are accessible from your development environment

### Common Issues

#### Issue: Module Not Found Error

- **Solution**: Make sure you've installed all dependencies by running `npm install`

#### Issue: Environment Variables Not Working

- **Solution**: Restart the development server after updating the `.env` file

#### Issue: Build Errors

- **Solution**: Check the error messages for specific issues. Common problems include missing dependencies or syntax errors in the code.

#### Issue: "ENOSPC" Error on Linux

- **Solution**: This error occurs when you've reached the limit of files that can be watched. Increase the limit with:
  ```bash
  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  ```

#### Issue: Port Already in Use

- **Solution**: Change the port by running:
  ```bash
  npm run dev -- -p 3001
  ```
  This starts the development server on port 3001 instead of the default 3000.
