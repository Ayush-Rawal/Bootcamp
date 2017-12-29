const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const conf = require('config');

const app = express();

const port = conf.get('port');
const url = `${conf.get('URI')}:${port}`;
const dbPort = conf.get('dbPort');
const dbName = conf.get('dbName');
const dbURL = `${conf.get('dbURI')}:${dbPort}/${dbName}`;

app.use(cors())
    // mongoose.connect(dbURL);
console.log(dbURL);
const db = mongoose.connection

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function spawnNotification(body, icon, title) {
    const options = {
        body: body,
        icon: icon
    };
    const n = new Notification(title, options);
}

app.listen(port, () => console.log(`Server started at port ${port}`));