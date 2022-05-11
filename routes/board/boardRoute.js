const express = require('express');
const router = express.Router();
const boardController = require('./boardController');
const authUtil = require('../../middlewares/auth').checkToken
const multer = require('multer')
const upload = require("../../middlewares/uploads");
//게시판 글쓰기
router.post('/makeBoard', upload, /*authUtil,*/ boardController.makeBoard);
//게시판 조회
router.get('/inquiryBoard/:board_id/:page', boardController.inquiryBoard);
//게시글 조회
router.get('/inquiryBulletin/:board_id', boardController.inquiryBulletin);
//게시판 수정
router.post('/remakeBoard',upload,/*authUtil,*/boardController.remakeBoard);
//게시판 삭제
router.get('/deleteBoard/:board_id', /*authUtil,*/boardController.deleteBoard);
//검색 기능
router.get('/search/:search/:page', boardController.search);

module.exports = router;