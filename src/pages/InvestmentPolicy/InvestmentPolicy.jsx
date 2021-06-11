import React from "react";
import "./investmentpolicy.css";

import { PvdPortAction } from "../../_actions";
import { encryption } from "../../_encryption";

// import '@progress/kendo-theme-default/dist/all.css';
// import {
//     Chart,
//     ChartTitle,
//     ChartLegend,
//     ChartArea,
//     ChartTooltip,
//     ChartSeries,
//     ChartSeriesItem,
//     ChartSeriesLabels
// } from '@progress/kendo-react-charts';
import {Doughnut, Chart} from 'react-chartjs-2';


import SweetAlert from "react-bootstrap-sweetalert";
import ProgressBar from "@ramonak/react-progress-bar";
import CanvasJSReact from '../Lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class InvestmentPolicy extends React.Component {

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

    onDetail(){
        const { lang, token } = this.state
        window.location.href = `${process.env.PUBLIC_URL}/webview/InvestmentPolicyDetail/${lang}/${token}`;
    }

    onOpenDetail(){
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
                    <div className="t-26 t-blue t-bold">
                        G-40
                    </div>
                    <div className="t-20 t-skyblue txth-20">
                        นโยบายทรัพย์เสถียร
                    </div>
                </div>
            </SweetAlert>
            </div>
        )
        this.setState({ onOpenAlet : alert }) 
    }


    render() {
        var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
        Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
          draw: function() {
            originalDoughnutDraw.apply(this, arguments);
            
            var chart = this.chart;
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
        
            var fontSize = (height / 220).toFixed(2);
            ctx.font = fontSize + "em PSLbold";
            ctx.textBaseline = "middle";
        
            // <div className="t-28 t-skyblue t-bold txth-20">แผนการลงทุน : DIY</div>
            var text = "แผนการลงทุน : DIY",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2.5;
            ctx.fillStyle = '#316cb8';
            ctx.fillText(text, textX, textY);
          }
        });
        const { onOpenAlet } = this.state
        return (
            <div className="container py-3">
                {onOpenAlet}
                <div className="row py-2">
                    <div className="col-12">
                        {/* <div className="summaryfund-chartinside">
                            <div className="t-28 t-skyblue t-bold txth-20">แผนการลงทุน : DIY</div>
                        </div> */}
                        <div className="summaryfund-chart">
                        <div className="graph-legend">
                                <Doughnut
                                    data={{
                                    labels: ['MO1TF', 'MO2FI', 'MO03MS', 'MO5SAS100', 'M12UGIS'],
                                    datasets: [
                                        {
                                        label: '# of votes',
                                        data: [10, 5, 20, 5, 10],
                                        backgroundColor: [
                                            '#3b9ada',
                                            '#6ad4ff',
                                            '#d6f0f7',
                                            '#316cb8',
                                            '#3999cd',
                                        ],
                                        borderWidth: 0,

                                        }
                                    ],
                                    }}
                                    height={600}
                                    width={800}
                                    options={{
                                        cutoutPercentage: 65,
                                        legend: {
                                            position: 'bottom',
                                            align: 'start',
                                            labels: {
                                                font: {
                                                    size: 14,
                                                    family: 'PSL'
                                                },
                                                boxWidth: 10,
                                                usePointStyle: true,
                                            }
                                        },
                                    }}
                                />
                            </div>
                            {/* <CanvasJSChart 
                                options = {options}
                            /> */}
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <a className="col-12 investmentpolicy-card mb-3" onClick={() => this.onDetail()}>
                        <div className="d-flex txth-22">
                            <div className="t-22 t-blue t-bold">MO1TF</div>
                            <a className="ml-auto my-auto" onClick={() => this.onOpenDetail()}>
                                <img
                                    src={process.env.PUBLIC_URL +"/images/info.png"} 
                                    className="img-fluid"
                                    alt="uob"
                                    width="15"
                                />
                            </a>
                        </div>
                        <div className="investmentpolicy-line mb-1 mt-2"></div>
                        <div className="t-18 t-skyblue">นโยบาย 1</div>
                        <div className="d-flex txth-20 mb-2">
                            <div className="t-20 t-graydark">สัดส่วนเงินนำส่งใหม่</div>
                            <div className="ml-auto t-20 t-blue t-bold">10%</div>
                        </div>
                        <ProgressBar 
                            completed={60} 
                            height="10px"
                            bgColor="#3b9ada"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        />
                    </a>
                    <div className="col-12 investmentpolicy-card mb-3">
                        <div className="d-flex txth-22">
                            <div className="t-22 t-blue t-bold">MO2FI</div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/info.png"} 
                                    className="img-fluid"
                                    alt="uob"
                                    width="15"
                                />
                            </div>
                        </div>
                        <div className="investmentpolicy-line mb-1 mt-2"></div>
                        <div className="t-18 t-skyblue">นโยบาย 1</div>
                        <div className="d-flex txth-20 mb-2">
                            <div className="t-20 t-graydark">สัดส่วนเงินนำส่งใหม่</div>
                            <div className="ml-auto t-20 t-blue t-bold">5%</div>
                        </div>
                        <ProgressBar 
                            completed={60} 
                            height="10px"
                            bgColor="#6ad4ff"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        />
                    </div>
                    <div className="col-12 investmentpolicy-card mb-3">
                        <div className="d-flex txth-22">
                            <div className="t-22 t-blue t-bold">MO03MS</div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/info.png"} 
                                    className="img-fluid"
                                    alt="uob"
                                    width="15"
                                />
                            </div>
                        </div>
                        <div className="investmentpolicy-line mb-1 mt-2"></div>
                        <div className="t-18 t-skyblue">นโยบาย 1</div>
                        <div className="d-flex txth-20 mb-2">
                            <div className="t-20 t-graydark">สัดส่วนเงินนำส่งใหม่</div>
                            <div className="ml-auto t-20 t-blue t-bold">20%</div>
                        </div>
                        <ProgressBar 
                            completed={60} 
                            height="10px"
                            bgColor="#d6f0f7"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        />   
                    </div>
                    <div className="col-12 investmentpolicy-card mb-3">
                        <div className="d-flex txth-22">
                            <div className="t-22 t-blue t-bold">MO5SAS100</div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/info.png"} 
                                    className="img-fluid"
                                    alt="uob"
                                    width="15"
                                />
                            </div>
                        </div>
                        <div className="investmentpolicy-line mb-1 mt-2"></div>
                        <div className="t-18 t-skyblue">นโยบาย 1</div>
                        <div className="d-flex txth-20 mb-2">
                            <div className="t-20 t-graydark">สัดส่วนเงินนำส่งใหม่</div>
                            <div className="ml-auto t-20 t-blue t-bold">5%</div>
                        </div>
                        <ProgressBar 
                            completed={60} 
                            height="10px"
                            bgColor="#316cb8"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        />
                    </div>
                    <div className="col-12 investmentpolicy-card mb-3">
                        <div className="d-flex txth-22">
                            <div className="t-22 t-blue t-bold">M12UGIS</div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/info.png"} 
                                    className="img-fluid"
                                    alt="uob"
                                    width="15"
                                />
                            </div>
                        </div>
                        <div className="investmentpolicy-line mb-1 mt-2"></div>
                        <div className="t-18 t-skyblue">นโยบาย 1</div>
                        <div className="d-flex txth-20 mb-2">
                            <div className="t-20 t-graydark">สัดส่วนเงินนำส่งใหม่</div>
                            <div className="ml-auto t-20 t-blue t-bold">10%</div>
                        </div>
                        <ProgressBar 
                            completed={60} 
                            height="10px"
                            bgColor="#3999cd"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        /> 
                    </div>
                </div>
            </div>
        );
    }
}
