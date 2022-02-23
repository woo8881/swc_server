const express = require('express');
const router = express.Router();
const teamController = require('./teamController');

//팀 모집하기
router.post('/teamUp', teamController.teamUp);
//팀 모집현황 보기
// router.post('/teamRecruitmentView', teamController.teamRecruitmentView);
//팀 수정
router.post('/teamRemake', teamController.teamRemake);
// 팀 삭제
router.get('/teamDelete/:team_id', teamController.teamDelete);

//팀

module.exports = router;