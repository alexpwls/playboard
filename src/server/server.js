const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(('dist/')));

const env_key_test = process.env.ENV_KEY_TEST;

let projectData = {};

app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

module.exports = app;