const { fetchBreedDescription } = require('./breedFetcher');
let userInput = process.argv.slice(2)[0];

fetchBreedDescription(userInput, (error, description) => {
  if (error) {
    console.log(error);
    return;
  }
  if (description) {
    console.log(description);
  }
});