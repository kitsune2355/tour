import React from 'react'

const Place = () => {
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <strong style={{fontSize:"20px"}}>สถานที่ท่องเที่ยวยอดนิยม</strong>
                    <span>ดูเพิ่มเติม</span>
                </div>

                <div className="py-3 col-12 d-flex justify-content-between align-items-center" >
                        <button>ภาคกลาง</button>
                        <button>ภาคอีสาน</button>
                        <button>ภาคเหนือ</button>
                        <button>ภาคใต้</button>
                </div>

                <div className="col-12 py-3 slider" >
                    
                    <div className=" slide-i">
                        <div className="box"></div>
                        <img src="https://lh3.googleusercontent.com/proxy/1mfQAPsbMcyDGpVzwzIyW98Bu2Exl_IAogolm7Mw2R1iI0-vDAvkLEcDJlZg29QlbCOnxQxmX4LBq9OB8N3yzon5Mxyv-hGEe9Qtrn8Z0RwD6Z_5XrGyuQ" />
                        <p>กรุงเทพมหานคร</p>
                    </div>
                    <div className=" slide-i">
                        <div className="box"></div>
                        <img src="https://image.makewebeasy.net/makeweb/0/YS73enP9V/ExecutiveTravel/bridge.jpg" />
                        <p>กาญจนบุรี</p>
                    </div>
                    <div className=" slide-i">
                        <div className="box"></div>
                        <img src="https://pix10.agoda.net/geo/city/17764/2c47809b294284c0e10c56f099b98d60.jpg?s=1920x822" />
                        <p>นนทบุรี</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place
