import React from "react";

function Bill({bill, index}) {
    function shortenTitle(title) {
        const words = title.split(" ").slice(0, 10)
        return words.join(" ") + "...";
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`accordion-button${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                    <div className="row w-100">
                    <div className="d-flex justify-content-between">
                        <div className="col-3">{bill.billType.resolution ? "Resolution " : "Bill "}{bill.printNo}</div>
                        <div className="col-7">{shortenTitle(bill.title)}</div>
                        <div className="col-2">
                            <a href={`https://legislation.nysenate.gov/pdf/bills/${bill.year}/${bill.printNo}`}>PDF</a>
                        </div>
                    </div>
                    </div>
                </button>
            </h2>
            <div id={`collapse${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} data-bs-parent="#billAccordion">
                <div className="accordion-body">
                    {bill.summary ? bill.summary : bill.title}
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            Sponsor: {bill.sponsor.member.fullName}, District {bill.sponsor.member.districtCode}
                        </li>
                        <li className="list-group-item">
                            Status: {bill.status.statusDesc} {bill.status.committeeName ? `(${bill.status.committeeName})` : ""}
                        </li>
                        <li className="list-group-item">
                            Last Action: {bill.status.actionDate}
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Bill;
