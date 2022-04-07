const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
  Comment,
  User,
  Board,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const date = moment().format("YYYY-MM-DD HH:mm:ss");
module.exports = {
  makeComment: (body) => {
    return new Promise((resolve) => {
      // const date = moment().format("YYYY-MM-DD HH:mm:ss");
      Comment.create({
        comment_content: body.comment_content,
        comment_date: date,
        user_id: body.user_id,
        board_id: body.board_id,
        comment_parents: body.comment_parents,
        comment_state: "생성"
      }).then((result) => {
        // console.log(result.dataValues.comment_parents)
        if (result.dataValues.comment_parents == null) {
          Comment.update(
            {
              comment_parents: result.comment_id,
            },

            {
              where: {
                comment_id: result.comment_id,
              },
            }
          ).then((secondResult) => {
            secondResult !== null ? resolve(result) : resolve(false);
          }).catch((err) => {
            console.log(err);
          });
        } else {
          console.log(result);
          result !== null ? resolve(result) : resolve(false);
        }
      }).catch((err) => {
        console.log(err);
      });
    });
  },

  remakeComment: (body) => {
    return new Promise((resolve) => {
      Comment.update(
        {
          comment_content: body.comment_content,
          comment_date: date,
          comment_state: "수정"
        },
        {
          where: {
            comment_id: body.comment_id,
          },
        }
      )
        .then((result) => {
          console.log(result)
          result == 1 ? resolve(true) : resolve(false);
          console.log(body);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  deleteComment: (del) => {
    return new Promise((resolve) => {
      Comment.destroy({
        where: {
          comment_id: del,
        },
      })
        .then((result) => {
          console.log(result)
          result === 1 ? resolve(true) : resolve(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
