const express = require("express");
const router = express.Router();

// Get  /route/api/auth
// private

router.use("/", (req, res) => res.send("auth route"));

module.exports = router;
