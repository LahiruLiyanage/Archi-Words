import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', function(req, res) {
    res.send('Hello from GET!');
});

app.post('/hello', function(req, res) {
    res.send('Hello, ' + req.body.name + ' from POST!');
})

app.listen(8000, function() {
    console.log('Express server is listening on port 8000');
});
