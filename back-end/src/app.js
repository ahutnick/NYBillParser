import path from "path"

import express from "express";

import dotenv from "dotenv";

import errorHandler from "./errors/errorHandler";
import notFound from "./errors/notFound";

import billsRouter from "./bills/bills.router";

dotenv.config();

const app = express();

app.use("/bills", billsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
