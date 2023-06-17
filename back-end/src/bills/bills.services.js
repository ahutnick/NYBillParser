import got from "got";

async function list() {
    const year = new Date().getFullYear();
    const url = `https://legislation.nysenate.gov/api/3/bills/${year}?key=${process.env.API_KEY}`
    const options = {timeout: { request: 15000 } };
    const response = await got(url, options).json();
    return response.result.items;
}

export default {
    list,
}
