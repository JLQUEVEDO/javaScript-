
var suits = ["Hearts", "Clubs","Diamonds","Spades"];

var values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six",
              "Five", "Four", "Three", "Two"];

//this funtion will create a deck of cards 
function createDeck(){
  var deck = []; //created an empty array
    for( var suitIdx = 0; suitIdx < suits.length; suitIdx++ ){ //iteriate trough suits array
         for (var valueIdx = 0; valueIdx < values.length; valueIdx++ ){//iteriate trough values array
           var card = {
               suit: suits[suitIdx],
               value: values[valueIdx]
           } ;
           deck.push(card); //adding value to the object card
         }
    }
    return deck;
}

//this function to get next card for the player 
function getNextCard(){
  //deck.shift take the first element and delete the first element of the array 
  return deck.shift();

}

//this funtion 
function getCardString(card){
    return card.value+ " of " + card.suit;
}

//the game start here 
let deck = createDeck(); //create all game cards


//assing cards to the player, with an array feed by getNextcard function
var playerCards = [getNextCard(), getNextCard()];
            
console.log("Welcome to Black Jack");

console.log("You are dealt");
console.log(" "+ getCardString(playerCards[0])); 
console.log(" "+ getCardString(playerCards[1]));

console.log(deck);



