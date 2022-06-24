const express = require("express");
const router = express.Router();

// Get  /route/api/post
// private

router.post("/", (req, res) => res.send("Post route"));

module.exports = router;
