const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const rider_controller = require('./controller/rider_controller');

app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());


var rider_routes = require('./routes/rider_routes')
rider_routes(app);

app.listen(port);

console.log('Learn Node JS http://localhost:' + port)