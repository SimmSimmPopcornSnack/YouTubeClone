import express from "express"
// const express = require("express");

const users = [{ id: 0, name: "admin" }];

const server = express();
import childRoute from './tempchildES.js'
// server.use('/userchild', require('./tempchild.js'))
server.use('/userchild', childRoute)
server.listen(9999, () =>
  console.log("API running on http://localhost:9999")
);

