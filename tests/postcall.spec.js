import { test, expect } from "@playwright/test";
test('Test Post API', async function ({ request }) {
  const resp = await request.post ('https://dummyjson.com/products/add');
  //console.log(resp);
  const respjson= await resp.json();
  console.log(respjson);
  //expect(respstatus).toBe(201);
})