import services from "./bills.services";
import asyncErrorBoundary from "../errors/asyncErrorBoundary"

async function list(req, res) {
    const data = await services.list();
    res.json({data});
}

export default {
    list: asyncErrorBoundary(list),
}
