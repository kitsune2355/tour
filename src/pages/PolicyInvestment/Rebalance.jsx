import React ,{useState} from 'react'
import { useHistory } from 'react-router';
import Header from './header'

const Rebalance = () => {

    const [show , setShow] = useState(false);
    const history = useHistory();

    const handleToggleConfirm = () => {
        setShow(!show);
      }
    
    const handleSubmit = () => {
        history.push("/webview/RebalanceChange/:lang/:token")
    }

    return (
        <div>
            <Header
              titlehead = "ปรับนโยบายและสัดส่วนการลงทุนเงินนำส่งใหม่"
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-3">
                        <div className="col-12 pb-3" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                            <strong style={{color:"#171285" ,fontSize:"20px"}}>เปลี่ยนนโยบาย / สัดส่วนการลงทุนปัจจุบัน</strong>
                            <br/>
                            <span>
                                การปรับนโยบายและสัดส่วนเงินปัจจุบัน หมายถึง การเปลี่ยนนโยบาย หรือ 
                                สัดส่วนการลงทุนที่มีผลต่อเงินลงทุนทั้งหมด ณ TRADE DATE ที่ทำรายการ 
                                ส่วนเงินนำส่งแต่ละเดือนที่เข้ากองทุนจะลงทุนในนโยบาย หรือ สัดส่วนในการลงทุนเดิม
                            </span>
                        </div>  
                        <div className="col-12 pt-5">
                            <strong style={{color:"#171285" ,fontSize:"20px"}}>ระบุวิธีทำรายการ : </strong>
                        </div> 
                        <div className="col-12 pt-2">
                            <button
                                style={styles.btnPlan}
                            >
                                PLAN
                            </button>
                        </div> 
                    </div>

                    <div className="col-12">
                    <div className="container py-3 fixed-bottom bottom-btn">
                            <div className="row justify-content-center mt-3" style={{backgroundColor:"#fff"}} >
                                <div className="col-10 d-flex">
                                    <button 
                                        className="btn btn-secondary text-light w-100 mr-1"
                                        onClick={handleToggleConfirm}
                                    >
                                        ยกเลิก
                                    </button>
                                    <button className="btn text-light w-100 ml-1" 
                                        style={{backgroundColor:"#1e1c47"}}
                                        onClick = {handleSubmit}
                                    >
                                        ตกลง
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rebalance

const styles = {
    btnPlan:{
        width: '100%', 
        backgroundColor:'#fff' ,
        border:'1px solid rgba(0,0,0,0.1)', 
        textAlign:'left', 
        paddingLeft:'25px',
    },
    
}