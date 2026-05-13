import {test, expect} from '@playwright/test';

test ('Test Put Example', async function ({request}) 
{
    const autodata = { //generated token for authentication using the payload data below
    "username" : "admin",
    "password" : "password123"
    }
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers: {"Content-Type": "application/json"}, data: autodata});
    const jsonresponse = await response.json();//parsing the response to json format
    const authtoken = jsonresponse.token;
    console.log(authtoken);//prints the token in the console
    
    const newBookingData = {//data for creating a new booking with the payload below
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }

    const newBookingResponse = await request.post('https://restful-booker.herokuapp.com/booking', {headers: {"Content-Type": "application/json"}, data: newBookingData});
    const newBookingJsonResponse = await newBookingResponse.json();
    const bookingId = newBookingJsonResponse.bookingid;
    console.log(newBookingJsonResponse); //prints the response of the new booking creation in the console
    console.log("New Booking ID IS " +bookingId);//prints the booking id in the console
    
     const newUpdatedBookingData = {//data for updating the booking with new values
    "firstname" : "Uwem",
    "lastname" : "Frank",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2022-01-01",
        "checkout" : "2023-01-01"
    },
    "additionalneeds" : "Dinner"
    }

   const updatedresponse = await request.put("https://restful-booker.herokuapp.com/" +bookingId, {headers: {"Content-Type": "application/json", "Cookie": "token=" + authtoken}, data: newUpdatedBookingData});//updates the booking with the new data using the booking id and token for authentication
   const updatedresponsejson = await updatedresponse.json; //parsing the updated response to json format

   console.log(updatedresponsejson); // prints the updated response in the console    


 


});
