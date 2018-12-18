var friendsData = require('../data/friends');

module.exports = function(app){

    // get on this rout shows all the friends store in the application 
    app.get('/api/friends', (req,res) => {
        res.json(friendsData);
    })

    // post on this rout return a friend match who has the closest score to the posted person
    app.post('/api/friends', (req,res) => {
        // find the closest score match
        var totalScores = []; 
        var matchFriend = {}
        for(var i=0; i < friendsData.length; i++){
            var score = 0;
            for(var j=0; j < 10 ; j++){
                diff = Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
                score += diff;
            }
            totalScores.push(score);
            var match = Math.min.apply(null, totalScores);
            matchFriend = friendsData[totalScores.indexOf(match)]
        }
        // return the match data
        res.json(matchFriend)
        // add new data to friends array
        friendsData.push(req.body)
    })
}