const express = require("express");
const router = express.Router();

// @route GET api/expnses/test
// @desc Test expnses route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Expenses Works" }));

module.exports = router;
