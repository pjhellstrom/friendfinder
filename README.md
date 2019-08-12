# FriendFinder

FriendFinder is a web application that emulates a friend matching app based on a lowest-variance algorithm that is run on a set of responses from a user survey. It built on Node.js with an Express server/router.

### Requirements

* [Node.js](https://nodejs.org/) LTS (v10)

### Dependencies

* [Express](https://www.npmjs.com/package/express)

* [Path](https://www.npmjs.com/package/path)

### Launch

The application has been deployed at: [Heroku App](https://friendfinderbc19.herokuapp.com/)

To run locally, download the repo into a new directory run use the npm i command to install dependencies:

```console
# Install dependencies
$ npm i
```

Then start the server through node.js:
```console
# Initiate server
$ node server.js
```

You will see that a set of placeholder users have been stored in app/data/friends.

### How to

- After clicking the survey button on the start page, complete the form by completing the empty fields and answering the ten questions. The five answer choices for the questions each correspond to a numerical value that is used to calculate variances. 
- Submission of the form will route a post request that iterates through the users in the API and returns the most combatible user based on the minimum variance of scores. 

### Author

* Jonas Hellstrom

