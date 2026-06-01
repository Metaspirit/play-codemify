import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter'); 
  await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 29.9k+ followers' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await expect(page.getByLabel('#1 Playwright Tutorial Full').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
});