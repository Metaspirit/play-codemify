
import { test, expect } from '@playwright/test';

test('Capturing Screenshots', async ({ page }) => {
  await page.goto('https://prepmajor.reteicons.net/');

  // capture element screenshot
  await page.locator('//*[@id="masthead"]/div/section/div/div[1]/div/div/div/div/a').screenshot({path : './Screenshots/element_screenshot.png'});   

  //capture page screenshot
  await page.screenshot({path : './Screenshots/page_screenshot.png'});  


  //capture full page screenshot
  await page.screenshot({path : './Screenshots/full_page_screenshot.png', fullPage: true});

//   await page.getByRole('link', { name: 'sign up/login' }).click();
//   await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
//   await expect(page.getByText('Sign Up').nth(2)).toBeVisible();
});