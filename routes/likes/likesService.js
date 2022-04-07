const sequelize = require("../../models").sequelize;
var moment = require("moment");
const {
    Likes,
    Contest,
    User,
    Comment,
    Sequelize: { Op },
} = require("../../models");
sequelize.query("SET NAMES UTF8");

  module.exports= {
    likes: (body) => {
      return new Promise((resolve) => {
        Likes.findOrCreate({
          where: { [Op.and] : {user_id : body.user_id, board_id : body.board_id},
                  
        },
        defaults: {
          user_id : body.user_id,
          board_id : body.board_id
                }
        })
        .then((result) => {
          if(result[1]!==true){
            Likes.destroy({
              where:{
                likes_id : result[0].likes_id,
              },
            }).then((desresult) =>{
              desresult[1] !== 1 ? resolve("좋아요 취소") : resolve(false);
            }).catch((err) => {
              console.log(err);
            });
          }else{result[1] ==1 ? resolve(result) : resolve(false);}
          
          
          
        }).catch((err) => {
          console.log(err);
        });
      });
    },
      


      };