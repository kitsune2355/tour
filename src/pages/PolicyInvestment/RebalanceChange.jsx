import React ,{useState} from 'react'
import Header from './header'
import { IoMdCheckmarkCircle } from "react-icons/io";
import SweetAlert from 'react-bootstrap-sweetalert';
import './style.css'
import { useHistory } from 'react-router';

const RebalanceChange = () => {

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
    history.push("/webview/RebalanceDetail/:lang/:token")
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
          <div className="col-12" style={styles.Title}>
            ปรับนโยบายและสัดส่วนเงินปัจจุบันแบบเลือกแผนการลงทุน
          </div>
          <div className="col-12" style={styles.subTitle}>
            แผนการลงทุน
          </div>
          <div className="col-12">
            <select
                class="form-select form-select-lg"
                style={{ width: "100%" ,
                    height: "40px",
                    fontSize:"20px",
                    fontWeight:"bold",
                    border: "1px solid #ddd",
                    padding: "0 25px"
                }}
              >
                <option value="1">แผนที่ 1</option>
                <option value="2">แผนที่ 2</option>
                <option value="3">แผนที่ 3</option>
                <option value="4">แผนที่ 4</option>
              </select>

              <div className="col-12">
                    <div className="d-flex justify-content-between pt-3">
                        <strong style={{color:"#2d2975"}}>นโยบาย 1</strong>
                        <strong>100%</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#2d2975"}}>นโยบาย 2</strong>
                        <strong>-</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong style={{color:"#2d2975"}}>นโยบาย 3</strong>
                        <strong>-</strong>
                    </div>
              </div>
          </div>

        </div>
      </div>

            {/* Footer */}
            <div className="container py-3 bg-light fixed-bottom">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <strong className="mb-0 pb-0" style={{color:"#211e5e"}}>
                            วันคำนวณจำนวนหน่วย* : 22 ตุลาคม 2563
                        </strong>
                        <p className="text-secondary">
                            *ทุกวันพฤหัสของสัปดาห์
                            หากตรงกับวันหยุดจะเลื่อนวันเป็นวันทำการก่อนหน้าแทน
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-10 d-flex">
                      <button 
                        className="btn btn-secondary text-light w-100 mr-1"
                        
                      >
                        ยกเลิก
                      </button>
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

export default RebalanceChange

const styles = {
    Title:{
        fontSize:"18px",
        padding: "20px 20px 0 20px",
    },
    subTitle:{
        fontWeight: "bold",
        fontSize:"20px",
        padding: "0 20px 20px 20px",
        color: "#171285"
    },
}