const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const router = express.Router();

// @route GET/admin/add-product
// @desc this is the add-product form page for admins or logged-in users
// @access Private

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;
