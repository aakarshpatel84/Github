//--------- Genrate a random number from 1 to 6 for First Player------------------

const firstRandomNum = Math.floor(Math.random() * 6) + 1;

//------------------------- First image Dice---------------------------------------
const firstDiceImage = "dice img/dice" + firstRandomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//--------- Genrate a random number from 1 to 6 for Secoond Player------------------
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

//------------------------- Second image Dice---------------------------------------
const secondDiceImage = "dice img/dice" + secondRandomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//--------- Genrate a random number from 1 to 6 for third Player------------------
const thirdRandomNum = Math.floor(Math.random() * 6) + 1;

//------------------------- third image Dice---------------------------------------
const thirdDiceImage = "dice img/dice" + thirdRandomNum + ".png";

document.querySelectorAll("img")[2].setAttribute("src", thirdDiceImage);

//Eventlistener
document.querySelector("button").addEventListener("click", rolled);
function rolled() {
  //-----------------------------First User----------------------------------------
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const firstDiceImage = "dice img/dice" + firstRandomNum + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

  //-----------------------------Second User----------------------------------------
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondDiceImage = "dice img/dice" + secondRandomNum + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

  //-----------------------------Third User----------------------------------------
  const thirdRandomNum = Math.floor(Math.random() * 6) + 1;
  const thirdDiceImage = "dice img/dice" + thirdRandomNum + ".png";
  document.querySelectorAll("img")[2].setAttribute("src", thirdDiceImage);

  //----------------------------Condition-----------------------------------
  if (firstRandomNum > secondRandomNum && firstRandomNum > thirdRandomNum) {
    document.querySelector("h1").innerText = "Player 1 Is WInner";
  } else if (
    secondRandomNum > firstRandomNum &&
    secondRandomNum > thirdRandomNum
  ) {
    document.querySelector("h1").innerText = "Player 2 Is WInner";
  } else if (
    thirdRandomNum > firstRandomNum &&
    thirdRandomNum > secondRandomNum
  ) {
    document.querySelector("h1").innerText = "Player 3 Is WInner";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
}
