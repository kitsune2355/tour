import React from 'react'
import Header from './header'

const PolicyInvestmentCancelDetail = () => {
    return (
        <div>
            <Header
              titlehead = "ปรับนโยบายและสัดส่วนการลงทุนเงินนำส่งใหม่"
            />
            

            <div className="container-fluid">
                <div className="row mx-3">
                    <div 
                        className="col-12 d-flex justify-content-center my-5" 
                        style={{fontSize:"24px" ,color:"#2d2975"}}
                    >
                        <strong>ยกเลิกทำรายการสำเร็จ</strong>
                    </div>

                    <div className="col-12 d-flex justify-content-center pb-3" >
                        <img src="/uob/ยกเลิก.png" />
                    </div>

                    <div 
                        className="col-12 d-flex justify-content-center pb-3" 
                        style={{fontSize:"18px" ,color:"#2d2975" ,textAlign:"center"}}
                    >
                        <strong>
                            ระบบได้ทำการยกเลิกรายการ 
                            ปรับนโยบายและสัดส่วนการลงทุนทั้งหมด
                            แบบเลือกแผนการลงทุนเรียบร้อยแล้ว
                        </strong>
                    </div>
                    <div 
                        className="col-12 d-flex justify-content-center" 
                        style={{fontSize:"18px" ,color:"#6f6f6f" ,textAlign:"center"}}
                    >
                        <strong>
                            โปรดรอการยืนยันผลการทำรายการของท่านตามช่องทาง
                            รับข้อมูลข่าวสารที่ท่านลงทะเบียนไว้
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolicyInvestmentCancelDetail
