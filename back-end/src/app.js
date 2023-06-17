const path = require("path");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const express = require("express");

const app = express();

app.use(notFound);
app.use(errorHandler);

module.exports = app;
