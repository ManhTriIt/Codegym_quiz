// Practice 1:
const Math = require("./my-math");
const circle = require("./circle")

let a = 3, b = 3;

console.log(`${a} + ${b} = ${Math.add(a, b)}`);
console.log(`${a} - ${b} = ${Math.sub(a, b)}`);
console.log(`${a} * ${b} = ${Math.multi(a, b)}`);
console.log(`${a} / ${b} = ${Math.div(a, b)}`);

// Practice 2:
let radius = 4;
console.log(circle.perimeter(radius));
console.log(circle.area(radius));

// Practice 3:
const http = require('http');

const server = http.createServer((req, res) => {
  let responseMessage = (`<h1>Welcome to page</h1>`);
  res.write(responseMessage);
  res.end();
  console.log(`Sent a response: ${responseMessage}`);
});

server.listen(3000, () => {
  console.log(`App listen on port ${port}`);
});

// Practice 4:
const express = require('express');
const app = express();
const port = 5000;
      
app.get("/", (req, res) => {
  res.json({
    "name": "Tri",
    "age": 20,
  })
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})
