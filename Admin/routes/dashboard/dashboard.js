const express = require('express');
const router = express.Router();
var checkToken = require("../../checkToken");
const mongoClient = require('mongodb').mongoClient
var session = require('express-session');

router.get("/", (req, res) => {
    res.render("dashboard.hbs", {
        title: "Neelkanth Video Vision : Dashboard",
        dashboardActive: "active",
        script: "dashboardScript.js",
        style: 'chat.css'
    });
});

// router.get('/getAllMsgByStudioId' , (req , res) => {
//     db.collection('whatsapp_messages').
// })

module.exports = router;