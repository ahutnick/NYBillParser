import React, { useEffect, useState } from "react";
import { listBills } from "../../utils/api";
import ErrorAlert from "../../utils/ErrorAlert";
import BillAccordion from "./bills/BillAccordion";

function Dashboard() {
    const [bills, setBills] = useState([]);
    const [billsErrors, setBillsErrors] = useState([]);

    useEffect(() => {
        let ignore = false;
        
        async function loadBills() {
            const abortController = new AbortController();
            setBillsErrors(null);
            try {
            const bills = await listBills(abortController.signal)
            if (!ignore) {
                setBills(bills)
            }
        } catch (error) {
            setBillsErrors(error);
        }
            return () => {
                abortController.abort()
                ignore = true;
            };
        }

        loadBills();
    }, []);

    

    return (
        <div className="mt-5 mb-5 h-100">
            <BillAccordion bills={bills}/>
            <ErrorAlert error={billsErrors}/>
        </div>);

}

export default Dashboard;
