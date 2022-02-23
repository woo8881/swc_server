const express = require('express');
const router = express.Router();
const commentController = require('./commentController');
//댓글 쓰기
router.post('/makeComment',commentController.makeComment);
//답글 쓰기
router.post('/makeReply',commentController.makeReply);
// //댓글 삭제
// router.post('/deleteComment',commentController.deleteComment);
// //답글 삭제
// router.post('/deleteReply',commentController.deleteReply);
// //댓글 수정
// router.post('/remakeComment',commentController.remakeComment);
// //답글 수정
// router.post('/remakeReply',commentController.remakeReply);


// router.get('/getLast/:user_id',lastController.getLast)
module.exports = router;
