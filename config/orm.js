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
        let queryString = `INSERT INTO ${table} VALUES (${name});`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, id) {
        let queryString = `UPDATE ${table} VALUES (burger_name) WHERE id='${id}'`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;

        })
    }
};

module.exports = orm;