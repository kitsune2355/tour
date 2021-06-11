import React from 'react'

const Evoucher = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="deal-time col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>E-Voucher</strong>
                    <p>ดูเพิ่มเติม</p>
                </div>

                <div 
                    className="py-3 col-12 slider" 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div className="slide card-d">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                        </div>
                        <div className="content-d">
                            <p>
                                ดีลบิวตี้ Thai massage and tension release (Thai massage + Foot mass...
                            </p>
                        </div>
                        <div className="price-d">
                            <span>ปกติ 3,000</span>
                            <p>1,230.00 บาท</p>
                        </div>
                    </div>
                    
                    <div className="slide card-d">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                        </div>
                        <div className="content-d">
                            <p>
                               ลยานะ รีสอร์ท แอนด์ สปา บูธ P07
                               <br/><br/>
                            </p>
                        </div>
                        <div className="price-d">
                            <span>ปกติ 4,000</span>
                            <p>3,000.00 บาท</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evoucher
