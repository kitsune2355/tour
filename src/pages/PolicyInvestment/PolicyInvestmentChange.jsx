import React ,{useState} from 'react'
import Header from './header'
import { IoIosInformationCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import SweetAlert from 'react-bootstrap-sweetalert';
import './style.css'
import { useHistory } from 'react-router';

const PolicyInvestmentChange = () => {

  const history = useHistory();

  const [alert , setAlert] = useState({
    show: false, 
    title:"", 
    content: ""
  });

  const [show , setShow] = useState(false);

  const handleShowAlert = ( title,content ) => {
    setAlert({show: true, title: title, content: content});
  } 

  const handleHideAlert = ( ) => {
    setAlert({show: false,title:"", content: ""});
  }

  const handleToggleConfirm = () => {
    setShow(!show);
  }

  const handleSubmit = () => {
    history.push("/webview/PolicyInvestmentDetail/:lang/:token")
  }

    return (
        <div>
            <Header
              titlehead = "ปรับนโยบายและสัดส่วนการลงทุนเงินนำส่งใหม่"
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

            {/* content */}
            <div className="container-fluid">
            <div className="row">
          <div className="col-12" style={styles.subTitle}>
            ปรับนโยบายการลงุทนแบบ DIY
          </div>
          <div className="col-12 px-0">
            <div
              className="d-flex justify-content-between"
              style={styles.tableHeader}
            >
              <strong>นโยบาย</strong>
              <strong>สัดส่วน (%)</strong>
            </div>

            <div
              className="d-flex justify-content-between"
              style={styles.tableContent}
            >
              <div className="d-flex align-items-center">
                <IoIosInformationCircleOutline style={styles.tableIcon} 
                  onClick={()=> handleShowAlert("MIX-D1585" , "กองทุนเปิด ไทย มิกซ์ 15/85 ปันผล")} 
                />
                MEA
              </div>
              <select
                class="form-select form-select-lg"
                style={{ width: "60px" ,height: "30px"}}
              >
                <option value="0">0%</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100%</option>
              </select>
            </div>

            <div
              className="d-flex justify-content-between"
              style={styles.tableContent}
            >
              <div className="d-flex align-items-center">
                <IoIosInformationCircleOutline style={styles.tableIcon} 
                  onClick={()=> handleShowAlert("MIX-D1585" , "กองทุนเปิด ไทย มิกซ์ 15/85 ปันผล")}
                />
                M06EQ
              </div>
              <select
                class="form-select form-select-lg"
                style={{ width: "60px",height: "30px" }}
              >
                <option value="0">0%</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100%</option>
              </select>
            </div>
            
            <div className="text-light py-1 px-4 d-flex justify-content-between" style={{backgroundColor:"#0587d8"}}>
                <strong>รวม</strong>
                <strong className="mr-3">100%</strong>
            </div>
            <div className="d-flex justify-content-end px-4 mt-2 text-danger">
                กรุณาปรับสัดส่วนให้เท่ากับ 100%
            </div>
          </div>
        </div>
      </div>

            {/* Footer */}
            <div className="container py-3 bg-light fixed-bottom">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <strong className="mb-0 pb-0" style={{color:"#211e5e"}}>
                            มีผลต่อเงินนำส่งของท่านในเดือน ตุลาคม 2563
                        </strong>
                        <p className="text-secondary">
                            ทุกวันพฤหัสของสัปดาห์
                            หากตรงกับวันหยุดจะเลื่อนวันเป็นวันทำการก่อนหน้าแทน
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-10 d-flex">
                      <button className="btn btn-secondary text-light w-100 mr-1">ยกเลิก</button>
                      <button className="btn text-light w-100 ml-1" 
                        style={{backgroundColor:"#1e1c47"}}
                        onClick={handleToggleConfirm}
                      >
                        ตกลง
                      </button>
                    </div>
                </div>
            </div>


            {/* submit bottom slide */}
            <div className={`container-fluid bottom-overlay ${show ? "show" : ""}`}>
              <div className="row card">
                <div className="col-12 px-4 py-4">

                  <div className="row justify-content-center warning-text">
                    <div className="col-12 pb-2">
                      <span>วันคำนวณจำนวนหน่วย : 
                        <strong style={{color:"#1e1c47"}}>{' 22 ตุลาคม 2563'}</strong>
                      </span>
                    </div>

                    <div className="col-12">
                      <strong style={{color:"#1e1c47" ,fontSize:"20px"}}>คำเตือน</strong>
                    </div>

                    <div className="col-12 pb-3">
                      <span>
                        การเลือกแผนการลงทุนโดยไม่ทำแบบประเมินความเสี่ยง จะทำให้สมาชิกไม่ทราบถึงระดับความเสี่ยงที่ยอมรับได้  
                        ซึ่งอาจทำให้เลือกแผนการลงทุนที่ไม่เหมาะสม
                      </span>
                    </div>

                    <div className="col-12 pb-3">
                      <span>
                        กรณีที่สมาชิกรับความเสี่ยงจากอัตราแลกเปลี่ยนไม่ได้ สมาชิกไม่ควรเลือกลงทุนในนโยบายการลงทุนในต่างประเทศที่ไม่ได้ป้องกันความเสี่ยงจาก
                        อัตราแลกเปลี่ยนทั้งจำนวนเนื่องจากอาจมีความผันผวนของอัตราแลกเปลี่ยน
                        จนทำให้อัตราผลตอบแทนจากการลงทุนที่ได้รับไม่เป็นไปตามผลตอบแทนที่คาดหวัง และวัตถุประสงค์การลงทุนของสมาชิก
                      </span>
                    </div>

                    <div className="col-12 pb-3">
                      <span>
                        การลงทุนมีความเสี่ยงผู้ลงทุนความศึกษาข้อมูลก่อนการตัดสินใจลงทุน
                      </span>
                    </div>

                    <div className="col-12 pb-3">
                      <span>
                        การแจ้งเตือนความจำนงในการเลือกแผนการลงทุนครั้งนี้
                        ข้าพเจ้าขอรับรองว่า ข้าพเจ้าผู้ตัดสินใจเลือกแผนการลงทุนนี้เอง ซึ่งข้าพเจ้าได้รับทราบและ
                        ศึกษาข้อมูลเกี่ยวกับการลงทุนรวมถึงความเสี่ยงการลงทุนที่ข้าพเจ้าเลือกข้างต้นเป็นอย่างดี
                      </span>
                    </div>

                  </div>
                </div>

                <div className="container py-3 fixed-bottom bottom-btn">
                <div className="row justify-content-center mt-3" style={{backgroundColor:"#fff"}} >
                  <IoMdCheckmarkCircle style={{fontSize:"20px"}} />
                    <div className="col-9">
                    <p className="text-secondary mb-0 pb-0">
                          ข้าพเจ้ายอมรับเงื่อนไขว่า การทำรายการเปลี่ยนสัดส่วนการลงทุนดังกล่าว ข้าพเจ้าสามารถเปลี่ยนแปลงแก้ไข / ยกเลิกการทำรายการได้จนถึงวันที่
                        </p>
                        <span style={{color:"#f00"}}>21 ตุลาคม 2563</span>
                        <p className="text-secondary mb-0 pb-0">หลังจากนั้น ข้าพเจ้าจะไม่สามารถดำเนินการเปลี่ยนแปลง แก้ไข / ยกเลิกการทำรายการนั้นได้</p>
                    </div>
                    <div className="col-10 d-flex">
                      <button className="btn btn-secondary text-light w-100 mr-1"
                        onClick={handleToggleConfirm}
                      >
                        ยกเลิก
                      </button>
                      <button className="btn text-light w-100 ml-1" 
                        style={{backgroundColor:"#1e1c47"}}
                        onClick = {handleSubmit}
                      >
                        ยืนยัน
                      </button>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default PolicyInvestmentChange

const styles = {
    subTitle:{
        fontWeight: "bold",
        fontSize:"20px",
        padding: "20px",
    },
    tableHeader:{
        padding: "5px 20px",
        backgroundColor: "#e8f6ff",
        color: "#1e1c47",
        borderBottom: "1px solid #2e74c9",
        fontSize: "16px",
        fontWeight: "bold",
    },
    tableContent:{
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
    },
    tableIcon:{
        fontSize: "12px",
        marginRight: "5px",
        color: "#ddd"
    },
    
}