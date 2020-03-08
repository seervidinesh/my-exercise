var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var authToken = "b3b40691cfbe19a30e9557e935738d2e"; // Your Auth Token from www.twilio.com/console
var accountSid = "AC95d45bf3ae0ea163e2f699e84bc61f3e"; // Your Account SID from www.twilio.com/console
const client = require("twilio")(accountSid, authToken);
var port = process.env.PORT || 3000;
app.use(express.static("public"));
var jsonParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({ extended: true });
var sender_id_TEXT = "+12056199473";
var sender_id_WP = "whatsapp:+14155238886";

// Home Route

app.get("/", (req, res) => {
    res.render("home.hbs", {
        title: "Twilio Whatsapp Messing App.",
        home: "active"
    });
});

app.get("/whatsapp-msg", (req, res) => {
    res.render("sendWhatsappMSG.hbs", {
        title: "Twilio Whatsapp Messing App.",
        whatsappMsg: "active"
    });
});

// Send Whatsapp Message using API

app.post("/sendWhatsappSMS", urlEncodedParser, (req, res) => {
    client.messages
        .create({
            //mediaUrl: [req.body.mediaUrl],
            from: sender_id_WP,
            body: req.body.msg,
            to: `whatsapp:+91${req.body.phoneNumber}`
        })
        .then(message => {
            console.log(message.sid);
            res.json(message);
        });
});

// Send Text Message using API

app.get("/sendTextSMS", (req, res) => {
    client.messages
        .create({
            from: sender_id_TEXT,
            to: "+917877613144",
            body: "Hello From Twilio SandBox"
        })
        .then(message => {
            console.log(message.sid);
            res.json(message);
        })

    .done();
});

app.listen(port, () =>
    console.log(`Express server is running at port : ${port}`)
);