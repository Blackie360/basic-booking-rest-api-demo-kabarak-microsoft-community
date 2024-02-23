const Joi = require('joi');

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

const bookings = [
  { id: 1, name: 'John Doe', roomNumber: 101, checkInDate: '2024-02-24', checkOutDate: '2024-02-26' },
  { id: 2, name: 'Jane Smith', roomNumber: 202, checkInDate: '2024-03-01', checkOutDate: '2024-03-05' },
  { id: 3, name: 'Alice Johnson', roomNumber: 303, checkInDate: '2024-03-10', checkOutDate: '2024-03-15' },
];

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/api/bookings', (req, res) => {
  res.send(bookings);
});

app.get('/api/bookings/:id', (req, res) => {
  const booking = bookings.find((b) => b.id === parseInt(req.params.id));
  if (!booking) res.status(404).send('The booking with the given ID was not found');
  res.send(booking);
});

function validateBooking(booking) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    roomNumber: Joi.number().integer().required(),
    checkInDate: Joi.date().iso().required(),
    checkOutDate: Joi.date().iso().required(),
  });

  return schema.validate(booking);
}

app.post('/api/bookings', (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) {
    // 400 Bad Request
    res.status(400).send(error.details[0].message);
    return;
  }

  const booking = {
    id: bookings.length + 1,
    name: req.body.name,
    roomNumber: req.body.roomNumber,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
  };
  bookings.push(booking);
  res.send(booking);
});


//put handler
app.put('/api/bookings/:id', (req, res) => {
  // Find the booking
  const booking = bookings.find((b) => b.id === parseInt(req.params.id));
  if (!booking) {
    // If booking not found, return 404
    res.status(404).send('The booking with the given ID was not found');
    return;
  }

  // Validate the request body
  const { error } = validateBooking(req.body);
  if (error) {
    // If validation fails, return 400 with error message
    res.status(400).send(error.details[0].message);
    return;
  }

  // Update the booking
  booking.name = req.body.name;
  booking.roomNumber = req.body.roomNumber;
  booking.checkInDate = req.body.checkInDate;
  booking.checkOutDate = req.body.checkOutDate;
  res.send(booking);
});

// DELETE handler
app.delete('/api/bookings/:id', (req, res) => {
  // Find the index of the booking with the given ID
  const index = bookings.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) {
    // If booking not found, return 404
    res.status(404).send('The booking with the given ID was not found');
    return;
  }

  // Remove the booking from the array
  bookings.splice(index, 1);

  // Return the deleted booking
  res.send(bookings);
});

// Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port  ${port}...`));
