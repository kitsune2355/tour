import React, {useState} from 'react'
import Header from './header'
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDown, IoIosArrowUp,} from "react-icons/io";

const HistoryInformation = () => {

    const [open, setOpen] = useState(false); 
    const [toggle, setToggle] =  useState(false);

    const handleToggleIcon = () => setToggle (!toggle);

    return (
        <div>
            <Header
              titlehead = "ข่าวสารกองทุน"
            />

            {/* content */}
            <div className="container-fluid">
                <div className="row pt-4 ">
                    <div 
                        className="col-12 d-flex justify-content-between"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <strong>สาระสำคัญของกองทุน (รายเดือน) </strong>
                        <div className="toggle-btn" onClick={handleToggleIcon}>
                            { toggle ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                        </div>
                    </div>

                    <Collapse in={open} style={{padding: "0",}}>
                        <div id="example-collapse-text" className="col-12">
                            <div 
                                className="d-flex align-items-center justify-content-between"
                                style={{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px"}}
                            >
                                <div className="col-11 px-0">
                                    <img src="/uob/doc-02-02.png"/>
                                    <span style={{paddingLeft:"15px"}}>
                                        <b>M02FI</b> - นโยบาย ยูโอบี เพิ่มพูนทรัพย์ (ตารสารหนี้)
                                    </span>
                                </div>

                                <div className="col-1">
                                    <img src="/uob/selet.png" alt="" />
                                </div>
                            </div>

                            <div 
                                className="d-flex align-items-center justify-content-between"
                                style={{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px"}}
                            >
                                <div className="col-11 px-0">
                                    <img src="/uob/doc-02-02.png"/>
                                    <span style={{paddingLeft:"15px"}}>
                                        <b>M06EQ</b> - นโยบาย ยูโอบี อิควิตี้ (หุ้นไทย)
                                    </span>
                                </div>

                                <div className="col-1">
                                    <img src="/uob/selet.png" alt="" />
                                </div>
                            </div>

                            <div 
                                className="d-flex align-items-center justify-content-between"
                                style={{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px"}}
                            >
                                <div className="col-11 px-0">
                                    <img src="/uob/doc-02-02.png"/>
                                    <span style={{paddingLeft:"15px"}}>
                                        <b>M10UIF</b> - นโยบาย ยูไนเต็ด อินคัมโฟกัสฟินด์
                                    </span>
                                </div>

                                <div className="col-1">
                                    <img src="/uob/selet.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div className="row pt-4">
                    <div 
                        className="col-12 d-flex justify-content-between"
                        // onClick={() => setOpen(!open)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={open}
                    >
                        <strong>สรุปข้อมูลสำคัญของนโยบายการลงทุน (ราย 6 เดือน) </strong>
                        <IoIosArrowDown/>
                    </div>
                </div>

                <div className="row pt-4">
                    <div 
                        className="col-12 d-flex justify-content-between"
                        // onClick={() => setOpen(!open)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={open}
                    >
                        <strong>รายงานผู้จัดการกองทุน</strong>
                        <IoIosArrowDown/>
                    </div>
                </div>

                <div className="row pt-4">
                    <div 
                        className="col-12 d-flex justify-content-between"
                        // onClick={() => setOpen(!open)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={open}
                    >
                        <strong>ตารางอัตราผลตอบแทนตามแผนการลงทุน </strong>
                        <IoIosArrowDown/>
                    </div>
                </div>

                <div className="row pt-4">
                    <div 
                        className="col-12 d-flex justify-content-between"
                        // onClick={() => setOpen(!open)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={open}
                    >
                        <strong>การดำเนินการคัดแยกตราสารของหุ้นกู้ บมจ. การบินไทย </strong>
                        <IoIosArrowDown/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HistoryInformation
