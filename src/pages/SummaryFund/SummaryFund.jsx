import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment-timezone';
import "./summaryfund.css";

import { PvdPortAction } from "../../_actions";
import { encryption } from "../../_encryption";

import { LineChart, PieChart } from 'react-chartkick';
import SweetAlert from "react-bootstrap-sweetalert";
import CanvasJSReact from '../Lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class SummaryFund extends React.Component {

    state = {
        lang: 'th',
        token: '1',
        selectDatePicker: new Date(),
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

    onDetail(){
        const { lang, token } = this.state
        window.location.href = `${process.env.PUBLIC_URL}/webview/SummaryFundDetail/${lang}/${token}`;
    }

    onOpenReturn(){
        alert=(
            <div className="alert-content">
            <SweetAlert  
                show={true}
                showConfirm={false}
            >
                <a className="alert-close" onClick={() => this.onCloseAlet()}>
                    <img
                        src={process.env.PUBLIC_URL +"/images/close.png"} 
                        className="img-fluid"
                        alt="uob"
                        width="25"
                    />
                </a>
                <div className="alert-contentinside">
                    <div className="t-26 t-skyblue t-bold">
                        I-Return
                    </div>
                    <div className="t-20 t-dark txth-20">
                        คือ อัตราผลตอบแทนของสมาชิกกองทุนสำรองเลี้ยงชีพ = (ผลรวมของผลประโยชน์เงินสะสมและเงินสมทบระหว่างปี x 100) หารด้วย(ผลรวมยอดยกมา + ผลรวมของเงินสะสม และเงินสมทบระหว่างปี + ผลรวมรับโอนเงินกองทุนระหว่างปี)
                    </div>
                </div>
            </SweetAlert>
            </div>
        )
        this.setState({ onOpenAlet : alert }) 
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
        var data = [{
            value: 6180.02,
            color: "#3b9ada",
            highlight: "#3b9ada",
            label: "นายจ้าง"
        }, {
            value: 9700.80,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "สมาชิก"
        }];
        var colors = ['#3b9ada', '#0d284f'];

        const options = {
            // width: 375,
            // height: 300,
            animationEnabled: true,
            toolTip:{
                fontFamily: "PSL",
                fontSize: 30,
                fontColor: "red",
                backgroundColor: "rgba(255,255,0,.2)"
            },
			// subtitles: [{
			// 	text: "71% Positive",
			// 	verticalAlign: "center",
			// 	fontSize: 24,
			// 	dockInsidePlotArea: true
            // }],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{y}",
				yValueFormatString: "#,###''",
				dataPoints: [
					{ name: "สมาชิก", y: 9700.80, color: "#3b9ada"  },
					{ name: "นายจ้าง", y: 6180.02, color: "#0d284f"  },
				]
			}]
        }
        const { onOpenAlet } = this.state
        return (
            <div className="container py-3">
                {onOpenAlet}
                <div className="row">
                    <div className="col-2 pr-0">
                        <span className="t-22 t-skyblue">ณ วันที่</span>
                    </div>
                    <div className="col-7">
                        <input className="summaryfund-inputdate arrow-down-black" type="date"  value="2021-04-22"/>
                    </div>
                    <div className="col-3 pl-0">
                        <a className="btn-blue-alert-mini">
                            ค้นหา
                        </a>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-12">
                        <div className="summaryfund-chartinside">
                            <div className="t-36 t-skyblue t-bold txth-20">15,880.82</div>
                            <div className="t-18 t-dark">มูลค่าทรัพย์สินสุทธิ (บาท)</div>
                            <a className="t-18 t-skyblue txth-15" onClick={() => this.onOpenReturn()}>
                                i-return 5.07%
                            </a>
                        </div>
                        <div className="summaryfund-chart">
                            {/* <PieChart 
                                // width="400px" height="400px"
                                data={[["นายจ้าง", 6180.02], ["สมาชิก", 9700.80]]} 
                                colors={ colors }
                                donut={true}
                                legend="bottom" 
                                library={{ pieSliceText: 'value' }}
                                discrete={true} 
                            /> */}
                            <CanvasJSChart 
                                options = {options}
                            />
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="summaryfund-fullpage">
                        <div className="summaryfund-bgtitle px-3">
                            <span className="t-20 t-blue fweight-600">สรุปยอดเงินกองทุน (บาท)</span>
                        </div>
                        <a className="d-flex py-2 px-3" onClick={() => this.onDetail()}>
                            <div className="t-20 t-graydark">ยอดยกมา</div>
                            <div className="ml-auto">
                                <span className="t-20 t-graydark mr-3">880.82</span>
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </a>
                        <div className="summaryfund-line"></div>
                        <div className="d-flex py-2 px-3">
                            <div className="t-20 t-graydark">รับโอนเงินกองทุนระหว่างปี</div>
                            <div className="ml-auto">
                                <span className="t-20 t-graydark mr-3">8,500</span>
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </div>
                        <div className="summaryfund-line"></div>
                        <div className="d-flex py-2 px-3">
                            <div className="t-20 t-graydark">เงินกองทุนระหว่างปี</div>
                            <div className="ml-auto">
                                <span className="t-20 t-graydark mr-3">3,000</span>
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </div>
                        <div className="summaryfund-line"></div>
                        <div className="d-flex py-2 px-3">
                            <div className="t-20 t-graydark">ยอดยกไป</div>
                            <div className="ml-auto">
                                <span className="t-20 t-graydark mr-3">3,500</span>
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </div>
                        <div className="summaryfund-bgsum px-3">
                            <div className="t-20 t-white fweight-600">รวม</div>
                            <div className="ml-auto t-20 t-white fweight-600">15,880.82</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="t-18 t-gray txth-20">
                            กรณีสมาชิกสิ้นสภาพ มูลค่าทรัพย์สินสุทธิที่สมาชิกมีสิทธิ์ได้รับเป็นไปตามเงื่อนไขที่ข้อบังคับกองทุน
                        </div>
                        <div className="t-18 t-gray txth-20">
                            <span className="t-18 t-gray fweight-600">คำเตือน : </span> 
                            <span>การลงทุนมีความเสี่ยง ผู้ลงทุนควรทำความเข้าใจลักษณะกองทุน นโยบายกองทุน เงื่อนไขผลตอบแทน </span>
                            <span className="t-18 t-skyblue t-underline">อ่านต่อ</span> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
