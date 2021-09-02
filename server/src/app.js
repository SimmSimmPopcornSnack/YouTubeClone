// const express = require('express');
import express from "express";
var app = express();

// var videoRoute = require('./routes/video.js');
import videoRoute from './routes/video.js';
import userRoute from './routes/user.js';

app.use('/api/v1/video', videoRoute);
app.use('/api/v1/user', userRoute);
const port = 3001;
app.listen(port, () => {
    console.log('listening to port:' + port);
});
