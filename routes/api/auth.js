const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Get  /api/auth
// private

router.get("/", auth, (req, res) => res.send("auth route"));

module.exports = router;
