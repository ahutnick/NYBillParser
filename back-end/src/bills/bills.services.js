const axios = require("axios");

async function list() {
    const year = new Date().getFullYear();
    const url = `https://legislation.nysenate.gov/api/3/bills/${year}/search?term=adopted:false&view=info&key=${process.env.API_KEY}`;
    const response = await axios.get(url, {timeout: 15000});
    return response.data.result.items.map(item => item.result);
}

module.exports = {
    list,
}
