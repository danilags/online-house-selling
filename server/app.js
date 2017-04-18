const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');

mongoose.connect('mongodb://localhost/stackoverflow');
const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/house', index)

app.listen(3000, function() {
  console.log("Server Jalan !");
})
