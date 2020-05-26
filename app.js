const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

// Middleware
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('we are at home');
})

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

// how to start listening to the server
app.listen(1000);