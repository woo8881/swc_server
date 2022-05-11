const express = require('express');
const router = express.Router();
const likesController = require('./likesController');
const authUtil = require('../../middlewares/auth').checkToken
// 좋아요 누르고 관심글에 추가
router.post('/likes', /*authUtil,*/ likesController.likes);

module.exports = router;