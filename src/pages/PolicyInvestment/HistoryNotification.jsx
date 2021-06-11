import React from 'react'
import Header from './header'

const HistoryNotification = () => {
    return (
        <div>
            <Header
              titlehead = "รายงานผู้จัดการกองทุน"
            />

            <div className="container-fluid">
                <div className="row">
                <div className="col-12" style={{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px 0"}}>
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="">
                            <img src="/uob/doc-02-02.png"/>
                            <span style={{paddingLeft:"15px"}}>
                                รายงานสมาชิกกองทุน เดือนกันยายน 2563
                            </span>
                        </div>

                        <div className="">
                            <img src="/uob/selet.png" alt="" />
                        </div>
                    </div>

                </div>

                <div className="col-12" style={{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px 0"}}>
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="">
                            <img src="/uob/doc-02-02.png"/>
                            <span style={{paddingLeft:"15px"}}>
                                รายงานสมาชิกกองทุน เดือนสิงหาคม 2562
                            </span>
                        </div>

                        <div className="">
                            <img src="/uob/selet.png" alt="" />
                        </div>
                    </div>

                </div>
                </div>
                
            </div>
        </div>
    )
}

export default HistoryNotification
