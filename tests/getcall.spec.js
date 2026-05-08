import{test, expect} from "@playwright/test"
test('Test GET API', async function ({ request}) {
  const resp = await request.get('https://dummyjson.com/products')

  //console.log(resp);
  const respjson = await resp.json();
  console.log(respjson);

})