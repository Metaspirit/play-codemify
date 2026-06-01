//import playwright module
import { test, expect } from '@playwright/test';

//Write Test
test("My Second TypeScript Test", async({page})=>{
//Go to URL
await page.goto('https://tutorialsninja.com/demo/');
//Search with keywords
await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
await page.locator('#search').getByRole('button').click();

//Validate web Page title
await expect (page.getByText('iPhone', { exact: true })).toBeVisible();

})

// // Import Playwright test module
// import { test, expect } from "@playwright/test";

// test("My Second TypeScript Test", async ({ page }) => {
//   // Go to URL
//   await page.goto("[tutorialsninja.com](https://tutorialsninja.com/demo/)");

//   // Search with keywords
//   await page.getByRole("textbox", { name: "Search" }).fill("iphone");
//   await page.locator("button.btn.btn-default.btn-lg").click();

//   // Validate that iPhone appears in the results
//   await expect(page.getByText("iPhone", { exact: true })).toHaveText("iPhone");
// });
await page.goto('https://prepmajor.com/');
await page.getByRole('link', { name: 'Sign up' }).click();
await page.getByRole('textbox', { name: 'Enter email or username' }).click();
await page.getByRole('textbox', { name: 'Enter email or username' }).fill('uwem@mail.com');
await page.getByRole('textbox', { name: 'Enter password' }).click();
await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
await page.getByRole('textbox', { name: 'Enter your email' }).click();
await page.getByRole('textbox', { name: 'Enter your email' }).fill('uwem@mail.com');
await page.getByRole('textbox', { name: 'Enter username' }).click();
await page.getByRole('textbox', { name: 'Enter username' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter username' }).fill('T');
await page.getByRole('textbox', { name: 'Enter username' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter username' }).fill('Testerbility');
await page.getByRole('textbox', { name: 'Enter password' }).click();
await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter password' }).fill('E');
await page.getByRole('textbox', { name: 'Enter password' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter password' }).fill('Exhibit');
await page.getByRole('textbox', { name: 'Repeat password' }).click();
await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Repeat password' }).fill('E');
await page.getByRole('textbox', { name: 'Repeat password' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Repeat password' }).fill('Exhibit');
await page.getByRole('link', { name: 'Sign Up', exact: true }).click();
await page.getByRole('textbox', { name: 'Repeat password' }).click();
await page.getByRole('textbox', { name: 'Repeat password' }).fill('Exhibit12');
await page.getByRole('textbox', { name: 'Enter password' }).click();
await page.getByRole('textbox', { name: 'Enter password' }).fill('Exhibit12');
await page.getByRole('link', { name: 'Sign Up', exact: true }).click();