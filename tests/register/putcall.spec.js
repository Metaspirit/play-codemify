import { test, expect } from "@playwright/test";
test('Test Put API', async function ({ request }) {
  const resp = await request.put ('https://dummyjson.com/carts/1');  
  const respStatus= await resp.status();
  console.log(respStatus);
  expect(respStatus).toBe(200);
})