import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp, IoNewspaperOutline, IoPersonOutline, IoSearchSharp, IoVolumeMediumOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row nav-bar">
                <div className="col-12"
                style={{
                    display: "flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    padding: "0",
                }}>
                <div className="col-2 px-0">
                <li>
                    <Link to="/">
                        <button className="nav-btn">
                            <div><IoHomeSharp/></div>
                        </button>
                        <span>หน้าแรก</span>
                    </Link>
                </li>
            </div>
            <div className="col-2 px-0">
                <li>
                    <Link to="/">
                        <button className="nav-btn">
                            <div><IoSearchSharp/></div>
                        </button>
                        <span>ค้นหา</span>
                    </Link>
                </li>
            </div>
            <div className="col-2 px-0">
                <li>
                    <Link to="/">
                        <button className="nav-btn">
                            <div><IoNewspaperOutline/></div>
                        </button>
                        <span>การจองของฉัน</span>
                    </Link>
                </li>
            </div>
            <div className="col-2 px-0">
                <li>
                    <Link to="/">
                        <button className="nav-btn">
                            <div><IoVolumeMediumOutline/></div>
                        </button>
                        <span>การแจ้งเตือน</span>
                    </Link>
                </li>
            </div>
            <div className="col-2 px-0">
                <li>
                    <Link to="/">
                        <button className="nav-btn">
                            <div><IoPersonOutline/></div>
                        </button>
                        <span>บัญชีของฉัน</span>
                    </Link>
                </li> 
            </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
