import React from "react";
import "./transactionhistory.css";

import SweetAlert from "react-bootstrap-sweetalert";

export class TransactionHistory extends React.Component {

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

    render() {
        const { onOpenAlet } = this.state
        return (
            <div className="container py-3">
                {onOpenAlet}
                <div className="row py-2">
                    <div className="col-12">
                        <div className="d-flex">
                            <div className="d-flex">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/doc.png"} 
                                    className="img-fluid mr-2"
                                    alt="uob"
                                    width="23"
                                />
                                <span className="t-20 t-graydark">รายงานสมาชิกกองทุน เดือนกันยายน 2562</span>
                            </div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </div>
                        <div className="transactionhistory-line my-3"></div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/doc.png"} 
                                    className="img-fluid mr-2"
                                    alt="uob"
                                    width="23"
                                />
                                <span className="t-20 t-graydark">รายงานสมาชิกกองทุน เดือนสิงหาคม 2562</span>
                            </div>
                            <div className="ml-auto my-auto">
                                <img
                                    src={process.env.PUBLIC_URL +"/images/arrowrightblue.png"} 
                                    className="img-fluid summaryfund-arrowlist"
                                    alt="uob"
                                    width="10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
