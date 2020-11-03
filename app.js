var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
var seed = require("./lib/seedStorageService");

var route = require("./lib/route");

var app = express();

var jsonParser = bodyParser.json();

seed();

app.use("/keyValueStore", jsonParser);

app.use("/keyValueStore", route);

app.listen(process.env.PORT || config.PORT, () => {
    console.log(`app started on port ${process.env.PORT || config.PORT}`);
});