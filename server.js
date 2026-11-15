//import express
const express = require('express');

//create an express application
const app = express();

app.get('/', (req, res) =>{
    res.send({Message: 'Hello API'})
})

//start the server
app.listen(3001, 'localhost', () =>{
  console.log('server is running in localhost:3000');
})