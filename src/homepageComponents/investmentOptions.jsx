


function InvestmentOption() {
    return (
        <div className="investment-option">
            <div className="option-header">
                <p>Our investment options</p>
                <h1>Premium Investment Plans</h1>
            </div>
            <div className="main-option">

                <div className="option-box">
                    <div className="option-medal">
                        <div className="medal-img"></div>
                        <h2>Basic</h2>
                    </div>
                    <p>Investment of 1,000,000 yields a return of 25% ( N1,250,000)</p>
                </div>

                <div className="option-box">
                    <div className="option-medal">
                        <div className="medal-img img2"></div>
                        <h2>Silver</h2>
                    </div>
                    <p>Investment of 2,000,000 yields a return of 25% (N2,500,000)</p>
                </div>
                
                <div className="option-box">
                    <div className="option-medal">
                        <div className="medal-img"></div>
                        <h2>Gold</h2>
                    </div>
                    <p>Investment of 3,000,000 yields a return of 25% (N3,750,000)</p>
                </div>

                <div className="option-box">
                    <div className="option-medal">
                        <div className="medal-img"></div>
                        <h2>Basic</h2>
                    </div>
                    <p>Investment of 10,000,000 yields a return of 30% (N 13,000,000)
</p>
                </div>
            </div>
        </div>
    )
}

export default InvestmentOption;