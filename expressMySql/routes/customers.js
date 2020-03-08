const express = require("express");
const router = express.Router();
const connection = require("../connection");

router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM customers";
  connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
router.get("/filter", (req, res) => {
  let sqlQuery = "SELECT * FROM customers WHERE state='CT'";
  connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
