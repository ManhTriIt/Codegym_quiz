'use strict';
const fs = require('fs');
const axios = require('axios');

axios.get('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    const data = response.data;
    if (data.status === "success") {
      axios.get(data.message, {
          responseType: "arraybuffer"
        })
        .then(response => {
          console.log(response.data);
          fs.writeFile("image.png", response.data, null, () => {
            console.log("Done!");
          });
        });
    }
  });
