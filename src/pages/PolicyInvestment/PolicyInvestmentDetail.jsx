import React from 'react'
import Header from './header'

const PolicyInvestmentDetail = () => {

    return (
        <div>
            <Header
              titlehead = "ปรับนโยบายและสัดส่วนการลงทุนเงินนำส่งใหม่"
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={styles.subTitle}>
                        <strong style={{color:"#75b1ee"}}>การแจ้งความจำนงเปลี่ยนนโยบายการลงทุนสำเร็จ</strong>
                        <p style={{color:"#2d2975"}}>วันคำนวณจำนวนหน่วย : 22 ตุลาคม 2563</p>
                    </div>
                </div>

                <div className="col-12" style={styles.card}>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#bfbfbf"}} >หมายเลขรายการ</strong>
                        <strong>R200006111</strong>
                    </div>

                    <div className="d-flex justify-content-between pb-5" style={{borderBottom:"1px solid #ebebeb"}}>
                        <strong style={{color:"#bfbfbf"}}>ประเภทการทำรายการ</strong>
                        <strong style={{width: "50%",textAlign:"right"}}>
                            Reallocate ปรับนโยบาย <br/>
                            และสัดส่วนการลงทุนเงินนำส่งใหม่
                        </strong>
                    </div>

                    <div className="d-flex justify-content-between pt-3">
                        <strong style={{color:"#2d2975"}}>แผนการลงทุน</strong>
                        <strong style={{color:"#2d2975"}}>แผนที่ 1</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#2d2975"}}>นโยบาย 1</strong>
                        <strong>75%</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#2d2975"}}>นโยบาย 2</strong>
                        <strong>25%</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#2d2975"}}>นโยบาย 3</strong>
                        <strong>-</strong>
                    </div>
                </div>

                <div className="row pl-2 py-2">
                    <div className="col-12" style={{fontSize:"18px"}}>
                        <p>
                            โปรดรอการยืนยันผลการทำรายการของท่านตามช่องทางรับข้อมูลข่าวสารที่ท่านลงทะเบียนไว้
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolicyInvestmentDetail

const styles = {
    subTitle:{
        fontWeight: "bold",
        fontSize:"20px",
        padding: "20px",
    },
    card:{
        padding: "20px 15px",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "5px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)"
    }
}