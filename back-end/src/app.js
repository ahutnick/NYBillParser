const path = require("path")

const express = require("express");

const dotenv = require("dotenv");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const billsRouter = require("./bills/bills.router");

dotenv.config();

const app = express();

app.use("/bills", billsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
