const sequelize = require("../../models").sequelize;
var moment = require("moment");
const {
  Board,
  User,
  Comment,
  Likes,
  Team,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
// moment.tz.setDefault("Asia/Seoul");
// require("moment-timezone");
//Todo social connet login Api will create
module.exports = {
  makeBoard: (body) => {
    return new Promise((resolve) => {
      Board.create({
        board_title: body.board_title,
        board_content: body.board_content,
        board_date: moment().format("YYYY-MM-DD HH:MM:SS"),
        board_type: body.board_type,
        board_hits: 0,
        board_img: body.board_img,
        board_state: "생성",
        board_detail: body.board_detail,
        user_id: body.user_id,
      }).then((result) => {
        result !== null ? resolve(result) : resolve(false);
      });
    }).catch((err) => {
      resolve(false);
      throw err;
    });
  },

  inquiryBoard: (boardType, page) => {
    let limit = 10;
    let offset = 0;
    if (page > 1) {
      offset = limit * (page - 1);
    }
    return new Promise((resolve) => {
      Board.findAll({
        offset: offset,
        limit: limit,
        order: [["board_date", "ASC"]],
        attributes: { exclude: ["board_content", "board_file"] },
        where: {
          board_type: boardType,
        },
      }).then((result) => {
        result !== null ? resolve(result) : resolve(false);
      });
    });
  },
  inquiryBulletin: (boardContent) => {
    return new Promise((resolve) => {
      Board.findOne({
        include: [{ model: Likes }, { model: Comment }, { model: Team }],

        where: {
          board_id: boardContent,
        },

        order: [
          [Comment, "comment_parents", "ASC"],
          [Comment, "comment_id", "ASC"],
        ],

        raw: false,
      }).then((result) => {
        Board.increment(
          {
            board_hits: 1,
          },
          {
            where: {
              board_id: boardContent,
            },
          }
        )
          .then(() => {
            console.log(result.dataValues);
            let obj = {};
            obj["likes_count"] = result.likes.length;
            obj["result"] = result.dataValues;
            delete result.dataValues.likes;

            obj !== null ? resolve(obj) : resolve(false);
          })
          .catch((err) => {
            resolve(false);
          });
      });
    });
  },
  remakeBoard: (body) => {
    return new Promise((resolve) => {
      Board.update(
        {
          board_content: body.board_content,
          board_title: body.board_title,
          board_date: body.board_date,
          board_type: body.board_type,
          board_file: body.board_file,
          board_state: "수정",
        },
        {
          where: {
            board_id: body.board_id,
          },
        }
      ).then((result) => {
        result == 1 ? resolve(true) : resolve(false);
        console.log(body);
      });
    });
  },

  deleteBoard: (body) => {
    return new Promise((resolve) => {
      Board.destroy({
        where: {
          board_id: body.board_id,
        },
      })
        .then((result) => {
          result === 1 ? resolve(true) : resolve(false);
          console.log(body);
        })
        .catch((err) => {
          resolve(false);
          throw err;
        });
    });
  },
  search: (search, page) => {
    let limit = 10;
    let offset = 0;
    if (page > 1) {
      offset = limit * (page - 1);
    }
    return new Promise((resolve) => {
      Board.findAll({
        offset: offset,
        limit: limit,
        order: [["board_date", "ASC"]],
        // attributes: { exclude: ["board_content", "board_file"] },
        where: {
          [Op.or]: [
            { board_content: { [Op.like]: "%" + search + "%" } },
            { board_title: { [Op.like]: "%" + search + "%" } },
          ],
        },
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          resolve(false);
        });
    });
  },
};
