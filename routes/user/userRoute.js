const express = require('express');
const router = express.Router();
const userController = require('./userController');
const authUtil = require('../../middlewares/auth').checkToken
const upload = require("../../middlewares/uploads");
//로그인
router.post('/login',userController.login);
//회원가입
router.post('/signUp', userController.signUp);
//비밀번호 변경
router.post('/transPassword', authUtil, userController.transPassword);
//개인정보 수정
router.post('/transMyInfo',upload, authUtil, userController.transMyInfo);
//회원 탈퇴
router.post('/deleteUser',authUtil, userController.deleteUser);
//내정보 보기
router.get('/viewMyInfo/:user_id', authUtil,userController.viewMyInfo);
//내가 쓴 글 보기
router.get('/viewMyBoard/:user_id/:page', authUtil,userController.viewMyBoard);
//이메일 인증
router.post('/mail',userController.mail);

module.exports = router;
