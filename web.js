const express = require('express');
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");
const jwt = require('jsonwebtoken');
const app = express();
var static = require('serve-static')
var path = require('path');

var url = require('url');
var fs = require('fs');

global.logger || (global.logger = require('./config/logger'));  // → 전역에서 사용
const morganMiddleware = require('./config/morganMiddleware');
app.use(morganMiddleware);  // 콘솔창에 통신결과 나오게 해주는 것


app.use(express.urlencoded({extended: false}));
app.use(express.json()); 


app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

sequelize.sync();
app.use('/', router);


const io = require("socket.io")(httpServer);
console.log('socket.io 요청을 받아들일 준비가 되었습니다.');

io.on("connection", (socket) => {
  console.log('connection info : ', socket.request.connection._peername);
});
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

app.use(
  "/home/hosting_users/bcd1031/apps/bcd1031_swc/logs",
  express.static('/home/hosting_users/bcd1031/apps/bcd1031_swc/logs')
);

app.get('/', function(req, res){
  res.render('view')
})

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');


// app.engine('html', require('ejs').renderFile);