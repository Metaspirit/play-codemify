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
    
    const newBookingData = {
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
    console.log(bookingId);//prints the booking id in the console  















});
