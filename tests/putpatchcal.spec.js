// import {test, expect} from '@playwright/test';

// test ('Test Put Example', async function ({request}) 
// {
//     const autodata = { //generated token for authentication using the payload data below
//     "username" : "admin",
//     "password" : "password123"
//     }
//     const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers: {"Content-Type": "application/json"}, data: autodata});
//     const jsonresponse = await response.json();//parsing the response to json format
//     const authtoken = jsonresponse.token;
//     console.log(jsonresponse);
//     console.log(authtoken);//prints the token in the console
    
//     const newBookingData = {//data for creating a new booking with the payload below
//     "firstname" : "Jim",
//     "lastname" : "Brown",
//     "totalprice" : 111,
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2018-01-01",
//         "checkout" : "2019-01-01"
//     },
//     "additionalneeds" : "Breakfast"
//     }

//     const newBookingResponse = await request.post('https://restful-booker.herokuapp.com/booking', {headers: {"Content-Type": "application/json"}, data: newBookingData});
//     const newBookingJsonResponse = await newBookingResponse.json();
//     const bookingId = newBookingJsonResponse.bookingid;
//     console.log(newBookingJsonResponse); //prints the response of the new booking creation in the console
//     console.log("New Booking ID IS " +bookingId);//prints the booking id in the console
    
//      const newUpdatedBookingData = {//data for updating the booking with new values
//     "firstname" : "Uwem",
//     "lastname" : "Frank",
//     "totalprice" : 111,
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2022-01-01",
//         "checkout" : "2023-01-01"
//     },
//     "additionalneeds" : "Dinner"
//     }

//    const updatedresponse = await request.put("https://restful-booker.herokuapp.com/booking" +bookingId, {headers: {"Content-Type": "application/json", "Cookie": "token=" + authtoken}, data: newUpdatedBookingData});//updates the booking with the new data using the booking id and token for authentication
//    const updatedresponsejson = await updatedresponse.json(); //parsing the updated response to json format

//    console.log(updatedresponsejson); // prints the updated response in the console


//    const newFirstName = "Frankolo";
   
   
//    const patchResponse = await request.patch("https://restful-booker.herokuapp.com/booking" +bookingId, {headers: {"Content-Type": "application/json", "Cookie": "token=" + authtoken}, data: {"firstname": newFirstName}});//updates only the firstname of the booking using patch method
//    const patchResponseJson = await patchResponse.json(); //parsing the patch response to json format
//    console.log(patchResponse); //prints the patch response in the console
//    console.log(newFirstName); //prints the new firstname in the console
//    expect(patchResponseJson.firstname).toBe(newFirstName); //assertion to verify that the firstname has been updated successfully


 


// });


import { test, expect } from '@playwright/test';

test('Test Put Example', async ({ request }) => {//test function to test the PUT and PATCH methods for updating a booking

  // Step 1: Authenticate and get token
  const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
    headers: { "Content-Type": "application/json" },
    data: {
      "username": "admin",
      "password": "password123"
    }
  });
  const { token } = await authResponse.json();// const authtoken = jsonresponse.token;
  console.log("Auth Token:", token);

  // Step 2: Create a new booking
  const newBookingResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: { "Content-Type": "application/json" },
    data: {
      "firstname": "Jim",
      "lastname": "Brown",
      "totalprice": 111,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
      },
      "additionalneeds": "Breakfast"
    }
  });
  const newBookingJson = await newBookingResponse.json();
  const bookingId = newBookingJson.bookingid; //const bookingId = newBookingJsonResponse.bookingid;
  console.log("New Booking:", newBookingJson);
  console.log("New Booking ID:", bookingId);

  // Step 3: PUT - fully update the booking
  const putResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
    data: {
      "firstname": "Uwem",
      "lastname": "Frank",
      "totalprice": 111,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2022-01-01",
        "checkout": "2023-01-01"
      },
      "additionalneeds": "Dinner"
    }
  });
  const putJson = await putResponse.json();
  console.log("PUT Response:", putJson);

  // Step 4: PATCH - partially update only the firstname
  const newFirstName = "Frankolo";
  const patchResponse = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
    data: { "firstname": newFirstName }
  });
  const patchJson = await patchResponse.json();
  console.log("PATCH Response:", patchJson);

  // Assertion: verify firstname was updated
  expect(patchJson.firstname).toBe(newFirstName);

});