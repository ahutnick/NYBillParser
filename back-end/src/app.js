const path = require("path")

const cors = require("cors");

const express = require("express");

const dotenv = require("dotenv");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const billsRouter = require("./bills/bills.router");

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

dotenv.config();

const app = express();

app.use(cors(corsOptions));

app.use("/bills", billsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
