// Dependencies
var express = require("express");

// Create an express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up parsing functionality in express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing import
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
