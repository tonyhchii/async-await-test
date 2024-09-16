const img = document.querySelector("img");

const getImage = () => {
  const searchInput = document.getElementById("gif-search");
  const searchString = searchInput.value;
  const searchUrl = `https://api.giphy.com/v1/gifs/translate?api_key=UjwVpv5mjdobyU83oKn8dVCDGYxbWRJn&s=${searchString}`;
  try {
    fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
    
      if (response.data.images) {
        img.src = response.data.images.original.url;
      }
      else {
        console.error('no image found');
      }
    })
  }
  catch (error) {
    console.error(error);
  }
};

const imgBtn = document.querySelector(".img-btn");
imgBtn.addEventListener("click", getImage);
