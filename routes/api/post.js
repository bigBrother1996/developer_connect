const express = require("express");
const router = express.Router();

// Get  /route/api/post
// private

router.use("/", (req, res) => res.send("post route"));

module.exports = router;
