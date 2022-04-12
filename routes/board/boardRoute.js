const express = require('express');
const router = express.Router();
const boardController = require('./boardController');
const authUtil = require('../../middlewares/auth').checkToken
// const upload = require('../../middlewares/uploads').multer
const multer = require('multer')
const upload = require("../../middlewares/uploads");
//게시판 글쓰기
router.post('/makeBoard', upload, authUtil, boardController.makeBoard);
//게시판 조회
router.get('/inquiryBoard/:board_id/:page', boardController.inquiryBoard);
//게시글 조회
router.get('/inquiryBulletin/:board_id', boardController.inquiryBulletin);
//게시판 수정
router.post('/remakeBoard',upload,authUtil,boardController.remakeBoard);
//게시판 삭제
router.get('/deleteBoard/:board_id', authUtil,boardController.deleteBoard);
//검색 기능
router.get('/search/:search/:page', boardController.search);

// //최근 본 게시판

//핫 게시판

//내가쓴게시글 확인
//좋아요 누르기
module.exports = router;


//false면 다른게 뜨게하기ex(학생의 정보가 없습니다.), 페이징하기