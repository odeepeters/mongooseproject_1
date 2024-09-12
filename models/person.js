// models/Person.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Define the Person schema

const personSchema = new Schema({
  name: { type: String, required: true },
  age: {type: Number},
  favoriteFoods: {type: [String], // Array of strings
    default: []
  }
});

// Create the Person model

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

