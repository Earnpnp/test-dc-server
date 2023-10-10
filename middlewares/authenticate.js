exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("No token");
    }

    next();
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};
