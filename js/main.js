"use strict";

////////////////////
// CODE PRINCIPAL //
////////////////////

// fonction anonyme : lance le code une fois seulement que le HTML a fini
// de charger
// tout le code en lien avec le HTML doit être contenu dedans
document.addEventListener("DOMContentLoaded", function () {
  state.index = 0;
  state.timer = null;
  refreshSlider();
  document.querySelector(".toolbar a").addEventListener("click", toolbarToggle);
  document.querySelector("#slider-next").addEventListener("click", nextPic);
  document
    .querySelector("#slider-previous")
    .addEventListener("click", previousPic);
  document.querySelector("#slider-random").addEventListener("click", randomPic);
  document.querySelector("#slider-toggle").addEventListener("click", diapo);
});
