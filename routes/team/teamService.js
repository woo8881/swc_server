const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
  User,
  Board,
  Sequelize: { Op },
  Receipt,
  Team,
} = require("../../models");
sequelize.query("SET NAMES UTF8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
  teamUp: (body) => {
    return new Promise((resolve) => {
      Team.create({
        team_name: body.team_name,
        team_maximum: body.team_maximum,
        team_limit_date: body.team_limit_date,
        team_chat: body.team_chat,
        board_id: body.board_id,
        user_id: body.user_id,
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          logger.error("에러");
          console.log(err);
        });
    });
  },

  teamRemake: (body) => {
    return new Promise((resolve) => {
      Team.update(
        {
          team_name: body.team_name,
          team_maximum: body.team_maximum,
          team_limit_date: body.team_limit_date,
          team_chat: body.team_chat,
        },
        {
          where: { team_id: body.team_id },
        }
      )
        .then((result) => {
          result == 1 ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          logger.error("에러");
          console.log(err);
        });
    });
  },
  teamDelete: (del) => {
    return new Promise((resolve) => {
      Team.destroy({
        where: { team_id: del },
      })
        .then((result) => {
          console.log(result);
          result == 1 ? resolve(true) : resolve(false);
        })
        .catch((err) => {
          logger.error("에러");
          console.log(err);
        });
    });
  },
};
