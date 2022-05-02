const express = require('express');
const router = express.Router();
const commentController = require('./commentController');
const authUtil = require('../../middlewares/auth').checkToken
//댓글 쓰기
router.post('/makeComment', commentController.makeComment);

//댓글 수정
router.post('/remakeComment', /*authUtil,*/commentController.remakeComment);

//댓글 삭제
router.get('/deleteComment/:comment_id', /*authUtil,*/commentController.deleteComment);

module.exports = router;
