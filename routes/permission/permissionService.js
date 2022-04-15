const sequelize = require("../../models").sequelize;
var moment = require("moment");
const {
  Likes,
  Contest,
  User,
  Comment,
  Mail,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
const mailer = require("../../config/mail");


module.exports = {
  sendMail: (email) => {
    return new Promise((resolve) => {
      var generateRandom = function (min, max) {
        var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return ranNum;
      };
      const number = generateRandom(111111, 999999);

      let emailParam = {
        toEmail: email, // 수신할 이메일

        subject: "명지전문대 소프트웨어콘텐츠과 회원가입 인증코드", // 메일 제목

        text: number, // 메일 내용
      };
    mailer.sendGmail(emailParam);
   
      if(emailParam !== null){
        Mail.create({
            mail_id: email,
            mail_auth: number
          }).then((result) => {
              console.log(result)
            result !== null ? resolve(result) : resolve(false);
          });
      }else{
          Mail.update(
              {
                where:{mail_id:email.mail_id}
            }
                )
      }
   

      
      // emailParam !== null ? resolve(emailParam) : resolve(false);
    });
  },

  checkMail: (body) => {
      return new Promise((resolve)=>{
        Mail.update(
            {
              mail_checkAuth: body.mail_checkAuth,
            },
            {
              where: {
                mail_id: body.mail_id,
              },
            }
          ).then((result)=>{
              if(result)
              console.log(result)
              result !== null ? resolve(result) : resolve(false);
          })
      })
  },
};
