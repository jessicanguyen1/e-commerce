const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const router = express.Router();
const adminData = require("./admin");

// @route GET /
// @desc Root/homepage that displays lists of products
// @access Public!

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Homepage", path: "/" });
});

module.exports = router;
