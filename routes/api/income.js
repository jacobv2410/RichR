const express = require("express");
const router = express.Router();

// @route GET api/income/test
// @desc Test income route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Income Works" }));

module.exports = router;
