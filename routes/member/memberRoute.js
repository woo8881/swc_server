const express = require('express');
const router = express.Router();
const memberController = require('./memberController');


//팀 참가하기
router.get('/teamJoin/:user_id/:team_id', memberController.teamJoin);
// //팀 조회
// router.post('/teamInquiry', memberController.teamInquiry);
// //팀 수정
// router.post('/teamRemake', memberController.teamRemake);
// //팀 삭제
// router.post('/teamDelete', memberController.teamDelete);
// //팀 탈퇴
// router.post('/teamWithDrawal', memberController.teamWithDrawal);

module.exports = router;
