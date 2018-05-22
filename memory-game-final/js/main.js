/* ====================== JS for Memory Game ================================== 
   Added functionality beyond GA prework assignment:
   - tracks and displays user score every time a match is found
   - added function to flip all cards back over after a win/loss
   - added a shuffle function to randomize the order of the cards
   - added instruction & about buttons that toggle text displayed with js
============================================================================ */

// Global variables for cards
var cardsInPlay = [];
var userScore = 0;
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

// Checks for equality of suit between two clicked cards. */
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    document.getElementById('js-outcome').innerHTML = 'You found a match!';
    userScore+=1;
    document.getElementById('js-score').innerHTML = 'SCORE: ' + userScore;
  } else {
    document.getElementById('js-outcome').innerHTML = 'Sorry, try again.';
  }
}

// Changes clicked card image from back to front
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  this.style.border = 'none';
  this.style.opacity = '1';

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

// Creates four cards, adds image for each into HTML
var createBoard = function() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('js-game-board').appendChild(cardElement);
  }
}

// Initialize cards on page load
createBoard();

// Function to flip the cards back over and restart the game
var flipAllCards = function() {
  var cardElement = document.getElementsByTagName('img');

  for(var i = 0; i < cards.length; i++) {
    cardElement[i].setAttribute('src','images/back.png');
    cardElement[i].style.border = null;
    cardElement[i].style.opacity = null;
  }

  document.getElementById('js-outcome').innerHTML = '';
  cardsInPlay = [];
}

// Function to shuffle the four cards into a random order
var shuffleCards = function() {
  var cardElement = document.getElementsByTagName('img');
  var cardIndices = [0, 1, 2, 3];

  /* iterates through cardIndices and reorders randomly using
     the Fisher-Yates shuffle algorithm. The new order is used 
     to set the data-ids of cards which 'shuffles' them. */
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [cardIndices[i], cardIndices[j]] = [cardIndices[j], cardIndices[i]];
  }

  for(var i = 0; i < cards.length; i++) {
    cardElement[i].setAttribute('src','images/back.png');
    cardElement[i].style.border = null;
    cardElement[i].style.opacity = null;
    cardElement[i].setAttribute('data-id', cardIndices[i]);
  }

  document.getElementById('js-outcome').innerHTML = '';
  cardsInPlay = [];
}

// Function to display the 'Instructions' text
var showInstructions = function() {
  document.getElementById('instructionParagraph').innerHTML = "Flip a card over \
  by clicking on it. If the suits of the two cards you flip match, you win! \
  Press FLIP to turn all the cards face down again, and SHUFFLE if you want to \
  mix up the deck.";
}

// Function to display the 'About' text
var showAbout = function() {
  document.getElementById('instructionParagraph').innerHTML = "Concentration, \
  also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or \
  simply Pairs, is a card game in which all of the cards are laid face down on \
  a surface and two cards are flipped face up over each turn. The object of \
  the game is to turn over pairs of matching cards.";
}

// Event listeners for each button on the page
var flip = document.getElementById('js-flip-button');
flip.addEventListener('click', flipAllCards);

var shuffle = document.getElementById('js-shuffle-button');
shuffle.addEventListener('click', shuffleCards);

var instructions = document.getElementById('js-instruction-button');
instructions.addEventListener('click', showInstructions);

var about = document.getElementById('js-about-button');
about.addEventListener('click', showAbout);









