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
const logger = require('./config/logger');

// app.use(((req, res, next)=>{
//   logger.info('로그 출력 test용 middleware');

//     logger.error('error 메시지');
//     logger.warn('warn 메시지');
//     logger.info('info 메시지');
//     logger.http('http 메시지');
//     logger.debug('debug 메시지');

//     next();
// }))

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

// app.get('/', function(req, res){
//   res.render('view')
// })

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');


// app.engine('html', require('ejs').renderFile);