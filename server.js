var express = require('express'),
    index = require('./routes/index'),
    commands = require('./routes/commands'),
    path = require('path');

console.log('Starting Server...')

var app = express();

app.configure(function () {
        app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.set('view options', {
            layout: false
        });
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(app.router);
});

app.get('/api/help', function(req, res) {
    res.send([{name:'command'}, {name:'status'}]);
});
app.get('/api/status', function(req, res) {
    res.send("status OK");
});
app.post('/api/command', commands.executeCommand);

app.get('/partials/:name', index.partials);
app.get('*', index.index);

app.listen(process.env.PORT,process.env.IP);
console.log('Listening on port ' + process.env.PORT + '...');
