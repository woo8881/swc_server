const mailService = require('./mailService');
const path = require('path');

// const signRefreshToken = require('../../jwt/signToken').signRefreshToken;
// const signAccessToken = require('../../jwt/signToken').signAccessToken;

// const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
// const salt = require(path.join(__dirname, '../../config', 'config.json')).salt;

module.exports = {
    sendMail:(req, res) =>{
        const { email }  = req.body;
        mailService.sendMail(email).then((result)=>{
          let obj ={};
          if (result == false){
            obj["suc"] == false;
            obj["err"] == "메일 보내기 실패"
            res.send(obj);
          } else{
            obj["suc"] =true;
            obj["email"] = result;
            res.send(obj);
          }
        })
      },

    checkMail:(req, res) =>{
        const body  = req.body;
        mailService.checkMail(body).then((result)=>{
          let obj ={};
          if (result == false){
            obj["suc"] == false;
            obj["err"] == "메일 보내기 실패"
            res.send(obj);
          } else{
            obj["suc"] =true;
            obj["email"] = result;
            res.send(obj);
          }
        })
      },
}

