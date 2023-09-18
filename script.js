'use strict';
const imageContainer = document.querySelector('.image-container');
let photosArray = [];
const count = 30;
const apiKey = 'UsG89H-ronaM5eVs1fBYGTbD4pVvfPjwrZwn8Aommos';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos(){
  photosArray.forEach((photo) => {
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);

    imageContainer.appendChild(img);
  });
}

// Get Photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // ERROR Message
  }
}

// ON load
getPhotos();