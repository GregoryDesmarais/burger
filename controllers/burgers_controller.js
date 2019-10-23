var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data);
        res.render("index", { burger: data })
    });

})

router.post("/api/burger", function(req, res) {
    console.log(`Adding ${req.body.name} to burgers table`);
    burger.addBurger("burgers", req.body.name, function(result) {
        res.json(result);
    })
})

router.put("/api/burger/:id", function(req, res) {
    console.log(`Devouring burger id: ${req.params.id}`);
    burger.eatBurger("burgers", req.params.id, function(result) {
        res.json(result);
    })
})

module.exports = router;