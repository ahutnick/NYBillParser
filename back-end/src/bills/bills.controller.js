const services = require("./bills.services");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
    const data = await services.list();
    res.json({data});
}

module.exports = {
    list: asyncErrorBoundary(list),
}
