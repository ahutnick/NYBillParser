const path = require("path");

require('dotenv').config();

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const express = require("express");

const app = express();

app.use(notFound);
app.use(errorHandler);

module.exports = app;
