const express = require("express");
const router = express.Router();

// Get  /route/api/users
// private

router.use("/", (req, res) => res.send("users route"));

module.exports = router;
