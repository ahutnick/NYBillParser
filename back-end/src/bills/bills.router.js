const router = require("express").Router();
const controller = require("./bills.controller");

router.route("/")
    .get(controller.list);

module.exports = router;
