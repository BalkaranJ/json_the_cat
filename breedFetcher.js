const request = require('request');
let userInput = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function (error, response, body) {
  if (error !== null) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});