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

// const makeFolder=(dir)=>{
//   if(!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
//     console.log(dir)
//   }
// }



// const logger = require('./config/logger'); 
// const morgan = require("morgan"); 

// app.use(((req, res, next) => {
//     logger.info('로그 출력 test용 middleware');

//     logger.error('error 메시지');
//     logger.warn('warn 메시지');
//     logger.info('info 메시지');
//     logger.http('http 메시지');
//     logger.debug('debug 메시지');

//     next();
// }));



// /**********로거 출력용 logger, morgan**********/
// global.logger || (global.logger = require('./config/logger'));  // → 전역에서 사용
// const morganMiddleware = require('./config/morganMiddleware');
// app.use(morganMiddleware);  // 콘솔창에 통신결과 나오게 해주는 것
// /**********로그인 세션 관리**********/
// // const session = require('express-session');
// // const passport = require('passport');
// // const passportConfig = require('passport');
// /**********라우트 목록**********/
// // const apiRoute = require('./routes/index.js');
// // 생략... 대충 api router설정해주는 부분임!

// // 반드시 session이후에 passport.initialize()와 passport.session()이 위치해야 합니다.
// // app.use(session({
// //     secret: 'hafProject',   //세션 암호화
// //     resave: false,  //세션을 항상 저장할지 여부를 정하는 값. (false 권장)
// //     saveUninitialized: true ,   //초기화되지 않은채 스토어에 저장되는 세션
// //     // cookie: { secure: false, maxAge: 60000  },
// // }));

// app.use('/uploads', express.static('uploads')); //uploads 폴더로 이동

// // app.use(passport.initialize());
// // app.use(passport.session());
// // passportConfig(passport);

// app.use(express.json()); // json으로 받아들인 정보를 분석함
// // 아래 옵션이 false면 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하고, true면 qs 모듈을 사용하여 쿼리스트링을 해석한다
// app.use(express.urlencoded({ extended: true }));

// 생략... 대충 api router설정해주는 부분임!

// app.listen(port, () => {
//     logger.debug(`SERVER ON ... Express is running on http:localhost:${port}`);
// });



// const morgan = require('morgan');
 
// app.use(morgan('dev'));


function mkdir( dirPath ) {
  const isExists = fs.existsSync( dirPath );
  if( !isExists ) {
      fs.mkdirSync( dirPath, { recursive: true } );
  }
}

// winston.info(message)


app.use(express.urlencoded({extended: false}));
app.use(express.json()); 


// makeFolder('images')
app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

sequelize.sync();
app.use('/', router);

http.createServer(app).listen(8001, () => {
  mkdir('/home/hosting_users/bcd1031/apps/bcd1031_swc/images')
  // fs.mkdirSync("/hw");
    // if(!fs.existsSync("/home/hosting_users/bcd1031/apps/bcd1031_swc/images")){
    //   fs.mkdirSync("/home/hosting_users/bcd1031/apps/bcd1031_swc/images");
    // }
  // fs.mkdirSync("/home/hosting_users/bcd1031/apps/bcd1031_swc/images");
//  let fas = makeFolder("/home/hosting_users/bcd1031/apps/bcd1031_swc/images")
//   console.log(fas)
  // console.log(path.resolve(__dirname, '/home/hosting_users/bcd1031/apps/bcd1031_swc/images'));
  // console.log(makeFolder)
  // console.log(__dirname)
  console.log("Express Server Start");
});




app.get('/', (req, res) => {
  res.render('index')
})

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');