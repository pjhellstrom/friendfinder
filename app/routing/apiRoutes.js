// Load data from api
var friends = require("../data/friends");

// Export API routes
module.exports = function(app) {

	// Get request to return a list of friends in JSON
	app.get('/api/friends', function(req, res) {
        res.json(friends);
	});

	// Post request to submit form data to server
	app.post('/api/friends', function(req, res) {
        
	});
};
