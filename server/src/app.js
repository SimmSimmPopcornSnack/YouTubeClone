// const express = require('express');
import express from "express";
var app = express();

// var videoRoute = require('./routes/video.js');
import videoRoute from './routes/video.js';

app.use('/api/v1/video', videoRoute);
const port = 3001;
app.listen(port, () => {
    console.log('listening to port:' + port);
});
