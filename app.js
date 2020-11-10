var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
//var swaggerUi = require('swagger-ui-express');
//var swaggerDocument = require('./swagger.json');

var seed = require("./lib/seedStorageService");

var route = require("./lib/route");

var app = express();

var jsonParser = bodyParser.json();

seed();

app.use("/keyValueStore", jsonParser);

app.use("/keyValueStore", route);

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || config.PORT, () => {
    console.log(`app started on port ${process.env.PORT || config.PORT}`);
});