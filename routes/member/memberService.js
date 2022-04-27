const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
  User,
  Member,
  Team,
  Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
  teamJoin: (team, user) => {
    return new Promise((resolve) => {
      Member.findOrCreate({
        where: { [Op.and]: { user_id: user, team_id: team } },
        defaults: {
          user_id: user,
          team_id: team,
        },
      })
        .then((result) => {
          if (result[1] !== true) {
            Member.destroy({
              where: {
                member_id: result[0].member_id,
              },
            })
              .then((desresult) => {
                // console.log(desresult)
                desresult[1] !== 1 ? resolve(desresult) : resolve(false);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            // console.log(result)
            result[1] == 1 ? resolve(result) : resolve(false);
          }
        })
        .catch((err) => {
          logger.error("에러");
          console.log(err);
        });
    });
  },
};
