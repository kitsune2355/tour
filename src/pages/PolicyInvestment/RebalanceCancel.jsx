import React ,{useState} from 'react'
import Header from './header'
import './style.css'
import { useHistory } from 'react-router';

const RebalanceCancel = () => {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/webview/PolicyInvestmentCancel/:lang/:token")
  }

    return (
        <div>
            <Header
              titlehead = "ปรับนโยบายและสัดส่วนการลงทุนเงินนำส่งใหม่"
            />

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
                SHELL 1
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
                SHELL 2**
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

            <div
              className="d-flex justify-content-between"
              style={styles.tableContent}
            >
              <div className="d-flex align-items-center">
                SHELL 3
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
                            วันคำนวณจำนวนหน่วย* : 22 ตุลาคม 2563
                        </strong>
                        <p className="text mb-0 pb-0">
                            ทุกวันพฤหัสของสัปดาห์
                            หากตรงกับวันหยุดจะเลื่อนวันเป็นวันทำการก่อนหน้าแทน
                        </p>
                        <p className="text-secondary">
                            ***นโยบาย SHLL 2 สามารถกำหนดสัดส่วนสูงสุดได้ไม่เกิน 25%
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-10 d-flex">
                      <button className="btn btn-secondary text-light w-100 mr-1">ยกเลิก</button>
                      <button className="btn text-light w-100 ml-1" 
                        style={{backgroundColor:"#1e1c47"}}
                        onClick={handleSubmit}
                      >
                        ตกลง
                      </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RebalanceCancel

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