// var crypto = require('crypto');

// export const encryption = {
//     decryptedData,
// }

// function decryptedData(data){
//     const ENC_KEY = "nilecon";
//     const IV = "NEONSILICON_-_NC";
//     const key = crypto.createHash('sha256').update(String(ENC_KEY)).digest('hex').substr(0, 32);
//     var decipher = crypto.createDecipheriv('aes-256-cbc', key, IV);
//     var dec = decipher.update(data,'base64','utf-8');
//     dec += decipher.final('utf-8'); 
//     var convertData = JSON.parse(dec);
//     return convertData;
// }
