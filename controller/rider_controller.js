'use strict';

var api = require('../api');
var connection = require('../config/conn');

// untuk menampilkan semua data
exports.riders = function (req, res) {
    connection.query("SELECT * FROM tb_rider", function (error, rows) { 
        if(error){
            res.json(api.error('Error', null));
            console.log(error);
        }else{
            var message = 'Success';
            res.json(api.ok(message, rows))
        }
    });
}   

// untuk menampilkan salah satu data berdasarkan id
exports.findRiders = function (req, res) {  
    var rider_id = req.params.rider_id;

    connection.query("SELECT * FROM tb_rider WHERE rider_id = ?", [rider_id],function (error, row, field) { 
        if(error){
            console.log(error);
        }
    })
}



exports.index = function (req, res) { 
    res.json(api.ok("Success", "Hello from the Node JS RESTful side"))
};
