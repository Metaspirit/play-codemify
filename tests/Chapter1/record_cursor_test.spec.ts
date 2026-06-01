import{test, expect, Page} from '@playwright/test';
// write a test
test("Practice test" , async({page}) => {
 await page.goto("https://www.google.com");
 // use double quotes outside and single quotes inside to avoid quote issues
 await page.locator("//*[@id='L2AGLb']").click();
 //search with keyword "Playwright"
 await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
 await page.getByLabel("Search" , { exact: true }).press("Enter");
 await page.waitForLoadState('domcontentloaded');


await page.locator('#_kLYdas3yBqbs7_UPuurf-AE_41').click();
await page.waitForLoadState('networkidle')

await expect(page).toHaveTitle("Playwright by Testers Talk - YouTube");


})


