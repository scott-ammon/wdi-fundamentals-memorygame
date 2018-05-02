// JS for Memory Game

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

// global variable to store user's score
var userScore = 0;

/* Changes image source to display flipped card, checks 
   for a match if two cards have been flipped up. */
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
      userScore+=1;
      document.getElementById('score').innerHTML = "Your Score: " + userScore;
    } else {
      alert('Sorry, try again.');
    }
  }
}

/* Saves id # of the clicked card, and adds clicked 
   card to cardsInPlay array */
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}

/* Creates four cards and displays the face down image,
   waits for user to click a card and calls flipCard function. */
var createBoard = function() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('js-game-board').appendChild(cardElement);
	}
}

createBoard();

/* Function to flip the cards back over and restart the game */
var restartGame = function() {
  var allCards = document.getElementsByTagName('img');

  for(var i = 0; i < cards.length; i++) {
    allCards[i].setAttribute('src','images/back.png');
  }
  
  cardsInPlay = [];
}

var restartButton = document.getElementById('button');
restartButton.addEventListener('click', restartGame);











