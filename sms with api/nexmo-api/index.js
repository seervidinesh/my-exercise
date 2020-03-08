const express = require('express')
const app = express()
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '7500431b',
    apiSecret: 'VzTSysVA43wfa9S2',
});

const from = 7877613144;
const to = 917014966646
const text = 'A text message sent using the Nexmo SMS API'


nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

app.listen(3000)