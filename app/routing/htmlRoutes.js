var path = require('path');

module.exports = function (app) {
    // this rount is our home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //this rout is the survey page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //this rout will take users to home page if the rout they request does not exist
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

}