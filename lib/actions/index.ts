"use server";

import { scrapeAmazonProduct } from "../scrapper";

export async function scrapAndStoreProduct(productURL: string) {
  if (!productURL) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productURL);
    if (!scrapedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
