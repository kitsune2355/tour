import React from 'react'
import { IoBagHandleSharp, IoBusinessSharp, IoCartOutline, IoChevronForwardOutline, IoPersonCircleSharp, IoSearchOutline, IoWalletSharp } from "react-icons/io5";
import "./styles.css";

const Header = () => {
    return (
        <div className="container-fluid bg">
            <div className="row py-4">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="col-8 px-0 d-flex">
                        <IoPersonCircleSharp style={{fontSize:"50px",color:"white"}} />
                        <div className="col-8 d-flex" style={{flexDirection:"column"}}>
                            <div style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>
                                สวัสดี คุณธณัฏฐ์
                            </div>
                            <div style={{fontWeight:"bold",color:"white"}}>
                                Go Point : 2,500 
                                <IoChevronForwardOutline style={{fontSize:"12px",marginBottom:"3px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div 
                        style={{
                                fontSize:"30px", 
                                marginLeft:"70%",
                                color:"white",
                                borderRadius:"50%",
                                background: "#ffffff7e",
                                width: "45px",
                                boxShadow:"rgba(0,0,0,0.9)"
                            }}>
                            <IoCartOutline style={{fontSize:"25px", marginLeft:"20%",color:"white"}} />
                        </div>
                        <div className="notify">2</div>
                    </div>
                </div>

                <div className="col-12 py-3 ">
                    <form className="d-flex justify-content-between align-items-center">
                        {/* <IoSearchOutline style={{fontSize:"20px"}} /> */}
                        <input className="form-control" type="search" placeholder="คุณกำลังค้นหา..." aria-label="Search"/>
                    </form>
                </div>

                <div 
                    className="col-12 slide-img size-img" 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "8px",
                    }}
                >
                    <img src="https://i.stack.imgur.com/y9DpT.jpg" />
                    <img src="https://i.stack.imgur.com/y9DpT.jpg" />
                    <img src="https://i.stack.imgur.com/y9DpT.jpg" />
                </div>

                <div className="col-12 pt-3 px-0 d-flex justify-content-around align-items-center">
                    <div className="col-3 card d-flex align-items-center">
                        <IoBusinessSharp/>
                        <span>โรงแรม+ที่พัก</span>
                    </div>
                    <div className="col-3 card d-flex align-items-center">
                        <IoWalletSharp/>
                        <span>E-Voucher</span>
                    </div>
                    <div className="col-3 card d-flex align-items-center">
                        <IoBagHandleSharp/>
                        <span>สินค้าท่องเที่ยว</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header