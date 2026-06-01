
import { test, expect } from '@playwright/test';

test('Validate Sign Up Page', async ({ page }) => {
  await page.goto('https://prepmajor.reteicons.net/');
  await page.getByRole('link', { name: 'sign up/login' }).click();
  await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('emmatee@mail.com');
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('ogbologbotoo');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('E');
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Exhibit4173411');
  await page.getByRole('textbox', { name: 'Repeat password' }).click();
  await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Repeat password' }).fill('E');
  await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Repeat password' }).fill('Exhibit4173411');  
  await page.locator('.masterstudy-authorization__checkbox-wrapper').first().click();
  await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
  
  await expect(page.getByText('ogbologbotoo')).toBeVisible();
  
});