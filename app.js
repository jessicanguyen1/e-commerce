const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.set("view engine", "pug");
app.set("views", "./views");

const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Shop routes importing "/"
app.use(shopRoutes);

// Admin routes importing "/admin/add-product"
app.use("/admin", adminRoutes.routes);

// If route is not found, render 404
app.use((req, res, next) => {
  res.status(404).render("404");
});

// Listener
http.listen(8080, () => {
  console.log("Listening on PORT 3000");
});
