console.log('Up and Running!');

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[3];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.');
	}
}

console.log('User flipped ' + cardOne);
console.log('User flipped ' + cardTwo);