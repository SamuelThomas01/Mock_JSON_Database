/*import express from 'express';
const app = express();
require('dotenv').config();
import { connect } from 'require';
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

connect(uri).then(
    async() =>{
        console.log('COnnected to MongoDB.')

        
    

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});
}
).catch((err) =>{ console.log(`Error: ${error}`)});
*/

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));