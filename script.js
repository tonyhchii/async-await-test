const img = document.querySelector("img");

const getImage = () => {
  const searchInput = document.getElementById("gif-search");
  const searchString = searchInput.value;
  const searchUrl = `https://api.giphy.com/v1/gifs/translate?api_key=UjwVpv5mjdobyU83oKn8dVCDGYxbWRJn&s=${searchString}`;
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.setAttribute("src", response.data.images.original.url);
    })
    .catch((err) => {
      console.error(err);
    });
};

const imgBtn = document.querySelector(".img-btn");
imgBtn.addEventListener("click", getImage);
