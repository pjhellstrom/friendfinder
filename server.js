// Import express
const express = require('express');
const bodyParser = require('body-parser');

// Init express
const app = express();

// Init middleware
// Body parser middleware
// app.use(express.json());
//
// app.use(bodyParser());
// Form submission middleware
app.use(express.urlencoded({ extended: true }));

// Set up link to RESTapi and import api routing file
require('./app/routes/apiRoutes')(app);
// Import html routing file
require('./app/routes/htmlRoutes')(app);

// Define port
// add process.env to look for process environment port used in deployed version
const PORT = process.env.PORT || 5000;

// Listen on a port, callback to log status
app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}`));