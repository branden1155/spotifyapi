const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv");
require('dotenv').config({path: __dirname + '/../.env'});
const LoginRoute = require('./Routes/loginRoute')

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Port url which is http://localhost:3000
const PORTURL = process.env.PORT || 3001

// For Testing on Postman
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is Online..."
    });
});

// Login route...
app.use("/v1/login", LoginRoute);

// Starting Server .... Takeoff!
app.listen(PORTURL, (err) => {
    if (err) console.log(err);
    console.log(` Server is listening on PORT: ${PORTURL}`)
})
