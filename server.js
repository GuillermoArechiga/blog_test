const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/blog', (req, res) => {
    res.send('Hello blog');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});

mongoose.connect('mongodb+srv://guillermoarechigaav:<password>@blogdev.genoslg.mongodb.net/?retryWrites=true&w=majority')