const express = require("express");
const router = express.Router();

// @route GET api/home/test
// @desc Test home route
// @access Public
router.get("/dashboard", (req, res) => res.json({ msg: "Home Page Works" }));

module.exports = router;
