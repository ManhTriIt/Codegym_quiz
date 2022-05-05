const axios = require("axios");
const fs = require("fs");

axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(response => {
    if (response.status === 200) {
      let buf = Buffer.from(JSON.stringify(response.data));
      fs.writeFile("data1.json", buf, (err) => {
        console.log(err);
      });
    };
  });
