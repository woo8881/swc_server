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
    console.log(imgData[0].path)
    return new Promise((resolve) => {
      if (imgData[1] == null) {
        Photo.create({
          photo_url : imgData.path,
          board_id: body.board_id
        })
          .then((result) => {
            result !== null ? resolve(result) : resolve(false);
          })
          .catch((err) => {
            logger.error("에러");
            console.log(err);
          });
      }else if(imgData[2] == null){
        Photo.bulkCreate([
          { photo_url: imgData[0].path, board_id: body.board_id },
          { photo_url: imgData[1].path, board_id: body.board_id }
        ])
          .then((result) => {
            result !== null ? resolve(result) : resolve(false);
          })
          .catch((err) => {
            logger.error("에러");
            console.log(err);
          });
      }else{
        Photo.bulkCreate([
          { photo_url: imgData[0].path, board_id: body.board_id },
          { photo_url: imgData[1].path, board_id: body.board_id },
          { photo_url: imgData[2].path, board_id: body.board_id },
        ])
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          logger.error("에러");
          console.log(err);
        });
      }
    });
  },
};
