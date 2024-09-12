const mongoose = require('mongoose');
const Person = require('./models/person'); // Adjust the path as needed
const connectDB = require('./config/db');

// Function to create multiple people
const createManyPeople = async () => {
  try {
    await connectDB(); // Ensure DB is connected

    // Define an array of people to be created
    const people = [
      { name: 'Jane Doe', age: 25, favoriteFoods: ['Sushi', 'Burgers'] },
      { name: 'Alice Smith', age: 28, favoriteFoods: ['Salad', 'Soup'] }
    ];

    // Create multiple people and wait for the result
    const createdPeople = await Person.create(people);

    // Log the result
    console.log('People created successfully:', createdPeople);
  } catch (error) {
    console.error('Error creating people:', error);
  }
};

// Call the function
createManyPeople();
