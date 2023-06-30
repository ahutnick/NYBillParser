import React from "react";
import Bill from "./Bill";

function BillAccordion({bills}) {
    return (
        <div className="accordion">
            { bills.length ? bills.map((bill, index) => <Bill bill={bill} index={index} />) : null }
        </div>
    )
}

export default BillAccordion;
