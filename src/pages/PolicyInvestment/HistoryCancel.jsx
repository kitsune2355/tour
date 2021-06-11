import React ,{useState} from 'react'
import Header from './header'
import SweetAlert from 'react-bootstrap-sweetalert';
import { useHistory } from 'react-router';

const HistoryCancel = () => {

    const [alert , setAlert] = useState({
        show: false, 
        title:"", 
        content: ""
      });

    // const [show , setShow] = useState(false);
    const history = useHistory();

      const handleShowAlert = ( title,content ) => {
        setAlert({show: true, title: title, content: content});
      } 
    
      const handleHideAlert = ( ) => {
        setAlert({show: false,title:"", content: ""});
      }

      const handleToggleConfirm = () => {
        // setShow(!show);
        setAlert({show: false,title:"", content: ""});
      }
    
      const handleSubmit = () => {
        history.push("/webview/PolicyInvestmentCancelDetail/:lang/:token")
      }

    return (
        <div>
            <Header
              titlehead = "ปรับการลงทุนทั้งหมด"
            />

            <SweetAlert 
              title={alert.title}
              show={alert.show}
              confirmBtnCssClass="d-none"
              >
                <a className="alert-close" onClick={handleHideAlert}>
                    <img
                        src={process.env.PUBLIC_URL +"/images/close.png"} 
                        className="img-fluid"
                        alt="uob"
                        width="25"
                    />
                </a>
                  <div className="t-left t-26 t-blue">{alert.content}</div>
              </SweetAlert>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={styles.subTitle}>
                        <strong style={{color:"#2d2975"}}>รายการรอดำเนินการ</strong>
                        <p style={{color:"#6f6f6f"}}>
                            ปรับเปลี่ยนนโยบายและสัดส่วนการลงทุนผ่าน Internet <br/>
                            ณ วันที่คำนวณจำนวนหน่วยลงทุนที่ 
                            <span style={{color:"#2e74c9"}}>{' 22 ตุลาคม 2563'}</span> <br/>
                            ทั้งนี้ สมาชิกสามารถเปลี่ยนแปลงแก้ไข / ยกเลิกการทำรายได้จนถึง วันที่
                            <span style={{color:"#f00"}}>{' 21 ตุลาคม 2563'}</span>
                        </p>
                    </div>
                </div>

                <div className="col-12" style={styles.card}>

                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#6f6f6f"}}>ประเภทการทำรายการ :</strong>
                        {/* <strong style={{width: "50%",textAlign:"right" ,color:"#2d2975"}}>
                            Reallocate ปรับนโยบาย <br/>
                            และสัดส่วนการลงทุนเงินนำส่งใหม่
                        </strong> */}
                        <strong style={{width: "55%",textAlign:"right" ,color:"#2d2975"}}>
                            ปรับนโยบายและสัดส่วนการลงทุนทั้งหมด
                        </strong>
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                        <strong style={{color:"#6f6f6f"}} >หมายเลขรายการ :</strong>
                        <strong style={{color:"#2d2975"}}>R200006111</strong>
                    </div>

                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#6f6f6f"}}>แผนการลงทุน :</strong>
                        <strong style={{color:"#2d2975"}}>แผนที่ 1</strong>
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-0">
                            <div
                                className="d-flex justify-content-between"
                                style={styles.tableHeader}
                            >
                                <strong>นโยบาย</strong>
                                <strong>สัดส่วน (%)</strong>
                            </div>
                        </div>
                        <div className="col-12 px-0">
                            <div
                                className="d-flex justify-content-between"
                                style={styles.tableContent}
                            >
                                <strong>นโยบายที่ 1 : SHELL 1</strong>
                                <strong>100%</strong>
                            </div>
                        </div>
                        

                        <div className="container">
                            <div className="row">
                                <div className="col-12 py-4 btn text-light w-100">
                                    <div className="d-flex justify-content-center">
                                        <button 
                                            style={styles.buttonCancel}
                                            onClick={()=> handleShowAlert(
                                                <div className="col-12 px-0 py-4" style={{textAlign: "center"}}>
                                                    กรุณากดยืนยันเพื่อยกเลิกรายการ
                                                </div> 
                                                ,
                                                <div className="col-12 d-flex px-0">
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
                                            )}
                                        >

                                            ยกเลิกทำรายการ
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

export default HistoryCancel

const styles = {
    subTitle:{
        fontSize:"20px",
        padding: "20px",
    },
    card:{
        padding: "20px 15px",
        borderTop: "1px solid rgba(0,0,0,0.2)",
    },
    tableHeader:{
        padding: "5px 30px",
        backgroundColor: "#e8f6ff",
        color: "#1e1c47",
        borderBottom: "1px solid #2e74c9",
        fontSize: "16px",
        fontWeight: "bold",
    },
    tableContent:{
        padding: "5px 30px",
        color: "#6f6f6f",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
        fontSize: "16px",
        fontWeight: "bold",
    },
    buttonCancel:{
        backgroundColor: "#f00",
        color: "#fff",
        fontSize: "16px",
        border: "0",
        padding: "5px 40px",
    }
}