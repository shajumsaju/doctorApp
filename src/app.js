const express = require('express')
const app = express()
// const url = require('url');
const fileUpload = require('./lib/index.js');
const bodyParser = require('body-parser')
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// environment variables
process.env.NODE_ENV = 'development';

// config variables
const config = require('./config.js');

app.get('/', (req, res) => {
    res.json(config.app_name);
});



app.listen(config.node_port, () => {
    console.log(`${config.app_name} listening on port ${config.node_port}`);
});


const helmet = require('helmet')
app.use(helmet())
app.use(fileUpload())
// app.set('port', process.env.PORT || 8989);
require('./db')
const index = require('./routes/index.js')
const routes = require('./routes')
// app.use('/', index);
app.use('/api', routes)
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app

