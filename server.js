const dotenv = require("dotenv");
const express = require("express");
const App = express();

// loading .env config
dotenv.config();

// Setting URL from .env config
const PORT = process.env.PORT || 3002;

// Used in Postman for testing
App.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is Online..."
    });
});

// Starting Server
App.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(` Server is listening on URL: ${PORT}`)
})