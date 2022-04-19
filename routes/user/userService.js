const sequelize = require("../../models").sequelize;
const { resolveInclude } = require("ejs");
const {
  User,
  Likes,
  Member,
  Board,
  Team,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
const nodemailer = require("nodemailer");
const res = require("express/lib/response");
const { resolve } = require("app-root-path");
const mailer = require("../../config/mail");
const ejs = require('ejs');

//Todo social connet login Api will create
module.exports = {
  sendMail: (email) => {
    return new Promise((resolve) => {
      var generateRandom = function (min, max) {
        var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return ranNum;
      };
      const code = generateRandom(111111, 999999);

      let emailTemplate;
    ejs.renderFile('/home/hosting_users/bcd1031/apps/bcd1031_swc/views/register.ejs',  //ejs파일 위치 
                   { email: email, code: code}, (err, data) => { //ejs mapping
              if (err) { console.log(err) }
              emailTemplate = data;
        });

      let emailParam = {
        toEmail: email, // 수신할 이메일

        subject: "명지전문대 소프트웨어콘텐츠과 회원가입 인증코드", // 메일 제목

        text: code, // 메일 내용

        html: emailTemplate
      };
      mailer.sendGmail(emailParam);
      emailParam !== null ? resolve(emailParam) : resolve(false);
    })
  },

  login: (body, hash) => {
    return new Promise((resolve) => {
      User.findOne({
        attributes: {
          exclude: [
            "user_password",
            "user_name",
            "user_email",
            "user_tel",
            "user_birth",
            "user_gender",
            "user_pw_answer",
            "user_pw_question",
          ],
        },

        where: {
          [Op.and]: [{ user_id: body.user_id }, { user_password: hash }],
        },
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })

        .catch((err) => {
          resolve(result);
          console.log(err);
        });
    });
  },
  signUp: (body, hash) => {
    return new Promise((resolve) => {
      User.findOrCreate({
        where: {
          user_id: body.user_id,
          user_email: body.user_email,
          user_nickname: body.user_nickname,
          user_tel: body.user_tel,
        },
        defaults: {
          user_id: body.user_id,
          user_password: hash,
          user_name: body.user_name,
          user_tel: body.user_tel,
          user_birth: body.user_birth,
          user_email: body.user_email,
          user_gender: body.user_gender,
          user_nickname: body.user_nickname,
          user_pw_question: body.user_pw_question,
          user_pw_answer: body.user_pw_answer,
          user_image: "null",
        },
        raw: false,
      })
        .then((result) => {
          result[1] == 1 ? resolve(result) : resolve(false);
          console.log(result[0].user_id, result[0].user_password);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  transPassword: (hash, body) => {
    return new Promise((resolve) => {
      User.update(
        { user_password: hash },
        {
          where: {
            user_id: body.user_id,
            user_pw_question: body.user_pw_question,
            user_pw_answer: body.user_pw_answer,
          },
        }
      )
        .then((result) => {
          console.log(hash);
          result == 1 ? resolve(true) : resolve(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  transMyInfo: (body, imgData) => {
    return new Promise((resolve) => {
      if (imgData == null) {
        User.update(
          {
            user_tel: body.user_tel,
            user_email: body.user_email,
            user_nickname: body.user_nickname,
          },

          {
            where: {
              user_id: body.user_id,
            },
          }
        )
          .then((result) => {
            result == 1 ? resolve(result) : resolve(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        User.update(
          {
            user_tel: body.user_tel,
            user_email: body.user_email,
            user_nickname: body.user_nickname,
            user_image: imgData.path,
          },

          {
            where: {
              user_id: body.user_id,
            },
          }
        )
          .then((result) => {
            result == 1 ? resolve(result) : resolve(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  },

  deleteUser: (body, hash) => {
    return new Promise((resolve) => {
      User.destroy({
        where: {
          user_id: body.user_id,
          user_password: hash,
        },
      })
        .then((result) => {
          console.log(result);
          result === 1 ? resolve(true) : resolve(false);
        })
        .catch((err) => {
          resolve(false);
          throw err;
        });
    });
  },
  viewMyInfo: (views) => {
    return new Promise((resolve) => {
      User.findOne({
        // include: [{ model: Likes },  { model: Member },/* {model: Team}*/],

        attributes: {
          exclude: [
            "user_id",
            "user_password",
            "user_pw_question",
            "user_pw_answer",
            "user_birth",
          ],
        },
        where: {
          user_id: views,
        },
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          resolve(false);
          throw err;
        });
    });
  },
  viewMyBoard: (myBoard, page) => {
    let limit = 10;
    let offset = 0;
    if (page > 1) {
      offset = limit * (page - 1);
    }
    return new Promise((resolve) => {
      Board.findAll({
        // include: [{ model: Board }],
        // attributes: ["user_id"],
        offset: offset,
        limit: limit,
        // order: [["board_date", "ASC"]],

        attributes: { exclude: ["board_id"] },
        where: {
          user_id: myBoard,
        },
      })
        .then((result) => {
          console.log(result);
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
