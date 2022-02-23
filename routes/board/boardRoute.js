const express = require('express');
const router = express.Router();
const boardController = require('./boardController');
const authUtil = require('../../middlewares/auth').checkToken

//게시판 글쓰기
router.post('/makeBoard', boardController.makeBoard);
//게시판 조회
router.get('/inquiryBoard/:boardInquiry/:page', boardController.inquiryBoard);
//게시글 조회
router.get('/inquiryBulletin/:board_content', boardController.inquiryBulletin);
//게시판 수정
router.post('/remakeBoard',authUtil,boardController.remakeBoard);
//게시판 삭제 //get
router.post('/deleteBoard',authUtil,boardController.deleteBoard);
//검색 기능
router.get('/search/:search/:page', boardController.search);


// //최근 본 게시판

//핫 게시판

//내가쓴게시글 확인
//좋아요 누르기
module.exports = router;


//false면 다른게 뜨게하기ex(학생의 정보가 없습니다.), 페이징하기