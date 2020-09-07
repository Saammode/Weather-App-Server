const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const get_weather = require('./controllers/get_weather');
const getCityName = require('./controllers/getCityName');
const getName = require('./controllers/getName');
const tides = require('./controllers/tides');

const app = express();

app.use(bodyParser.json());


app.post("/get_weather",(req, res) => {get_weather.handleWeather(req,res,fetch)});

app.post("/getCityName",(req, res) => {getCityName.handleCityName(req,res,fetch)})

app.post("/getName",(req, res) => {getName.handleGetName(req,res,fetch)});

app.post("/tides",(req, res) => {tides.handleTides(req,res,fetch)});

app.listen(3000, ()=> {
    console.log(`app is running at 3000`)
})