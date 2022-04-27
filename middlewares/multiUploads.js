const multer = require("multer");
const path = require("path");
const fs = require("fs");

const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|PNG|JPG|JPEG|GIF)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  };
  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // 서버에 저장될 위치
      cb(null, './images')
      // console.log(path.resolve("/home/hosting_users/bcd1031/apps/bcd1031_swc/images"));
    },
  ///home/hosting_users/bcd1031/apps/bcd1031_swc/images
    filename: (req, file, cb) => {
      // 서버에 저장될 때 파일 이름
      cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    }
  });
  
  var uploadFiles = multer({ storage: storage, fileFilter: imageFilter }).array(
    // 프론트에서 넘겨울 params key 값, 오른쪽 같이 넘겨줘야함-> {photo: binary}
    'photo',3
  );
  module.exports = uploadFiles;
