exports.getMe = async (req, res) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }
  const user = req.user;
  res.json({ user });
};
