const likesService = require("./likesService");
const path = require("path");

// const signRefreshToken = require('../../jwt/signToken').signRefreshToken;
// const signAccessToken = require('../../jwt/signToken').signAccessToken;

const hashing = require(path.join(__dirname, "../../config", "hashing.js"));
const salt = require(path.join(__dirname, "../../config", "config.json")).salt;

module.exports = {
  likes: (req, res) => {
    const body = req.body;
    likesService.likes(body).then((result) => {
      console.log(result);
      let obj = {};
      if (result == "좋아요 취소") {
        logger.info("좋아요 취소");
        obj["suc"] = true;
        obj["likes"] = "좋아요 취소";
        res.send(obj);
      } else if (result[1] == true) {
        logger.info("좋아요");
        obj["suc"] = true;
        obj["likes"] = result[0];
        res.send(obj);
      } else {
        logger.error("좋아요 실패");
        obj["suc"] = false;
        obj["err"] = "좋아요 실패";
      }
    });
  },
};
