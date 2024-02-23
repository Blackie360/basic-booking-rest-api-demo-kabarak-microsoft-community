# Hotel Booking API

![Postman Logo](https://i.pinimg.com/564x/64/99/93/6499935405de4ebc998a10c121dabff5.jpg)
![REST API Logo](https://i.pinimg.com/564x/f9/09/a2/f909a22a918b08ff4f293c9ca56a6eea.jpg)

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


## Running the App

To run the app locally, you need to follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the server by running `node index.js`.
5. The server will start running on port 3000 by default. You can access the API endpoints by sending requests to `http://localhost:3000`.



   ## Contributing

To contribute to this repository, you can follow these steps:

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes: `git checkout -b my-feature`.
4. Make your changes and commit them: `git commit -am 'Add my feature'`.
5. Push to the branch: `git push origin my-feature`.
6. Submit a pull request.

Thank you for contributing!

