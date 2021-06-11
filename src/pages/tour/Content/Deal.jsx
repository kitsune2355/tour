import React from 'react'

const Deal = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="deal-time col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>ดีลประจำวัน</strong>
                    <p>หมดเวลาใน <span>18</span> <span>29</span> <span>21</span> นาที</p>
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
                                ไปเที่ยวชิลๆ กับอาหารภาคอีสาน สุดคุ้ม มา 3 จ่าย 2
                            </p>
                        </div>
                        <br/>
                        <div className="price-d">
                            <p style={{color:"#cec8c8"}} >฿1,350.00</p>
                        </div>
                    </div>
                    
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
                </div>
            </div>
        </div>
    )
}

export default Deal
