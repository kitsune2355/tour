import React ,{useState} from 'react'
import Header from './header'
import './style.css'

const History = () => {

    const [index, setIndex] = useState();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (
        <div>
            <Header
              titlehead = "ประวัติการทำรายการ"
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-4">
                        <strong style={{color:"#171285"}}>วันที่เริ่มต้น : </strong>
                    </div>
                    <div className="col-12 pt-2 d-flex justify-content-between">
                    <select
                        class="form-select form-select-lg"
                        style={{ width: "60px" ,height: "30px"}}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <select
                        class="form-select form-select-lg"
                        style={{ width: "150px" ,height: "30px"}}
                    >
                        <option value="1">มกราคม</option>
                        <option value="2">กุมภาพันธ์</option>
                        <option value="3">มีนาคม</option>
                        <option value="4">เมษายน</option>
                        <option value="5">พฤษภาคม</option>
                        <option value="6">มิถุนายน</option>
                        <option value="7">กรกฎาคม</option>
                        <option value="8">สิงหาคม</option>
                        <option value="9">กันยายน</option>
                        <option value="10">ตุลาคม</option>
                        <option value="11">พฤศจิกายน</option>
                        <option value="12">ธันวาคม</option>
                    </select>

                    <select
                        class="form-select form-select-lg"
                        style={{ width: "100px" ,height: "30px"}}
                    >
                        <option value="1">2555</option>
                        <option value="2">2556</option>
                        <option value="3">2557</option>
                        <option value="4">2558</option>
                        <option value="5">2559</option>
                        <option value="6">2560</option>
                        <option value="7">2561</option>
                        <option value="8">2562</option>
                        <option value="9">2563</option>
                        <option value="10">2564</option>
                    </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pt-4">
                        <strong style={{color:"#171285"}}>วันที่สิ้นสุด : </strong>
                    </div>
                    <div className="col-12 pt-2 d-flex justify-content-between">
                    <select
                        class="form-select form-select-lg"
                        style={{ width: "60px" ,height: "30px"}}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <select
                        class="form-select form-select-lg"
                        style={{ width: "150px" ,height: "30px"}}
                    >
                        <option value="1">มกราคม</option>
                        <option value="2">กุมภาพันธ์</option>
                        <option value="3">มีนาคม</option>
                        <option value="4">เมษายน</option>
                        <option value="5">พฤษภาคม</option>
                        <option value="6">มิถุนายน</option>
                        <option value="7">กรกฎาคม</option>
                        <option value="8">สิงหาคม</option>
                        <option value="9">กันยายน</option>
                        <option value="10">ตุลาคม</option>
                        <option value="11">พฤศจิกายน</option>
                        <option value="12">ธันวาคม</option>
                    </select>

                    <select
                        class="form-select form-select-lg"
                        style={{ width: "100px" ,height: "30px"}}
                    >
                        <option value="1">2555</option>
                        <option value="2">2556</option>
                        <option value="3">2557</option>
                        <option value="4">2558</option>
                        <option value="5">2559</option>
                        <option value="6">2560</option>
                        <option value="7">2561</option>
                        <option value="8">2562</option>
                        <option value="9">2563</option>
                        <option value="10">2564</option>
                    </select>
                    </div>
                </div>

                <div className="col-12">
                    <div className="container py-3 fixed-bottom bottom-btn">
                            <div className="row justify-content-center mt-3" style={{backgroundColor:"#fff"}} >
                                <div className="col-10 d-flex">
                                    <button 
                                        className="btn btn-secondary text-light w-100 mr-1"
                                        // onClick={handleToggleConfirm}
                                    >
                                        ยกเลิก
                                    </button>
                                    <button className="btn text-light w-100 ml-1" 
                                        style={{backgroundColor:"#1e1c47"}}
                                        // onClick = {handleSubmit}
                                    >
                                        ค้นหา
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
            <div style={styles.Carousel}>
            <div className="row pt-5 mx-0" style={{width:"100%"}}>
                <div className="w-100 d-flex justify-content-between " style={styles.tableHead}>
                    <div className="col-3 px-0">
                        วันคำนวณหน่วย
                    </div>
                    <div className="col-3 px-0">
                        ช่องทาง
                    </div>
                    <div className="col-3 px-0">
                        สถานะ
                    </div>
                    <div className="col-3 px-0">
                        แผนการลงทุน
                    </div>
                    <div className="col-3 px-0">
                        นโยบาย
                    </div>
                    <div className="col-3 px-0">
                        นโยบาย
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-between " style={styles.tableSub}>
                    <div className="col-3 px-0">
                        05/07/2019
                    </div>
                    <div className="col-3 px-0">
                        Committee
                    </div>
                    <div className="col-3 px-0">
                        Completed
                    </div>
                    <div className="col-3 px-0">
                        DIY
                    </div>
                    <div className="col-3 px-0">
                        100%
                    </div>
                </div>

                <div className="col-12 pt-3 mx-0 d-flex justify-content-center align-items-center">
                    <button
                        style={{backgroundColor:"#171285",width:"20px" ,height:"20px", borderRadius:"50%" ,margin: "5px",border: "1px solid rgba(0,0,0,0.1)",}}
                    ></button>
                    <button style={{backgroundColor:"#fff",width:"20px" ,height:"20px", borderRadius:"50%" ,margin: "5px",border: "1px solid rgba(0,0,0,0.3)",}}>

                    </button>
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default History

const styles = {
    tableHead:{
        fontWeight: "bold",
        fontSize:"16px",
        padding: "5px 20px",
        backgroundColor: "#e8f6ff",
        color: "#1e1c47",
        borderBottom: "1px solid #2e74c9",
    },
    tableSub:{
        fontWeight: "bold",
        fontSize:"16px",
        padding: "10px 20px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
    },
    Carousel:{
        overflowX: "scroll",
        flexWrap: "nowrap",
        overflow: "hidden",
    },
    
}
