const express = require('express');
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");
const jwt = require('jsonwebtoken');

var url = require('url');
var fs = require('fs');








const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 



app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

sequelize.sync();
app.use('/', router);


http.createServer(app).listen(5005, () => {
  console.log("Express Server Start");
});