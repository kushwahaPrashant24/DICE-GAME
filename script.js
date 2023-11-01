var MAT = Math.random();
var MAT1 = Math.floor(MAT * 6) + 1;

var CAT = Math.random();
var CAT1 = Math.floor(CAT * 6) + 1;

var MATIMG = "dice" + MAT1 + ".png";
var MATSRC = "image/" + MATIMG;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", MATSRC);

var CATIMG = "dice" + CAT1 + ".png";
var CATSRC = "image/" + CATIMG;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", CATSRC);

function Player() {
  if (MAT1 < CAT1) {
    document.querySelector("#winner").innerHTML = "PLAYER 1 WON";
  } else if (MAT1 > CAT1) {
    document.querySelector("#winner").innerHTML = "PLAYER 2 WON";
  } else if ((MAT1 = CAT1)) {
    document.querySelector("#winner").innerHTML = "DRAW";
  } else {
  }
}

Player();
