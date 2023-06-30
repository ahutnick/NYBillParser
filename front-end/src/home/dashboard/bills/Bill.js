import React from "react";

function Bill({bill, index}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`accordion-button ${index === 0 ? null : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                    {bill.printNo}
                </button>
            </h2>
            <div id={`collapse${index}`} className={`accordion-collapse ${index === 0 ? "collapse show" : "collapse"}`} data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href={`https://legislation.nysenate.gov/pdf/bills/${bill.year}/${bill.printNo}`}>PDF Link</a>
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
