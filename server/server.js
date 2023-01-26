const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const LoginRoute = require('./Routes/loginRoute')
const RefreshRoute = require('./Routes/refreshRoute')
const mongoose = require("mongoose");
const accessTokenModel = require('./Models/accessTokenModel');

app.use(cors());
app.use(bodyParser.json());

const PORTURL = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is Online..."
    });
});

// connecting to mongoDB
mongoose.connect(process.env.DATABASE_URL, (err) => {
    if(err){
        console.error("Error: ", err.message);
    }
    else
        console.log("MongoDB Connection was Good!")
})

app.use('/accessTokenModel', accessTokenModel)

app.use("/v1/login", LoginRoute);
app.use("/v1/refresh", RefreshRoute)

app.listen(PORTURL, (err) => {
    if (err) console.log(err);
    console.log(` Server is listening on PORT: ${PORTURL}`)
})
