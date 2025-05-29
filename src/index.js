const axios = require('axios');

// A helper method to pick one value from a list
const getRandomValue = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

// Helper method to retrieve a list of breeds
// https://dog.ceo/dog-api/documentation/
// returns a Promise to an array of breed names

const getBreeds = () => {
  // implement me!
  return axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      const breeds = Object.keys(response.data.message);
      return breeds;
    })
    .catch(()=> {
      console.log('error!');
    });
};

// console.log(getBreeds()); // Promise { <pending> }

// getBreeds()
//   .then(response => {
//     console.log(response);
//   });

// console.log(response.data);
// return response.data;
// {
//   message: {
//     affenpinscher: [],
//     african: [],
//     airedale: [],
//     akita: [],
//     appenzeller: [],
//     australian: [ 'kelpie', 'shepherd' ],
//     bakharwal: [ 'indian' ],
//     basenji: [],
//     beagle: [],
//     bluetick: [],
//     borzoi: [],
//     bouvier: [],
//     boxer: [],
//     brabancon: [],
//     briard: [],
//     buhund: [ 'norwegian' ],
//     bulldog: [ 'boston', 'english', 'french' ],
//     bullterrier: [ 'staffordshire' ],
//     cattledog: [ 'australian' ],
//     cavapoo: [],
//     chihuahua: [],
//     chippiparai: [ 'indian' ],
//     chow: [],
//     clumber: [],
//     cockapoo: [],
//     collie: [ 'border' ],
//     coonhound: [],
//     corgi: [ 'cardigan' ],
//     cotondetulear: [],
//     dachshund: [],
//     dalmatian: [],
//     dane: [ 'great' ],
//     danish: [ 'swedish' ],
//     deerhound: [ 'scottish' ],
//     dhole: [],
//     dingo: [],
//     doberman: [],
//     elkhound: [ 'norwegian' ],
//     entlebucher: [],
//     eskimo: [],
//     finnish: [ 'lapphund' ],
//     frise: [ 'bichon' ],
//     gaddi: [ 'indian' ],
//     germanshepherd: [],
//     greyhound: [ 'indian', 'italian' ],
//     groenendael: [],
//     havanese: [],
//     hound: [
//       'afghan', 'basset',
//       'blood',  'english',
//       'ibizan', 'plott',
//       'walker'
//     ],
//     husky: [],
//     keeshond: [],
//     kelpie: [],
//     kombai: [],
//     komondor: [],
//     kuvasz: [],
//     labradoodle: [],
//     labrador: [],
//     leonberg: [],
//     lhasa: [],
//     malamute: [],
//     malinois: [],
//     maltese: [],
//     mastiff: [ 'bull', 'english', 'indian', 'tibetan' ],
//     mexicanhairless: [],
//     mix: [],
//     mountain: [ 'bernese', 'swiss' ],
//     mudhol: [ 'indian' ],
//     newfoundland: [],
//     otterhound: [],
//     ovcharka: [ 'caucasian' ],
//     papillon: [],
//     pariah: [ 'indian' ],
//     pekinese: [],
//     pembroke: [],
//     pinscher: [ 'miniature' ],
//     pitbull: [],
//     pointer: [ 'german', 'germanlonghair' ],
//     pomeranian: [],
//     poodle: [ 'medium', 'miniature', 'standard', 'toy' ],
//     pug: [],
//     puggle: [],
//     pyrenees: [],
//     rajapalayam: [ 'indian' ],
//     redbone: [],
//     retriever: [ 'chesapeake', 'curly', 'flatcoated', 'golden' ],
//     ridgeback: [ 'rhodesian' ],
//     rottweiler: [],
//     saluki: [],
//     samoyed: [],
//     schipperke: [],
//     schnauzer: [ 'giant', 'miniature' ],
//     segugio: [ 'italian' ],
//     setter: [ 'english', 'gordon', 'irish' ],
//     sharpei: [],
//     sheepdog: [ 'english', 'indian', 'shetland' ],
//     shiba: [],
//     shihtzu: [],
//     spaniel: [
//       'blenheim',
//       'brittany',
//       'cocker',
//       'irish',
//       'japanese',
//       'sussex',
//       'welsh'
//     ],
//     spitz: [ 'indian', 'japanese' ],
//     springer: [ 'english' ],
//     stbernard: [],
//     terrier: [
//       'american',     'australian',
//       'bedlington',   'border',
//       'cairn',        'dandie',
//       'fox',          'irish',
//       'kerryblue',    'lakeland',
//       'norfolk',      'norwich',
//       'patterdale',   'russell',
//       'scottish',     'sealyham',
//       'silky',        'tibetan',
//       'toy',          'welsh',
//       'westhighland', 'wheaten',
//       'yorkshire'
//     ],
//     tervuren: [],
//     vizsla: [],
//     waterdog: [ 'spanish' ],
//     weimaraner: [],
//     whippet: [],
//     wolfhound: [ 'irish' ]
//   },
//   status: 'success'
// }



