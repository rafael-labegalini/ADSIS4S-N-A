const express = require('express');
const app = express();

app.use(express.json())

app.get('/user', function (req, res) {
    res.send('Users');
});

app.post('/user', function (req, res) {
    const body = req.body;
    res.json(body);
});

app.put('/user/:id', function (req, res) {
    res.send(`Update user ${req.params.id}`);
});

app.listen(3000, function () {
    console.log('The server is running on pot 3000');
});