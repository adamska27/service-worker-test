var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));


app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));

app.listen('8000', () => {
    console.log('The app listenning on port 8000');
});