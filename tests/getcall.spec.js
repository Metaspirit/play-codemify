import{test, expect} from "@playwright/test"
test('Test GET API', async function ({ request}) {
  const resp = await request.get('https://dummyjson.com/products')
  const respStatus = await resp.status();
  console.log(respStatus); 
  expect(respStatus).toBe(200);

})