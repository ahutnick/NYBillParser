import got from "got";
import asyncErrorBoundary from "../errors/asyncErrorBoundary";

async function list() {
    const year = new Date().getFullYear();
    const url = `https://legislation.nysenate.gov/api/3/bills/${year}?key=${process.env.API_KEY}`
    const options = {timeout: { request: 10000 } };
    const response = await got.get(url, options).json();
    return response.result.items;
}

export default {
    list: asyncErrorBoundary(list),
}
