const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const blogSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require:true
  }
},{timestamp:true});

const Blog=mongoose.model('Blog',blogSchema)

module.exports=Blog