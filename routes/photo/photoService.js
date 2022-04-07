const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
  User,
  Member,
  Team,
  Sequelize: { Op },
  Photo,
  Board,
} = require("../../models");
sequelize.query("SET NAMES UTF8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
  photoUpdate: (body, imgData) => {
    return new Promise((resolve) => {
        
      Photo.create({
        photo_url:imgData,
        board_id:body.board_id
      }).then((result) => {
       result!==null ? resolve(result) : resolve(false);
    }).catch((err) => {
      console.log(err);
    });
  })
}



}