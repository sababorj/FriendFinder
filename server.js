var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended : true }))

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})