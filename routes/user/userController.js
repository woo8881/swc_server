const userService = require("./userService");
const path = require("path");
// const signRefreshToken = require('../../jwt/signToken').signRefreshToken;
// const signAccessToken = require('../../jwt/signToken').signAccessToken;
const hashing = require(path.join(__dirname, "../../config", "hashing.js"));
const salt = require(path.join(__dirname, "../../config", "config.json")).salt;
const jwt = require("../../jwt/authorization");
const { status } = require("express/lib/response");
const { util } = require("../../node_modules/util");

// const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
const aws = require("@aws-sdk/client-ses");
const ejs = require('ejs');
const crypto = require("crypto");
process.env.AWS_ACCESS_KEY_ID = 'EXAMPLEIDKEY'; // aws access key
process.env.AWS_SECRET_ACCESS_KEY = 'EXAMPLEACCESSKEYPASSWORD' // aws secret access key
module.exports = {

  sendMail:(req, res) =>{
    const { email }  = req.body;
    userService.sendMail(email).then((result)=>{
      let obj ={};
      if (result.toEmail == null){
        logger.info('이메일 주소를 입력해 주세요.. ex) email : test@naver.com');
        obj["suc"] == false;
        obj["err"] == "메일 보내기 실패"
        res.send(obj);
      } else{
        delete result.html
        logger.info('메일 보내기');
        obj["suc"] =true;
        obj["email"] = result;
        res.send(obj);
      }
    })
  },
  
  
  login: (req, res) => {
    const body = req.body;
    const hash = hashing.enc(body.user_password, salt);
    userService.login(body, hash).then((result) => {
      const jwtToken = jwt.signAccessToken(result).then((token) => {
        let obj = {};
        if (result == false) {
          obj["suc"] = false;
          obj["err"] = "유저정보없음";
          res.send(obj);
        } else {
          obj["suc"] = true;
          obj["user"] = result;
          obj["token"] = token;
          res.send(obj);
        }
      });
    });
  },
  signUp: (req, res) => {
    //TODO: 회원가입
    const body = req.body;
    const hash = hashing.enc(body.user_password, salt);
    userService.signUp(body, hash).then((result) => {
      // console.log(result);
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디 or 이메일 or 번호 or 닉네임 중복";
        res.send(obj);
      }
        else if(result == "error"){
          obj["err"] = "중복이거나 필수로 들어가야하는 값이 없음";
          res.send(obj);
        }
       else{
        obj["suc"] = true;
        res.send(obj);
      }
    });
  },
  transPassword: (req, res) => {
    const body = req.body;
    const hash = hashing.enc(body.user_password, salt);
    userService.transPassword(hash, body).then((result) => {
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디 or 비밀번호 찾기 질문,답변이 틀리거나 비밀번호가 변경하기 전 이랑 같음";
        res.send(obj);
      } else {
        obj["suc"] = true;
        res.send(obj);
      }
    });
  },
  transMyInfo: (req, res) => {
    const body = req.body;
    const imgData = req.file

    console.log(req.file)
    userService.transMyInfo(body, imgData).then((result) => {
      console.log(result)
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디가 틀리거나 수정된 정보가 변경하기 전 이랑 같거나 변경할 수 없는 정보임";
        res.send(obj);
      } else {
        obj["suc"] = true;
        // obj["result"] =result;
        // obj["transInfo"]  =result;
        res.send(obj);
      }
    });
  },
  deleteUser: (req, res) => {
    const body = req.body;
    const hash = hashing.enc(body.user_password, salt);
    userService.deleteUser(body, hash).then((result) => {
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디가 없거나 비밀번호가 틀림";
        res.send(obj);
      } else {
        obj["suc"] = true;
        res.send(obj);
      }
    }); 
  
  },
  viewMyInfo: (req, res) => {
    const views = req.params.user_id;
    userService.viewMyInfo(views).then((result) => {
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디가 없음";
        res.send(obj);
      } else {console.log(result);
        obj["suc"] = true;
        obj["info"] = result;
        res.send(obj);
      }
    });
  },
  viewMyBoard: (req, res) => {
    const myBoard = req.params.user_id;
    const page = req.params.page;
    userService.viewMyBoard(myBoard, page).then((result) => {
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디가 틀리거나 게시글이 없음";
        res.send(obj);
      } else {
        obj["suc"] = true;
        obj["boardList"] = result;
        res.send(obj);
      }
    });
  },
};

