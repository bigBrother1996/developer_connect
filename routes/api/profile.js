const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// Get  /route/api/profile/me
// private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "User",
      ["name", "avatar"]
    );
    if (!profile) {
      res.status(400).json({ msg: "there is no profile for this user" });
    }
    res.send("profile route");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// Get  /route/api/profile
// create or update profile
// private

router.post(
  "/",
  auth,
  [
    check("status", "Status is required").not().isEmpty(),
    check("skills", "Skills is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      twitter,
      youtube,
      facebook,
      instagram,
      linkedin,
    } = req.body;
  }
);
// build profile object
const profileFields = {};
profileFields.user = req.user.id;

if (company) profileFields.company = company;
if (website) profileFields.website = website;
if (location) profileFields.location = location;
if (bio) profileFields.bio = bio;
if (status) profileFields.status = status;
if (githubusername) profileFields.githubusername = githubusername;

if (skills) {
  profileFields.skills = skills.split(",").map((skill) => {
    return skill.trim();
  });
}

module.exports = router;
