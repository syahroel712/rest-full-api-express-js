'use strict';

exports.ok = function (message, data) {  
    var json = {
        'status' : 200, 
        'message': message,
        'data': data
    };
    return json
}

exports.notFound = function (message, data) {  
    var json = {
        'status' : 404, 
        'message': message,
        'data': data
    };
    return json
}

exports.error = function (message, data) {  
    var json = {
        'status' : 503, 
        'message': message,
        'data': data
    };
    return json
}

exports.forbidden = function (message, data) {  
    var json = {
        'status' : 403, 
        'message': message,
        'data': data
    };
    return json
}

exports.notAllowed = function (message, data) {  
    var json = {
        'status' : 401, 
        'message': message,
        'data': data
    };
    return json
}