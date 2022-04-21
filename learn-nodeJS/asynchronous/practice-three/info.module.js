const axios = require("axios");

getInfo = () => {
  const getInfoPromise = new Promise((resolve, reject) => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=c5c6fe759a78fb429c86ad54c3794237")
      .then(data => resolve(data))
      .catch(err => reject(err));
  })
  getInfoPromise.then(data => console.log(data));
}

module.exports = getInfo;
