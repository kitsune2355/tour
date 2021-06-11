import React from "react";
import "./investmentpolicy.css";

import { PvdPortAction } from "../../_actions";
import { encryption } from "../../_encryption";
import {Doughnut, Chart} from 'react-chartjs-2';


import SweetAlert from "react-bootstrap-sweetalert";
import ProgressBar from "@ramonak/react-progress-bar";
import CanvasJSReact from '../Lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class InvestmentPolicyDetail extends React.Component {

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
                    <div className="t-36 t-blue t-bold txth-34">
                        G-40
                    </div>
                    <div className="t-24 t-skyblue txth-20">
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
                textY = height / 2.3;
            ctx.fillStyle = '#316cb8';
            ctx.fillText(text, textX, textY);
          }
        });

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
				indexLabel: "{y}' %'",
				yValueFormatString: "#,###''",
				dataPoints: [
                    { name: "MO1TF", y: 100, color: "#3b9ada"  },
				]
			}]
        }
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
                                    labels: ['MO1TF'],
                                    datasets: [
                                        {
                                        label: '# of votes',
                                        data: [10],
                                        backgroundColor: [
                                            '#0d284f',
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
                                        tooltips: {
                                            enabled: true,
                                            custom: null,
                                            mode: 'nearest',
                                            position: 'average',
                                            intersect: true,
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            titleFontStyle: 'bold',
                                            titleSpacing: 2,
                                            titleMarginBottom: 6,
                                            titleFontColor: '#fff',
                                            titleAlign: 'left',
                                            bodySpacing: 2,
                                            bodyFontColor: '#fff',
                                            bodyAlign: 'left',
                                            footerFontStyle: 'bold',
                                            footerSpacing: 2,
                                            footerMarginTop: 6,
                                            footerFontColor: '#fff',
                                            footerAlign: 'left',
                                            yPadding: 6,
                                            xPadding: 6,
                                            caretPadding: 2,
                                            caretSize: 5,
                                            cornerRadius: 6,
                                            multiKeyBackground: '#fff',
                                            displayColors: true,
                                            borderColor: 'rgba(0,0,0,0)',
                                            borderWidth: 0
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
                    <div className="col-12 investmentpolicy-card mb-3">
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
                            completed={100} 
                            height="10px"
                            bgColor="#0d284f"
                            baseBgColor="#ececec"
                            isLabelVisible={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
