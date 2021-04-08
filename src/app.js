// app.js


const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');

const app = express();

app.use(express.static(publicPath));


app.listen(3000);