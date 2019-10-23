var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        })
    },
    addBurger: function(table, burgerName, cb) {
        orm.insertOne(table, burgerName, function(result) {
            cb(result.affectedRows);
        })
    },
    eatBurger: function(table, id, cb) {
        orm.updateOne(table, id, function(result) {
            cb(result.affectedRows);
        })
    }
};

module.exports = burger;