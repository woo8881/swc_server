const sequelize = require("../../models").sequelize;
const { resolveInclude } = require("ejs");
const {
  User,
  Likes,
  Member,
  Board,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
//Todo social connet login Api will create
module.exports = {
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
          throw err;
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
          user_image: body.user_image,
        },
        raw: false,
      })
        .then((result) => {
          result[1] == 1 ? resolve(result) : resolve(false);
          console.log(result[0].user_id, result[0].user_password);
          console.log(result);
        })
        .catch((err) => {
          throw err;
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
            user_name: body.user_name,
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
          throw err;
        });
    });
  },
  transMyInfo: (body) => {
    return new Promise((resolve) => {
      User.update(
        {
          user_tel: body.user_tel,
          user_email: body.user_email,
          user_nickname: body.user_nickname,
          user_image: body.user_image,
          
        },

        {
          where: {
            user_id: body.user_id,
          },
        }
      )
        .then((result) => {
          result == 1 ? resolve(true) : resolve(false);
        })
        .catch((err) => {
          
          throw err;
        });
    });
  },

  deleteUser: (body, hash) => {
    return new Promise((resolve) => {
      User.destroy(
        {
        
        where: {
          user_id: body.user_id,
          user_password:hash
        },
      })
        .then((result) => {console.log(result)
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
        include: [{ model: Likes },  { model: Member }],

        attributes: { exclude: ["user_id", "user_password", "user_pw_question", "user_pw_answer","user_birth"] },
        where: {
          user_id: views,
        },
      })
        .then((result) => {
          console.log(result.dataValues.likes)
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
      User.findOne({
        include: [{ model: Board }],
attributes:['user_id'],
        offset: offset,
        limit: limit,
        // order: [["board_date", "ASC"]],

        // attributes: { exclude: ["board_content", "board_file"] },
        where: {
          user_id: myBoard,
        },
      }).then((result) => {console.log(result)
        result !== null ? resolve(result) : resolve(false);
      });
    });
  },
};
