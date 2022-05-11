const express = require('express');
const router = express.Router();
const photoController = require('./photoController');
const upload = require("../../middlewares/multiUploads");
const multer = require('multer')
//사진 여러개 업로드
router.post('/photoUpdate', upload, photoController.photoUpdate);

module.exports = router;