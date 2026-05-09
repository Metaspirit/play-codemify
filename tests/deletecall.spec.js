import {test, expect} from "@playwright/test"
test('Test Delete API', async function ({ request }) {
  const resp = await request.delete ('https://dummyjson.com/carts/1');
  const respStatus= await resp.status();
  console.log(respStatus);
  expect(respStatus).toBe(200);
})