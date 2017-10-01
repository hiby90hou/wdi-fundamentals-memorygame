console.log("Up and running!");

//create cards array
var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
}
,
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
}
,
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
}
,
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}

];

//create cardsInPlay array
var cardsInPlay = [];

//random cards order function
var cardsRandom = function(array){
	return array.sort(function(){return Math.random() > 0.5});
}

//Match card function
var checkForMatch = function(){

	//if users click 2 cards
	if(cardsInPlay.length==2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");

			//set all of cards' images to back side
			var imgCard = document.getElementById("game-board").children;
			for(var i=0;i<imgCard.length;i++){
				imgCard[i].setAttribute('src', 'images/card.jpg');
			}	
		}

		//Clean cardsInPlay array
		cardsInPlay = [];
	}

}

// Show cards front side function
var flipCard = function(imgCard){
	cardId = imgCard.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].suit +" "+ cards[cardId].rank);
	document.getElementById("game-board").children[cardId].setAttribute('src', cards[cardId].cardImage);
	
	cardsInPlay.push(cards[cardId].rank);

	//afer 500 ms, start checkForMatch() function
	var t=setTimeout(checkForMatch,500);
	
}

var resetAll = function(){
	//reset card image
	var imgCard = document.getElementById("game-board").children;
	for(var i=0;i<imgCard.length;i++){
		imgCard[i].setAttribute('src', 'images/card.jpg');
	}

	//random cards orders
	cards = cardsRandom(cards);
	// console.log(cards);

	//reset cardsInPlay array
	cardsInPlay = [];
}


var createBoard = function(){
	//random cards orders
	cards = cardsRandom(cards);

	//create cards
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');

		cardElement.setAttribute('src', 'images/card.jpg');
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener("click",function(){flipCard(this)});
        
		document.getElementById("game-board").appendChild(cardElement);
	}

	//Binding click events for reset button
	document.getElementById("reset").addEventListener("click",resetAll);
}

// flipCard(0);
// flipCard(2);

createBoard();
//checkForMatch();


