const got = require("got");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list() {
    const year = new Date().getFullYear();
    const url = `https://legislation.nysenate.gov/api/3/bills/${year}?key=${process.env.API_KEY}`
    const options = {timeout: { request: 10000 } };
    const data = await got.get(url, options).json();
    return data.result.items;
}

module.exports = {
    list: asyncErrorBoundary(list),
}
