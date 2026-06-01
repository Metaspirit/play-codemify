
import { test, expect } from '@playwright/test';

test('Validate sign up page', async ({ page }) => {
  await page.goto('https://prepmajor.reteicons.net/');
  await page.getByRole('link', { name: 'sign up/login' }).click();
  await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
  await expect(page.getByText('Sign Up').nth(2)).toBeVisible();
});