# FriendFinder

FriendFinder is a full-stack application which will pair up campatibale friends.

The application first take in results from users' surveys, then compare their answers with those from other users, fiand nally will display the name and picture of the user with the best overall match.

To handle routing I have used Express library.
* GET request on ```/``` and any non declared route will display home html page.
* GET request on ```/survey``` will display the survey html page.
* GET request on ```/api/friends``` route will display all the server's user in JSON format. 
* POST request on ```/api/friends``` route will result in posting a new user data to the server and finding a match friend for the new user.

To give it a test please find the deployed application here: [link to Heroku!](https://find-friend-01.herokuapp.com/)