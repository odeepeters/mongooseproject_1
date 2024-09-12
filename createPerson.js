const mongoose = require('mongoose');
const Person = require('./models/person'); // Adjust the path as needed
const connectDB = require('./config/db');

// Function to create and save a person
const createPerson = async () => {
  try {
    await connectDB(); // Ensure DB is connected

    // Create a new person instance
    const person = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Pasta']
    });

    // Save the person and wait for the result
    const savedPerson = await person.save();

    // Log the result
    console.log('Person saved successfully:', savedPerson);
  } catch (error) {
    console.error('Error creating person:', error);
  }
};

// Call the function
createPerson();
