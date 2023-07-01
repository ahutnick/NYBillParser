const path = require("path")

const cors = require("cors");

const express = require("express");

const dotenv = require("dotenv");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const billsRouter = require("./bills/bills.router");

const corsOptions = {
    origins: ["http://localhost:3000", "https://ny-bill-parser-2546a1cdfe0e.herokuapp.com/https://ny-bill-parser-2546a1cdfe0e.herokuapp.com"],
    optionsSuccessStatus: 200
}

dotenv.config();

const app = express();

app.use(cors(corsOptions));

app.use("/bills", billsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
