const multer = require("multer");
const path = require('path');

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
// 이미지 받았을 때 필터링
const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
    return cb(new Error("Only image files are allowed!"));
  }
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 서버에 저장될 위치
    cb(null, __dirname, "../home")
    console.log(path.join(__dirname, "../home"));
    console.log(path.join(__dirname, "../"));
  },

  filename: (req, file, cb) => {
    // 서버에 저장될 때 파일 이름
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  }
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter }).single(
  // 프론트에서 넘겨울 params key 값, 오른쪽 같이 넘겨줘야함-> {photo: binary}
  'photo'
);
module.exports = uploadFile;












// // 이미지를 업로드하는 라우트
// router.post("/upload", upload.single("selectImg"), (req, res) => {
//     res.json({ filename: `${req.file.filename}` });
//   });

//   // form data 생성 => 프론트
// const formData = new FormData();
// formData.append("selectImg", image);