const express = require("express");
const app = express();

app.listen(3000);
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/blog", (req, res) => {
  res.sendFile("./views/blogs.html", { root: __dirname });
});
app.get("/blogs", (req, res) => {
    res.redirect('/blog');
  });