// [
//   'affenpinscher', 'african',     'airedale',        'akita',
//   'appenzeller',   'australian',  'bakharwal',       'basenji',
//   'beagle',        'bluetick',    'borzoi',          'bouvier',
//   'boxer',         'brabancon',   'briard',          'buhund',
//   'bulldog',       'bullterrier', 'cattledog',       'cavapoo',
//   'chihuahua',     'chippiparai', 'chow',            'clumber',
//   'cockapoo',      'collie',      'coonhound',       'corgi',
//   'cotondetulear', 'dachshund',   'dalmatian',       'dane',
//   'danish',        'deerhound',   'dhole',           'dingo',
//   'doberman',      'elkhound',    'entlebucher',     'eskimo',
//   'finnish',       'frise',       'gaddi',           'germanshepherd',
//   'greyhound',     'groenendael', 'havanese',        'hound',
//   'husky',         'keeshond',    'kelpie',          'kombai',
//   'komondor',      'kuvasz',      'labradoodle',     'labrador',
//   'leonberg',      'lhasa',       'malamute',        'malinois',
//   'maltese',       'mastiff',     'mexicanhairless', 'mix',
//   'mountain',      'mudhol',      'newfoundland',    'otterhound',
//   'ovcharka',      'papillon',    'pariah',          'pekinese',
//   'pembroke',      'pinscher',    'pitbull',         'pointer',
//   'pomeranian',    'poodle',      'pug',             'puggle',
//   'pyrenees',      'rajapalayam', 'redbone',         'retriever',
//   'ridgeback',     'rottweiler',  'saluki',          'samoyed',
//   'schipperke',    'schnauzer',   'segugio',         'setter',
//   'sharpei',       'sheepdog',    'shiba',           'shihtzu',
//   'spaniel',       'spitz',       'springer',        'stbernard',
//   ... 7 more items
// ]

// Helper method to retrieve a random image for a
// specified breed
// https://dog.ceo/dog-api/documentation/breed
// RANDOM IMAGE FROM A BREED COLLECTION
// returns a Promise to a url (string)

const getRandomImageForBreed = (breed) => {
  // implement me!
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      // console.log(response.data);
      // {
      //   message: 'https://images.dog.ceo/breeds/hound-blood/n02088466_10331.jpg',
      //   status: 'success'
      // }
      // console.log(response.data.message);
      return response.data.message;
    })
    // .catch(error => {
    //   console.log(error);
    //   console.log(error);
    // });
    .catch(() => {
      console.log('error!');
    });
};

console.log('############# getRandomImageForBreed');
getRandomImageForBreed('hound')
  .then(url => {
    console.log(url);
  });

// use our other helpers to make a function that returns
// a random image from a random breed
// returns a Promise to a url (string)

const getRandomDogImage = () => {
  // implement me!
  return getBreeds()
    // getBreeds returns a list of breeds names
    // breeds is the response/return value from getBreeds
    .then(breeds => {
      const breed = getRandomValue(breeds); // getRandomValue will return a random breed from breeds list
      return getRandomImageForBreed(breed);
    });
};

console.log('############# getRandomDogImage()');
getRandomDogImage()
  .then(url => {
    console.log(url);
  });


// // This is the call we would like to make work
// // This function should return a Promise to a url (string)
getRandomDogImage()
  .then(url => {
    console.log(url);
  });
