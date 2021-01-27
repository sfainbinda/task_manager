const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({origin: "*"}), bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));

const tasksRoutes = require('./routes/tasks');
const meetingsRoutes = require('./routes/meetings');

app.use('/tasks', tasksRoutes);
app.use('/meetings', meetingsRoutes);

module.exports = app;