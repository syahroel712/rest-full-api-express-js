'use strict';

module.exports = function(app) {  
    var todoList = require('../controller/rider_controller');

    app.route('/').get(todoList.index);

    app.route('/riders').get(todoList.riders);
}
