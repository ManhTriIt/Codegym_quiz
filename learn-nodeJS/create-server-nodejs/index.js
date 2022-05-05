const express = require('express');
const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});



