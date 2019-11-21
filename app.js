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

// Shop routes
app.use(shopRoutes);

// Admin routes
app.use("/admin", adminRoutes);

// Listener
http.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
