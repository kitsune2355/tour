import React from 'react'
import { IoLocationSharp, IoStar } from "react-icons/io5";

const Accommodation = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="deal-time col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>ที่พักแนะนำ</strong>
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
                            <span>
                                <IoStar style={{color:"#ffd900"}}/>
                                4.5
                            </span>
                        </div>
                        <div className="content-d">
                            <strong>
                                LargeTownHome 3Br, Only 450m-Skytrain UDomsuk
                            </strong>
                            <div style={{color:"#41dcff" ,display:"flex", alignItems:"center"}}>
                                <IoLocationSharp/>กรุงเทพมหานคร,สุขุมวิท
                            </div>
                        </div>
                        <div className="price-d">
                            <>ราคารวม (ต่อคืน)</>
                            <p style={{color:"#30bf00"}}>2,650 บาท</p>
                        </div>
                    </div>

                    <div className="slide card-d">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                            <span >
                                <IoStar style={{color:"#ffd900"}}/>
                                4.0
                            </span>
                        </div>
                        <div className="content-d">
                            <strong>
                                Family Studio at Twin Oaks 
                                <br/><br/>
                            </strong>
                            <div style={{color:"#41dcff" ,display:"flex", alignItems:"center"}}>
                                <IoLocationSharp/>กรุงเทพมหานคร,สุขุมวิท
                            </div>
                        </div>
                        <div className="price-d">
                            <>ราคารวม (ต่อคืน)</>
                            <p style={{color:"#30bf00"}}>3,050 บาท</p>
                        </div>
                    </div>

                    <div className="slide card-d">
                        <div className="deal-card">
                            <img src="https://i.stack.imgur.com/y9DpT.jpg"/>
                            <span>
                                <IoStar style={{color:"#ffd900"}}/>
                                4.5
                            </span>
                        </div>
                        <div className="content-d">
                            <strong>
                                LargeTownHome 3Br, Only 450m-Skytrain UDomsuk
                            </strong>
                            <div style={{color:"#41dcff" ,display:"flex", alignItems:"center"}}>
                                <IoLocationSharp/>กรุงเทพมหานคร,สุขุมวิท
                            </div>
                        </div>
                        <div className="price-d">
                            <>ราคารวม (ต่อคืน)</>
                            <p style={{color:"#30bf00"}}>2,650 บาท</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Accommodation
