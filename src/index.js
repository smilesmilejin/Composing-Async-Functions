const axios = require('axios');

// A helper method to pick one value from a list
const getRandomValue = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

// Helper method to retrieve a list of breeds
// https://dog.ceo/dog-api/documentation/
// returns a Promise to an array of breed names

const getBreeds = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    return Object.keys(response.data.message);
  } catch {
    console.log('error!');
    return [];
  }
};

// Helper method to retrieve a random image for a
// specified breed
// https://dog.ceo/dog-api/documentation/breed
// RANDOM IMAGE FROM A BREED COLLECTION
// returns a Promise to a url (string)

const getRandomImageForBreed = async (breed) => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    return response.data.message;
  } catch {
    console.log('error!');
    return null;
  }
};

// use our other helpers to make a function that returns
// a random image from a random breed
// returns a Promise to a url (string)

const getRandomDogImage = async () => {
  const breeds = await getBreeds();
  const oneBreed = await getRandomValue(breeds);
  const randomImage = await getRandomImageForBreed(oneBreed);

  console.log(randomImage);
};

// This is the call we would like to make work
// This function should return a Promise to a url (string)
getRandomDogImage();
