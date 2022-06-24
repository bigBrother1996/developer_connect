const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // get token from header
  const token = req.header("x-auth-token");
  // check if not token
  if (!token) {
    return res.status(401).json({ msg: "no token Authorization denied" });
  }
  //  verify token
  try {
    const decoded = jwt.verify(token, procces.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    req.status(401).json({ msg: "Token is invalid" });
  }
};
