const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

const db = mongoose.connection;
const DB_URL = "mongodb://manhtri:123456@127.0.0.1:27017/test_connect";

mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => { console.log("Connected") });
db.on("error", (err) => {
  console.log("Db connect err", err.message);
});

// BlogPost.create({
//   title: "Đắc nhân tâm",
//   body: "Cuốn sách hay",
//   username: "Duy Manh"
// }, (error, blogPost) => {
//   if (error) throw error
//   console.log(blogPost);
// }); 

// // Lấy tất cả documents
// BlogPost.find({}, (error, blogPost) => {
//   if (error) throw error
//   console.log(blogPost);
// });

// Lọc theo điều kiện
// BlogPost.find({
//   title: "Đây là tiêu đề bài viết"
// }, (error, blogPost) => {
//   if (error) throw error;
//   console.log(blogPost);
// });

// Update
BlogPost.findByIdAndUpdate("6273ef8d9da65e453dc94643", {
  title: "Update title"
}, (error, blogPost) => {
  console.log(error, blogPost);
});

// Delete document
BlogPost.findByIdAndDelete("6273ef8d9da65e453dc94643", (error, blogPost) => {
  console.log(error, blogPost);
});

