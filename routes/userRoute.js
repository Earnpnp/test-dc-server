const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const { getMe } = require("../controllers/userController");
const router = express.Router();

router.get("/me", authenticate, getMe);

module.exports = router;
