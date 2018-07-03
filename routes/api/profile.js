const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../models/Profile");
// Load User Profile
const User = require("../models/User");

// @route GET api/profile/test
// @desc Test profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route GET api/profile
// @desc Get current users profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/profile
// @desc Create User Profile
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.ci;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
  }
);

module.exports = router;
