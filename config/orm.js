var connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    insertOne: function(table, name, cb) {
        console.log(`Table: ${table}  ||  Burger Name: ${name}`)
        let queryString = `INSERT INTO ${table} (burger_name) VALUES ('${name}');`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: function(table, id, cb) {
        let queryString = `UPDATE ${table} SET devoured=1 WHERE id='${id}'`;
        console.log(queryString)
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
};

module.exports = orm;