const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'hbs');

// app.use()



app.use(express.static(__dirname + '/videos'));

mongoose.connect('mongodb://localhost:27017/temp', { useNewUrlParser: true }, () => {
    console.log('connected to database');
});

app.get('/', (req, res) => {

    res.render('home.hbs', { 'videoSrc': 'honey.mp4' });

});


app.listen(3000, () => {
    console.log('server started on port number: 3000');
});