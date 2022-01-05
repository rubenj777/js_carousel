///////////////
// VARIABLES //
///////////////

let state = {};
const photos = [
  {
    src: "1.jpg",
    legend: "Pandas",
  },
  {
    src: "2.jpg",
    legend: "Yoga top",
  },
  {
    src: "3.jpg",
    legend: "Lever de soleil",
  },
  {
    src: "4.jpg",
    legend: "Ciel étoilé",
  },
  {
    src: "5.jpg",
    legend: "Tea time",
  },
  {
    src: "6.jpg",
    legend: "Ca va péter le bide",
  },
];

///////////////
// FONCTIONS //
///////////////

function refreshSlider() {
  const figcaption = document.querySelector(".slider figcaption");
  const img = document.querySelector("#slider img");
  figcaption.textContent = photos[state.index].legend;
  img.src = `images/${photos[state.index].src}`;
  img.alt = photos[state.index].legend;
}

function toolbarToggle() {
  document.querySelector("nav ul").classList.toggle("hide");
  const icon = document.querySelector("#toolbar-toggle i");
  icon.classList.toggle("fa-arrow-right");
  icon.classList.toggle("fa-arrow-down");
}

function nextPic() {
  state.index++;
  if (state.index >= photos.length) {
    state.index = 0;
  }
  refreshSlider();
}

function previousPic() {
  state.index--;
  if (state.index < 0) {
    state.index = photos.length - 1;
  }
  refreshSlider();
}

function randomPic() {
  let indexRandom = Math.floor(Math.random() * photos.length);
  do {
    indexRandom = Math.floor(Math.random() * photos.length);
  } while (indexRandom === state.index);
  state.index = indexRandom;
  refreshSlider();
  console.log(state.index);
}

function diapo() {
  const icon = document.querySelector("#slider-toggle i");
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
  if (icon.classList.contains("fa-pause")) {
    state.timer = setInterval(nextPic, 2000);
  } else {
    clearInterval(state.timer);
  }
}
