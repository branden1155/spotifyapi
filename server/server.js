const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const LoginRoute = require('./Routes/loginRoute')
const RefreshRoute = require('./Routes/refreshRoute')

app.use(cors());
app.use(bodyParser.json());

const PORTURL = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is Online..."
    });
});

app.use("/v1/login", LoginRoute);
app.use("/v1/refresh", RefreshRoute)

app.listen(PORTURL, (err) => {
    if (err) console.log(err);
    console.log(` Server is listening on PORT: ${PORTURL}`)
})
