const express = require('express');
const router = express.Router();
const likesController = require('./likesController');
const authUtil = require('../../middlewares/auth').checkToken
// 좋아요 누르고 관심글에 추가
router.post('/likes', likesController.likes);
// 관심글 보기
// router.get('/favorites', contestController.inquiryContest);
// //공모전게시판 수정
// router.post('/remakeContest',contestController.remakeContest);
// //공모전게시판 삭제
// router.post('/deleteContest',contestController.deleteContest);
// //공모전게시글 내용 조회
// router.get('/inquiryContestContent/:contentContestInquiry',contestController.inquiryContestContent);

module.exports = router;