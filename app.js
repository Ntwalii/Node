const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const dbURI =
  "mongodb+srv://ntwaliaubin:test123@blogs.mc9zf.mongodb.net/?retryWrites=true&w=majority&appName=blogs";

mongoose
  .connect(dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
//Middleware
app.use(express.static("public")); //To make all files in the public folder accessible easily and static
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //To log some data in the console about the server

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/blog", (req, res) => {
  res.render("blogs");
});
app.get("/blogs", (req, res) => {
  res.redirect("/blog");
});

app.post("/new-blog", (req, res) => {
   const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.get("/new-blog", (req, res) => {
  res.render("new-blog");
});

app.get("/all-blogs", (req, res) => {
  Blog.find().then((result) => {
    res.send(result);
  });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("66d6d73dcf02add03f8e2190")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
