import './style.css'
import { Cards } from './utils/cardComponent.js'
import { getImages } from './utils/getImages.js'

let images = [];
const searchField = document.getElementById('keyword');
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', function() {
  let keyword = searchField.value;
  console.log(keyword);
  loadImages(keyword);
  });

let loadImages = async (keyword) => {
  images = await getImages(keyword);
  console.log(images);
  console.log(images[13]);

  createCards(numberOfCards);
}

let numberOfCards = 5;

//lazy load
// let displayedCards = cardsToDisplay;
// let startFromIndex = displayedCards - cardsToDisplay;
//window.onScroll with a for


const createCards = (numberOfCards) => {
  let containerElement = document.querySelector('.cardsContainer');

  for (let i = 0; i < numberOfCards; i++) {
    let card = document.createElement('my-card');
    containerElement.appendChild(card);

    let imgEl = document.getElementsByClassName("img")[i].children[0];
    imgEl.src = `${images[i]}`;
  }
};

//no reset is there

//TESTING TESTING




// https://unsplash.com/oauth/applications/270505
//chrome.exe --disable-web-security

// https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome?fbclid=IwAR2o7DRNxkwpadEwg98Up0sdy5ctYszE5XiQUAyfwAo99s-zNqzoLJWwhhA

// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

