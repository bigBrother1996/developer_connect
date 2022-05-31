const express = require("express");
const router = express.Router();

// Get  /route/api/profile
// private

router.use("/", (req, res) => res.send("profile route"));

module.exports = router;
