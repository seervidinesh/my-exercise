const express = require('express');
const router = express.Router();
var checkToken = require("../../checkToken");
const mongoClient = require('mongodb').mongoClient
var session = require('express-session');

router.get("/", (req, res) => {
    res.render("home.hbs", {
        title: "Neelkanth Video Vision",
        script: "homeScript.js"
    });
});

module.exports = router;