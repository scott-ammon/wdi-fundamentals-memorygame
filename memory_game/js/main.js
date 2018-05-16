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
      document.getElementById('js-outcome').innerHTML = 'You found a match!';
      userScore+=1;
      document.getElementById('js-score').innerHTML = 'SCORE: ' + userScore;
    } else {
      document.getElementById('js-outcome').innerHTML = 'Sorry, try again.';
    }
  }
}

/* Saves id # of the clicked card, and adds clicked 
   card to cardsInPlay array */
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  this.style.border = 'none';
  this.style.opacity = '1';
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

var shuffleCards = function() {
  var cardElement = document.getElementsByTagName('img');

  var a = [0, 1, 2, 3];

  for (var i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  for(var i = 0; i < cards.length; i++) {
    cardElement[i].setAttribute('src','images/back.png');
    cardElement[i].style.border = null;
    cardElement[i].style.opacity = null;
    cardElement[i].setAttribute('data-id', a[i]);
  }

  document.getElementById('js-outcome').innerHTML = '';
  cardsInPlay = [];
}

var flipButton = document.getElementById('js-flip-button');
flipButton.addEventListener('click', flipAllCards);

var shuffleButton = document.getElementById('js-shuffle-button');
shuffleButton.addEventListener('click', shuffleCards);

// Function to display the instructions
var showInstructions = function() {
  document.getElementById('instructionParagraph').innerHTML = "Flip a card over by clicking on it. If the suits of the two cards you flip match, you win! Press FLIP to turn all the cards face down again, and SHUFFLE if you want to mix up the deck.";
}

var instructions = document.getElementById('js-instruction-button');
instructions.addEventListener('click', showInstructions);

//Function to display the about section
var showAbout = function() {
  document.getElementById('instructionParagraph').innerHTML = "Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.";
}

var about = document.getElementById('js-about-button');
about.addEventListener('click', showAbout);









