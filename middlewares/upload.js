const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 19);
    cb(null, uniqueSuffix + file.originalname);
  },
});

module.exports = multer({ storage: storage }).single("file");
