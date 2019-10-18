var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll(function(data) {
            cb(data);
        })
    },
    addBurger: function() {

    },
    eatBurger: function() {

    }
};

module.exports = burger;