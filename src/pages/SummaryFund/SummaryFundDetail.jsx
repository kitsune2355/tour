import React from "react";
import "./summaryfund.css";

import { PvdPortAction } from "../../_actions";
import { encryption } from "../../_encryption";

import SweetAlert from "react-bootstrap-sweetalert";


export class SummaryFundDetail extends React.Component {

    state = {
        onOpenAlet: null
    };

    componentDidMount() {
        // this.onGetMemberDetail()
    }
    
    onGetMemberDetail(){
        PvdPortAction.MemberDetail().then(e => {
            if(e !== "ErrorApi") {
                var dataForDecrypt = e.data
                console.log("MemberDetail", e)
                var dataDecrypt = encryption.decryptedData(dataForDecrypt);
                console.log("dataDecrypt", dataDecrypt)
            } else {
                this.onOpenAlet("เกิดข้อผิดพลาด")
            }
        });
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

    render() {
        const { onOpenAlet } = this.state
        return (
            <div className="container py-2">
                {onOpenAlet}
                <div className="row">
                    <div className="col-12 t-28 t-skyblue t-bold pb-1">
                        ยอดยกมา
                    </div>
                    <div className="summaryfund-fullpage">
                        <div className="summaryfund-bgtitle px-3">
                            <span className="t-22 t-blue fweight-600">UOBAM</span>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex px-3">
                                <div className="t-20 t-graydark">ส่วนของสมาชิก</div>
                                <div className="ml-auto">
                                    <span className="t-20 t-graydark">500.00</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">เงินสะสม</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">300.00</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">ผลประโยชน์</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">200.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex px-3">
                                <div className="t-20 t-graydark">ส่วนของนายจ้าง</div>
                                <div className="ml-auto">
                                    <span className="t-20 t-graydark">70.02</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">เงินสะสม</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">50.01</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">ผลประโยชน์</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">20.01</span>
                                </div>
                            </div>
                        </div>

                        <div className="summaryfund-bgtitle px-3 mt-2">
                            <span className="t-22 t-blue fweight-600">KTAM</span>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex px-3">
                                <div className="t-20 t-graydark">ส่วนของสมาชิก</div>
                                <div className="ml-auto">
                                    <span className="t-20 t-graydark">500.00</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">เงินสะสม</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">300.00</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">ผลประโยชน์</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">100.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex px-3">
                                <div className="t-20 t-graydark">ส่วนของนายจ้าง</div>
                                <div className="ml-auto">
                                    <span className="t-20 t-graydark">10.80</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">เงินสะสม</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">05.43</span>
                                </div>
                            </div>
                            <div className="d-flex px-3">
                                <div className="t-16 t-gray pl-3">ผลประโยชน์</div>
                                <div className="ml-auto">
                                    <span className="t-16 t-gray">05.37</span>
                                </div>
                            </div>
                        </div>

                        <div className="summaryfund-bgsum px-3 mt-2">
                            <div className="t-20 t-white fweight-600">รวม</div>
                            <div className="ml-auto t-20 t-white fweight-600">880.82</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
