// app.js


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const publicPath = path.resolve(__dirname, 'public');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(publicPath));


app.listen(3000);