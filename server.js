//===========
//DEPENDICIES
//===========
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//=====================
//EXPRESS CONFIGURATION
//=====================
const app = express();

//============
//INITIAL PORT
//============
const PORT = process.env.PORT || 8080;

//==============================
//EXPRESS APP DATA PARSING SETUP
//==============================
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//=============================================
//ROUTE FILES. MAP FOR USER VISITS AND REQUESTS
//=============================================
require("./app/routing/apiRoutes")(app); //passes express() into the module.exports function in apiRoutes.js
require("./app/routing/htmlRoutes")(app);

//===============================
//LISTENER THAT STARTS THE SERVER
//===============================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
