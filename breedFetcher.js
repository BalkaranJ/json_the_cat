const request = require('request');
// let userInput = process.argv.slice(2)[0];


const fetchBreedDescription = function(userInput, callback){
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function (error, response, body) {
    if (error !== null) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found", null);
    } else {
      callback(null, data[0].description.trim());
    }
  });
};

// fetchBreedDescription(userInput, (error, description) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   if (description) {
//     console.log(description);
//   }
// });

module.exports = { fetchBreedDescription };