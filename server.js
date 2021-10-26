const express = require('express'); //Line 1
const db = require('./mysql');
const bodyParser = require("body-parser");
db.connect();
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a POST route
app.post('/save', (req, res) => { //Line 9
    console.log(req.body);
    db.saveResult(req.body);
});

