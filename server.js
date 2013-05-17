var express = require('express'),
    browserify = require('browserify-middleware'),
    app = express();

app.use(express.static('app'));
app.get('/app.js', browserify('app/js/index.js'));
app.listen(4000);
