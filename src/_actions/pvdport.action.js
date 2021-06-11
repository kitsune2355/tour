// import { Base_API } from "../_constants/matcher";
// import axios from "axios";
// const { detect } = require('detect-browser');
// const browser = detect();

// export const PvdPortAction = {
//     MemberDetail,
// };

// function MemberDetail(lang) {
//     const headers = {
//         "language": '1',
//         "ip-address": '101.108.110.32',
//         "user-agent": `${browser.name},${browser.version}`,
//         "device": browser.os,
//         "Authorization": "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVT0JBTSBQcm92aWRlbnQgRnVuZCIsImp0aSI6ImY5ZDI2ZTgxLWJlMjktNDM1NS04YTQ2LWU3YWEyZGFkNDJmOSIsImlhdCI6IjQvMjIvMjAyMSA3OjE1OjEwIEFNIiwidXNlcm5hbWUiOiIwODkyMDAzMzMzIiwibWVtYmVyaWQiOiIwODkyMDAzMzMzIiwiZXhwIjoxNjE5NDM1NzEwLCJpc3MiOiJVT0JBTSBQcm92aWRlbnQgRnVuZCIsImF1ZCI6IlVPQkFNIFByb3ZpZGVudCBGdW5kIn0.QEDm82qATZHtTzSGKnPpVyeb7QqAob-qwW49of_82WI"
//     }
//     return axios.get(`${Base_API.uobam}/pvdapi/v1/PvdPort/MemberDetail`, { headers: headers }).then(res => {
//         return res.data;
//     }).catch(e => {
//         return "ErrorApi";
//     });
// }