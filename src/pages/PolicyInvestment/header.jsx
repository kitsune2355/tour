import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Header = (props) => {

    const {titlehead} = props;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex align-items-center head" style={style.headerBar}>
                    <IoIosArrowBack style={style.headerIcon} />
                    <div className="col-11" style={{textAlign:"center"}}>
                        {titlehead}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

const style = {
    headerBar:{
        textAlign:"center",
        color: "#ddd",
        background: "#1e1c47",
        fontWeight: "bold",
        height: "40px",
        letterSpacing: "1px",
    },
    headerIcon: {
        marginRight: "10px"
    },
};