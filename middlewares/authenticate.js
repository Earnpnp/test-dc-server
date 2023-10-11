const createError = require("../utils/createError");

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("No token");
    }

    next();
  } catch (err) {
    console.log(err);
    return createError("Server Error", 500);
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      createError("You have no permission", 400);
    }
  } catch (err) {
    next(err);
  }
};
