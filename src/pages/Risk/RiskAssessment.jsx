import React from "react";
import "./risk.css";

import SweetAlert from "react-bootstrap-sweetalert";

export class RiskAssessment extends React.Component {

    state = {
        lang: 'th',
        token: '1',
        onOpenAlet: null,
        checkBox1: true,
        checkBox2: false,
        checkBox3: false,
        checkBox4: false,
    };

    componentDidMount() {
    }
    
    onOpenAlet(msg){
        alert=(
            <SweetAlert  
                show={true}
                confirmBtnCssClass="btn-block btn-blue-alert"
                confirmBtnText="ตกลง"
                onConfirm={() => this.onCloseAlet()}
            >
                <a className="alert-close" onClick={() => this.onCloseAlet()}>
                    <img
                        src={process.env.PUBLIC_URL +"/images/close.png"} 
                        className="img-fluid"
                        alt="uob"
                        width="25"
                    />
                </a>
                <span className="t-26 t-blue t-bold">{msg}</span>
            </SweetAlert>
        )
        this.setState({ onOpenAlet : alert })
    }

    onCloseAlet() {
        this.setState({ onOpenAlet: null });
    }

    onCheckBox(num){
        if(num === 1){
            this.setState({
                checkBox1: true,
                checkBox2: false,
                checkBox3: false,
                checkBox4: false,
            })
        } else if(num === 2){
            this.setState({
                checkBox1: false,
                checkBox2: true,
                checkBox3: false,
                checkBox4: false,
            })
        } else if(num === 3){
            this.setState({
                checkBox1: false,
                checkBox2: false,
                checkBox3: true,
                checkBox4: false,
            })
        } else if(num === 4){
            this.setState({
                checkBox1: false,
                checkBox2: false,
                checkBox3: false,
                checkBox4: true,
            })
        }
    }

    onCancle(){
        const { lang, token } = this.state
        window.location.href = `${process.env.PUBLIC_URL}/webview/Risk/${lang}/${token}`;
    }

    onConfirm(){
        const { lang, token } = this.state
        window.location.href = `${process.env.PUBLIC_URL}/webview/Risk/${lang}/${token}`;
    }

    render() {
        const { onOpenAlet } = this.state
        return (
            <div className="container py-3">
                {onOpenAlet}
                <div className="row">
                    <div className="col-12">
                        <div className="t-20 t-graydark t-bold txth-20">แบบประเมินความเสี่ยงเพื่อความเหมาะสมในการเลือกนโยบายการลงทุน / แผนการลงทุน (Member Risk Profile)</div>
                        <div className="t-20 t-skyblue t-bold">อายุหรือระยะเวลาการลงทุน</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 py-3 px-0">
                        <div className="riskasset-bgtitle">
                            <img
                                src={process.env.PUBLIC_URL +"/images/banner_contact.jpg"} 
                                className="img-fluid riskasset-bgtitle-img"
                                alt="uob"
                            />
                        </div>
                        <div className="riskasset-title">
                            <div className="t-28 t-graydark t-bold">ข้อที่ 1</div>
                            <div className="t-24 t-graydark txth-20">ท่านจะเกษียณอายุเมื่อไหร่</div>
                        </div>
                    </div>
                    <div className="col-12 px-0">
                        <a className="d-flex px-3" onClick={() => this.onCheckBox(1)}>
                            <div className={this.state.checkBox1 ? "riskasset-checkbox-active" : "riskasset-checkbox"}></div>
                            <div className="t-22 t-graydark">ภายใน 5 ปี หรือเกษียณอายุแล้ว</div>
                        </a>
                        <div className="risk-line my-2"></div>
                        <a className="d-flex px-3" onClick={() => this.onCheckBox(2)}>
                            <div className={this.state.checkBox2 ? "riskasset-checkbox-active" : "riskasset-checkbox"}></div>
                            <div className="t-22 t-graydark">ภายใน 5 ปี หรือเกษียณอายุแล้ว</div>
                        </a>
                        <div className="risk-line my-2"></div>
                        <a className="d-flex px-3" onClick={() => this.onCheckBox(3)}>
                            <div className={this.state.checkBox3 ? "riskasset-checkbox-active" : "riskasset-checkbox"}></div>
                            <div className="t-22 t-graydark">ภายใน 5 ปี หรือเกษียณอายุแล้ว</div>
                        </a>
                        <div className="risk-line my-2"></div>
                        <a className="d-flex px-3" onClick={() => this.onCheckBox(4)}>
                            <div className={this.state.checkBox4 ? "riskasset-checkbox-active" : "riskasset-checkbox"}></div>
                            <div className="t-22 t-graydark">ภายใน 5 ปี หรือเกษียณอายุแล้ว</div>
                        </a>
                        <div className="risk-line my-2"></div>
                    </div>
                </div>
                <div className="row p-3 fixed-bottom">
                    <div className="col-6 pr-1">
                        <a className="btn-gray" onClick={() => this.onCancle()}>
                            ยกเลิก
                        </a>
                    </div>
                    <div className="col-6 pl-1">
                        <a className="btn-blue" onClick={() => this.onConfirm()}>
                            ยืนยัน
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
