const express = require('express');
const friends = require('../data/Friends');


module.exports = function(app) {
    // use res.json() to return a json file with all members
    app.get('/api/friends', (req, res) => res.json(friends) );

    // Post new friend
    app.post('/api/friends', (req, res) => {
        
        var newFriend = req.body;

        for (let i = 0; i < newFriend.values.length; i ++) {
            newFriend.values[i] = parseInt(newFriend.values[i]);
        }

        var newFriendValues = req.body.values;
        var variance = 0;
        var tempFriends = [];
        var tempValues = [];

        var matchName = '';
        var matchImage = '';
            
        // Loop through friends to find match
        for (let friend of friends) {
            
            // Save friend name to temp array
            tempFriends.push(friend.name);

            for (let i = 0; i < friend.values.length; i++) {
                variance += Math.abs(friend.values[i] - newFriendValues[i]);
            }
            // Save variance to temp array
            tempValues.push(variance);
        }

        console.log(`tempFriends[indexOf(Math.min(tempValues))]: ${tempFriends[tempValues.indexOf(Math.min(...tempValues))]}`);

        // Check lowest variance and save name
        matchName = tempFriends[tempValues.indexOf(Math.min(...tempValues))];

        console.log(matchName);

        // // Find image for user
        matchImage = friends[tempValues.indexOf(Math.min(...tempValues))].image

        console.log(`Match image: ${matchImage}`);

        // Reset temp arrays
        tempFriends = [];
        tempValues = [];

        // Add new friend to api
        friends.push(newFriend);

        // return the match to DOM
        res.json({name: matchName, image: matchImage});

    });

};