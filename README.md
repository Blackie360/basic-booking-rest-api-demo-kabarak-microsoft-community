# Hotel Booking API

![Postman Logo](https://www.postman.com/assets/logos/pm-orange-logo-c9c75cf46f8b3b74b40f15fc3e37541b1d5004c48ed8e8e7fc7efbccb785f072.svg) ![REST API Logo](https://www.seekpng.com/png/full/323-3239561_restful-api.png)

This is a simple RESTful API for hotel booking created using Node.js, Express, and Joi for input validation.

## Demo

To use the API, you can follow these steps:

1. **GET all bookings:**  
   Send a GET request to `/api/bookings` to retrieve all bookings.

2. **POST a new booking:**  
   Send a POST request to `/api/bookings` with the following JSON body:
   ```json
   {
     "name": "John Doe",
     "checkIn": "2024-03-01",
     "checkOut": "2024-03-05",
     "roomType": "suite"
   }
