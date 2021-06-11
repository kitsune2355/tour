import React from 'react'

const Type = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>หมวดหมู่สิ้นค้าท่องเที่ยว</strong>
                    <span>ดูเพิ่มเติม</span>
                </div>

                <div 
                    className="col-12 slide-img size-img" 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "8px",
                    }}
                >
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>เสื้อผ้า</strong>
                    </div>
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>กระเป๋า</strong>
                    </div>
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>รองเท้า</strong>
                    </div>
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>อุปกรณ์ถ่ายภาพ</strong>
                    </div>
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>อาหารประจำจังหวัด</strong>
                    </div>
                    <div className="py-3" style={{width:"40%", display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                        <img src="https://i.stack.imgur.com/y9DpT.jpg" style={{ width:"60px",height:"60px",borderRadius:"50%"}}/>
                        <strong style={{fontSize:"16px"}}>เครื่องดื่ม</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Type
