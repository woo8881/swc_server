const express = require('express');
const router = express.Router();
const userController = require('./userController');
const authUtil = require('../../middlewares/auth').checkToken
//로그인
router.post('/login',userController.login);
//회원가입
router.post('/signUp', userController.signUp);
//비밀번호 변경
router.post('/transPassword', userController.transPassword);
//개인정보 수정
router.post('/transMyInfo',authUtil, userController.transMyInfo);
//회원 탈퇴
router.post('/deleteUser',authUtil, userController.deleteUser);
//내정보 보기
router.get('/viewMyInfo/:user_id',userController.viewMyInfo);
//내가 쓴 글 보기
router.get('/viewMyBoard/:user_id/:page',userController.viewMyBoard);

module.exports = router;
