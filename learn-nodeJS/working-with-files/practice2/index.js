const fs = require('fs');
const express = require('express');
const port = 3000;
const app = express();

app.get("/image", (req, res) => {
  fs.readFile("./../practice1/image.png", (err, data) => {
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": data.length,
      "Author": "tri",
    });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
