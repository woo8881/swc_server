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
module.exports = {
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
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디 or 이메일 or 번호 or 닉네임 중복";
        res.send(obj);
      } else {
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
        obj["err"] = "아이디 or 질문 or 답변이 틀리거나 비밀번호가 변경하기 전 이랑 같음";
        res.send(obj);
      } else {
        obj["suc"] = true;
        res.send(obj);
      }
    });
  },
  transMyInfo: (req, res) => {
    const body = req.body;
    userService.transMyInfo(body).then((result) => {
      let obj = {};
      if (result == false) {
        obj["suc"] = false;
        obj["err"] = "아이디가 틀리거나 수정된 정보가 변경하기 전 이랑 같음";
        res.send(obj);
      } else {
        obj["suc"] = true;
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
        obj["err"] = "아이디가 없음";
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
      } else {
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
        obj["err"] = "아이디가 없음";
        res.send(obj);
      } else {
        obj["suc"] = true;
        obj["info"] = result;
        res.send(obj);
      }
    });
  },
};
