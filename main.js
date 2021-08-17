/* let nextButton = document.getElementById("next-button");
let previousButton = document.getElementById("previous-button");

const comic_api_url = 'https://xkcd.com/info.0.json';
async function getComic() {
    const response = await fetch(comic_api_url);
    const data = await response.json();
}

getComic(); */

const axios = require('axios');
axios.get('https://xkcd.com/info.0.json')
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.img)
  });

/* let requestURL = 'https://xkcd.com/info.0.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL); */
