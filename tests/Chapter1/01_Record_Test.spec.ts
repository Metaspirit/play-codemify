import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://prepmajor.reteicons.net/');
  await page.getByRole('link', { name: 'sign up/login' }).click();
  await page.getByRole('textbox', { name: 'Enter email or username' }).click();
  await page.getByRole('textbox', { name: 'Enter email or username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter email or username' }).fill('U');
  await page.getByRole('textbox', { name: 'Enter email or username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter email or username' }).fill('Utester');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('T');
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Tester001');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#wrapper')).toContainText('Utester');
  await expect(page.locator('#wrapper')).toContainText('Utester');
});