const express = require('express');
const router = express.Router();
const photoController = require('./photoController');
const upload = require("../../middlewares/uploads");
const multer = require('multer')
//사진 업로드
router.post('/photoUpdate', upload, photoController.photoUpdate);

module.exports = router;