const express = require('express');
const router = express.Router();
var checkToken = require("../../checkToken");
const mongoClient = require('mongodb').mongoClient
var session = require('express-session');

router.get("/", checkToken, (req, res) => {
    res.render("account.hbs", {
        title: "Neelkanth Video Vision : Account",
        accountActive: "active"
    });
});


module.exports = router;