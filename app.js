var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var KeyValuePair = require("./lib/KeyValuePair");

var route = require("./lib/route");

var app = express();

var jsonParser = bodyParser.json();

app.use("/keyValueStore", jsonParser);

app.use("/keyValueStore", route);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(config.PORT, () => {
    console.log(`app started on port ${config.PORT}`);
});