import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('user can navigate to venue details', async ({ page }) => {
      // Go to login page
      await page.goto("http://localhost:3000/");

      await page.waitForSelector('.venue-list');

      const firstVenue = await page.locator('.venue-list').locator('div').first();
      await firstVenue.click();

      await expect(page.url()).toContain('/venue/');
    });
  });
    