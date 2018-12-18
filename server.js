var express = require('express');

// create our app
var app = express();
var port = process.env.PORT || 8080;

// allow routs to accept JSON and urlcoded data format
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

// active app's html and api routs
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// have server listen on env.port or 8080
app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})