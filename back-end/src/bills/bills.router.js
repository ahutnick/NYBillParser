import express from "express";
import controller from "./bills.controller";

const router = express.Router();

router.route("/")
    .get(controller.list);

export default router;
