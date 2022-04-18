const express = require('express');
const router = express.Router();
const permissionController = require('./permissionController');
// const authUtil = require('../../middlewares/auth').checkToken
// 메일 보내기
router.post('/sendMail', permissionController.sendMail);
// 메일 확인하기
router.post('/checkMail', permissionController.checkMail);
// //공모전게시판 수정
// router.post('/remakeContest',contestController.remakeContest);
// //공모전게시판 삭제
// router.post('/deleteContest',contestController.deleteContest);
// //공모전게시글 내용 조회
// router.get('/inquiryContestContent/:contentContestInquiry',contestController.inquiryContestContent);

module.exports = router;