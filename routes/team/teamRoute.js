const express = require('express');
const router = express.Router();
const teamController = require('./teamController');
const authUtil = require('../../middlewares/auth').checkToken

//팀 모집하기
router.post('/teamUp', /*authUtil,*/ teamController.teamUp);
//팀 모집현황 보기
// router.post('/teamRecruitmentView', teamController.teamRecruitmentView);
//팀 수정
router.post('/teamRemake', /*authUtil,*/ teamController.teamRemake);
// 팀 삭제
router.get('/teamDelete/:team_id', /*authUtil,*/ teamController.teamDelete);

//팀

module.exports = router;