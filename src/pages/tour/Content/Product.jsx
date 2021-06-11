import React from 'react'

const Product = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="deal-time col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>สินค้าท่องเที่ยวเฉพาะคุณ</strong>
                    <p>ดูเพิ่มเติม</p>
                </div>

                <div 
                    className="py-3 col-12 slider" 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div className="slide card-deal">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                        </div>
                        <div className="content-deal">
                            <strong>
                                เสื้อแจ็คเก็ตบอมเบอร์ ผู้ชาย MA-1
                            </strong>
                        </div>
                        <div className="price-deal">
                            <span>420</span>
                            <p>฿300</p>
                        </div>
                    </div>

                    <div className="slide card-deal">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                        </div>
                        <div className="content-deal">
                            <strong>
                                Outdoor Camping เก้าอี้ไม้ เก้าอี้พับ
                            </strong>
                        </div>
                        <br/>
                        <div className="price-deal">
                            <p style={{color:"#30bf00"}} >฿1,708</p>
                        </div>
                    </div>
                    
                    <div className="slide card-deal">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                        </div>
                        <div className="content-deal">
                            <strong>
                                เสื้อแจ็คเก็ตบอมเบอร์ ผู้ชาย MA-1
                            </strong>
                        </div>
                        <div className="price-deal">
                            <span>420</span>
                            <p>฿300</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 py-3">
                    <div 
                        className="col-12 py-4 d-flex justify-content-center align-items-center" 
                        style={{
                            background:"#a9a6a6",
                            borderRadius:"5px"
                        }}
                    >
                        โฆษณา 640 x 90
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
