import axios from "axios";

const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

export async function listBills(signal) {
    const url = new URL(`${API_BASE_URL}/bills`);
    const bills = await axios.get(url, {signal, timeout: 15000})
    return bills;
}

