const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// The shop routes
app.use(shopRoutes);

// Listener
http.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
