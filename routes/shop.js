const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const router = express.Router();
const adminData = require("./admin");

// @route GET /
// @desc Root/homepage that displays lists of products
// @access Public

router.get("/", (req, res, next) => {
  res.render("shop", { docTitle: "Homepage" });
});

module.exports = router;
