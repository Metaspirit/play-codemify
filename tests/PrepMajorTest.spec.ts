import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step("Navigate to the URL" , async() => {
  await page.goto('https://prepmajor.reteicons.net/');
  })   
  await test.step("Enter Registration Details" , async() => {
  await page.getByRole('link', { name: 'sign up/login' }).click();
  await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('me@mail.com');
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('megamind');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('E');
  await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Exhibit4173');
  await page.getByRole('textbox', { name: 'Repeat password' }).click();
  await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Repeat password' }).fill('E');
  await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Repeat password' }).fill('Exhibit4173');
  })  
  await test.step("click checkbox" , async() => {
  await page.locator('.masterstudy-authorization__checkbox-wrapper').first().click();
  })
   await test.step("Click  SIGN up button" , async() => {
   await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
  }) 
   await test.step("Validate User is Registered" , async() => {
   await page.goto('https://prepmajor.reteicons.net/user-account/');
   await page.getByText('megamind', { exact: true }).click();
   await expect(page.locator('#wrapper')).toContainText('megamind');
  })
  
});