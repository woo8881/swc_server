const express = require('express');
const router = express.Router();

const userRoute = require('./user/userRoute');
// const commentRoute = require('./comment/commentRoute');
// const memberRoute = require('./member/memberRoute');
// const boardRoute = require('./board/boardRoute');
// const teamRoute = require('./team/teamRoute');
// const likesRoute = require('./likes/likesRoute');


router.use('/user', userRoute);
// router.use('/board', boardRoute);
// router.use('/comment', commentRoute);
// router.use('/member', memberRoute);
// router.use('/team', teamRoute);
// router.use('/likes', likesRoute)



module.exports = router;

