import React from "react";

function Bill({bill, index}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`accordion-button${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                    {bill.printNo} | 
                    <a className="ml-2" href={`https://legislation.nysenate.gov/pdf/bills/${bill.year}/${bill.printNo}`}>PDF</a>
                </button>
            </h2>
            <div id={`collapse${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} data-bs-parent="#billAccordion">
                <div className="accordion-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                        </li>
                        <li className="list-group-item">
                            {bill.summary}
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Bill;
