const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const db = mongoose.connection;
const DB_URL = "mongodb://manhtri:123456@127.0.0.1:27017/test_connect";

mongoose.connect(DB_URL, { userNewUrlParser: true }).then(() => {
  console.log(`Connected`);
});

db.on("error", err => console.log(`Db connect err`, err.message));

BlogPost.create({
  title: "Đây là tiêu đề bài viết",
  body: "Đây là nội dung bài viết"
}) 
