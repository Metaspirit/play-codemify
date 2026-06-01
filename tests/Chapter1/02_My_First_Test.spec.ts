// //Import Playwright Module
// import {test, expect} from '@playwright/test'

// //Write the Test Script
// test('My First Playwright Typescript Test', async({page})=>{
//     //Go to URL
//     await page.goto('https://prepmajor.reteicons.net/');
//     //input valid login credentials
//     await page.getByRole('link', { name: 'sign up/login' }).click();
//     await page.getByRole('textbox', { name: 'Enter email or username' }).fill('Utester');
//     await page.getByRole('textbox', { name: 'Enter password' }).fill('Tester001');
//     await page.getByRole('link', { name: 'Sign In' }).click();
//     await expect(page.locator('#wrapper')).toContainText('Utester');    

// });

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





