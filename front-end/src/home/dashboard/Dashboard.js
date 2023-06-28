import React, { useEffect, useState } from "react";
import { listBills } from "../../utils/api";
import ErrorAlert from "../../utils/ErrorAlert";

function Dashboard() {
    const [bills, setBills] = useState([]);
    const [billsErrors, setBillsErrors] = useState([]);

    useEffect(loadBills, []);

    function loadBills() {
        const abortController = new AbortController();
        setBillsErrors(null);
        listBills(abortController.signal)
            .then(setBills)
            .catch(setBillsErrors);
        console.log(bills);
        return () => abortController.abort();
    }

    return (<div>
            <h1>Hello</h1>
            <ErrorAlert error={billsErrors}/>
        </div>);

}

export default Dashboard;
