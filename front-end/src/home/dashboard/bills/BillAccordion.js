import React from "react";
import Bill from "./Bill";

function BillAccordion({bills}) {
    return (
        <div className="accordion mb-5" id="billAccordion">
            {bills.length ? bills.map((bill, index) => <Bill bill={bill} index={index} key={bill.printNo} />) : null }
        </div>
    )
}

export default BillAccordion;
