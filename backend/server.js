require("dotenv").config();
const express = require("express");


const bodyParser = require("body-parser");
//import cors middleware
const cors = require('cors');

//import chat route
const chatRoutes = require('./routes/chat');

//initialise express app
const app = express();

app.use(express.json());
app.use(bodyParser.json());

//enable cors
app.use(cors({ origin: "http://localhost:3000" }));  // Change for production

//use chat route to handle api calls
app.use("/api", chatRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
