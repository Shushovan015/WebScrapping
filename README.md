# Web Scraping E-commerce Project

This is a web scraping project built with [Next.js](https://nextjs.org) and styled using [Tailwind CSS](https://tailwindcss.com). The goal of this project is to create an e-commerce site by scraping product data from Amazon.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm, yarn, pnpm, or bun package manager
- Basic knowledge of web scraping and APIs

### Project Setup

First, clone the repository and install the dependencies:

```bash
git clone git@github.com:Shushovan015/WebScrapping.git
cd WebScrapping

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Running the Development Server
To start the development server, run the following command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view the app.

You can start editing the e-commerce site by modifying the app/page.tsx file. The page auto-updates as you make changes.

## Scraping Amazon Products

This project uses web scraping to fetch product details from Amazon. Ensure that you follow Amazon's robots.txt and comply with their scraping policies. We are using libraries like puppeteer or cheerio to handle the scraping.

To configure and run the scraper:

- Set up your scraping logic in the scrapers/amazonScraper.ts file
- Define the product categories or URLs to scrape in your configuration.
- Run the scraper with:
```bash
npm run scrape
```
This will fetch the product data and store it in a database or display it directly on the website.