const express = require('express');
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");
const jwt = require('jsonwebtoken');
const app = express();

var path = require('path');

var url = require('url');
var fs = require('fs');





app.use(express.urlencoded({extended: false}));
app.use(express.json()); 


app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

sequelize.sync();
app.use('/', router);

//파일 있는지 보는거

// fs.readdir(
//   "/home/hosting_users/bcd1031/apps/bcd1031_swc/images",
//   function (error, filelist) {
//     console.log(filelist);
//   }
// )
// 

http.createServer(app).listen(8001, () => {
  console.log("Express Server Start");
});

app.use(
  "/home/hosting_users/bcd1031/apps/bcd1031_swc/images",
  express.static('/home/hosting_users/bcd1031/apps/bcd1031_swc/images')
);

app.get('/', (req, res) => {
  res.render('index')
})

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');


