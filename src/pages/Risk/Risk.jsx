import React from "react";
import "./risk.css";

import SweetAlert from "react-bootstrap-sweetalert";

export class Risk extends React.Component {

    state = {
        lang: 'th',
        token: '1',
        onOpenAlet: null
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

    onRiskAssetment(){
        const { lang, token } = this.state
        window.location.href = `${process.env.PUBLIC_URL}/webview/RiskAssessment/${lang}/${token}`;
    }

    render() {
        const { onOpenAlet } = this.state
        return (
            <div className="container py-3">
                {onOpenAlet}
                <div className="row py-2">
                    <div className="col-12">
                        <div className="d-flex">
                            <div className="t-20 t-gray">วันที่ทำแบบประเมินล่าสุด : </div>
                            <div className="ml-auto t-20 t-graydark">01/10/2018</div>
                        </div>
                        <div className="d-flex txth-20">
                            <div className="t-20 t-gray">วันที่ทำแบบประเมินหมดอายุ : </div>
                            <div className="ml-auto t-20 t-graydark">01/10/2019</div>
                        </div>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-12 text-center">
                        <div className="t-32 t-graydark t-bold">คะแนนของท่าน คือ</div>
                        <div className="risk-circle mx-auto my-2">
                            <div className="risk-circlenum">15</div>
                        </div>
                        <div className="t-24 t-skyblue">ระดับความเสี่ยงค่อนข้างสูง</div>
                        <div className="risk-line mt-2"></div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="t-20 t-graydark txth-20 mb-1">
                            มีสิรทรัพย์เสี่ยงได้ไม่เกิน 
                            <span className="t-skyblue t-bold"> 50%</span>
                        </div>
                        <div className="t-20 t-blue txth-20 t-bold">การลงทุนในนโยบายการลงทุนต่างประเทศ : </div>
                        <div className="t-20 t-graydark txth-20">ท่านสมาชิกสามารถกดยอมรับความเสี่ยงด้านอัตราแลกเปลี่ยน (FX RISKE)</div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-8 text-center mx-auto">
                        <a className="btn-blue-mini" onClick={() => this.onRiskAssetment()}>
                            แบบประเมินความเสี่ยง
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
