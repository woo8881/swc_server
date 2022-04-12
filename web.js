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



const nodemailer = require("nodemailer");
const aws = require("@aws-sdk/client-ses");


process.env.AWS_ACCESS_KEY_ID = 'EXAMPLEIDKEY'; // aws access key
process.env.AWS_SECRET_ACCESS_KEY = 'EXAMPLEACCESSKEYPASSWORD' // aws secret access key

router.post('/mail', (req, res, next) => {
  //Request body에 실어져 있는 데이터 가져오기
  const userEmail = req.params.userEmail;
  
  //해시코드 생성
  const code = crypto.randomBytes(3).toString('hex');
	//DB에 해당 유저 튜플에 코드 값 UPDATE 코드 .. 생략
  
  //발송 할 ejs 준비
  let emailTemplate;
  ejs.renderFile('/views/index.ejs',  //ejs파일 위치 
                 { email: userEmail, code: code}, (err, data) => { //ejs mapping
            if (err) { console.log(err) }
            emailTemplate = data;
      });
  //ses ready
  const ses = new aws.SES({
        apiVersion: "2010-12-01",
        region: "us-east-1", //AWS SES Region 수정
  });
    // create Nodemailer SES transporter 
    // 이 때 process.env에 AWS_ACCESS_KEY_ID와 AWS_SECRET_ACCESS_KEY를 확인한다.
  let transporter = nodemailer.createTransport({ 
        SES: { ses, aws },
  });
    // send mail
  transporter.sendMail(
      {
          from: "닉네임<welcome@example.com>",
          to: target,
          subject: "[example] 회원가입 인증메일 입니다.",
          html: emailTemplate,
      },
      (err, info) => {
          if (err) {
              console.log(err);
              res.status(500).json(err);
          }
      }
  );
  res.status(200).json({
    code: 200,
	message: '발송 성공'
  });
});




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