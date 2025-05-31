#!/usr/bin/node
<<<<<<< HEAD
const util = require('util');
const request = util.promisify(require('request'));
const filmID = process.argv[2];

async function starwarsCharacters (filmId) {
  const endpoint = 'https://swapi-api.alx-tools.com/api/planets/1/' + filmId;
  let response = await (await request(endpoint)).body;
  response = JSON.parse(response);
  const characters = response.characters;

  for (let i = 0; i < characters.length; i++) {
    const urlCharacter = characters[i];
    let character = await (await request(urlCharacter)).body;
    character = JSON.parse(character);
    console.log(character.name);
  }
}

starwarsCharacters(filmID);
=======
const request = require('request');
const API_URL = 'https://swapi-api.hbtn.io/api';

if (process.argv.length > 2) {
  request(`${API_URL}/films/${process.argv[2]}/`, (err, _, body) => {
    if (err) {
      console.log(err);
    }
    const charactersURL = JSON.parse(body).characters;
    const charactersName = charactersURL.map(
      url => new Promise((resolve, reject) => {
        request(url, (promiseErr, __, charactersReqBody) => {
          if (promiseErr) {
            reject(promiseErr);
          }
          resolve(JSON.parse(charactersReqBody).name);
        });
      }));

    Promise.all(charactersName)
      .then(names => console.log(names.join('\n')))
      .catch(allErr => console.log(allErr));
  });
}
>>>>>>> 0f96b95e46463041ec74b39dd73748c12d81cf00
