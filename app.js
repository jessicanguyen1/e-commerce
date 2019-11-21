const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Shop routes importing "/"
app.use(shopRoutes);

// Admin routes importing "/admin/add-product"
app.use("/admin", adminRoutes);

// If route is not found, render 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Listener
http.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
