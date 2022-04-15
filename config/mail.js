const nodemailer = require('nodemailer');
const senderInfo = require('./senderInfo.json');
const ejs = require('ejs');
const crypto = require("crypto");
// process.env.AWS_ACCESS_KEY_ID = 'EXAMPLEIDKEY'; // aws access key
// process.env.AWS_SECRET_ACCESS_KEY = 'EXAMPLEACCESSKEYPASSWORD' // aws secret access key
// 메일발송 객체
const mailSender = {
  
  // 메일발송 함수
  sendGmail: function (param) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',   // 메일 보내는 곳
      prot: 587,
      host: 'smtp.gmlail.com',  
      secure: false,
      html: emailTemplate,
      requireTLS: true ,
      auth: {
        user: senderInfo.user,  // 보내는 메일의 주소
        pass: senderInfo.pass   // 보내는 메일의 비밀번호
      }
    });
    // 메일 옵션
    var mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      text: '인증번호'+ param.text // 메일 내용
      
    };
    let emailTemplate;
  ejs.renderFile('/views',  //ejs파일 위치 
                 { email: userEmail, code: code}, (err, data) => { //ejs mapping
            if (err) { console.log(err) }
            emailTemplate = data;
      });
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }
}

module.exports = mailSender;