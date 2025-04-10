import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {

  //1-Creating the arrays values and suits

  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♦', '♥', '♠', '♣'];

  //2- Create a loop FOR with Math.random and Math.floor
  const randomValue = () =>{
    const index = Math.floor(Math.random()*values.length);
    return values[index];
  }
  const randomSuit = () => {
    const index = Math.floor(Math.random()*suits.length);
    return suits[index];
}
  console.log(randomValue(), randomSuit());
 // 3. Create the procedures (functions) that will draw a random card
 // 3a. Declaring and assigning drawnValue and DrawnSuit using the random Value()
 // and randomSuit() functios, respectively
 // 3b. Assign them to classes in the html using querySelector
 // 3c. Take into consideration suit color (conditional)
 // 3d. Display the card on the screen

 const suitColor = (suit) => {
  //Create the conditional needed to return a string template
  //with the correct styling for suit
  if(suit === "♦" || suit === "♥"){
    return `<span class="color-red">${suit}</span>`
  }else {return `<span class="color-black">${suit}</span>`}
  
 }

  const drawCard = () => {
  const drawnValue = randomValue();
  let drawnSuit = randomSuit();


  //We need a function to generate the necessary code to style the suits
  drawnSuit = suitColor(drawnSuit)
  document.querySelector('.card-value').innerHTML = drawnValue;
  document.querySelector('.top-suit').innerHTML = drawnSuit;
  document.querySelector('.bottom-suit').innerHTML = drawnSuit;

 }

 const displayCard = () => {
  let  displayedCard = document.querySelector('.card');
  displayedCard.innerHTML = 
    ` <div class='top-suit'></div>
     <div class='card-value'></div>
     <div class='bottom-suit'></div>`
     drawCard();
 }

 displayCard();



};

