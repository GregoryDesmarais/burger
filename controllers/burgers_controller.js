var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all();

})

router.post("/api/burger", function(req, res) {

})

router.put("/api/burger/:id", function(req, res) {})

module.exports = router;