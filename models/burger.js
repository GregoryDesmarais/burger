var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll()
    },
    addBurger: function() {

    },
    eatBurger: function() {

    }
};

module.exports = burger;