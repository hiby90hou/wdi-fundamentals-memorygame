console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);

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

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay.length==2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
		var imgCard = document.getElementById("game-board").children;
		for(var i=0;i<imgCard.length;i++){
			imgCard[i].setAttribute('src', 'images/card.jpg');
		}
		
		}
		cardsInPlay = [];
	}

}

var flipCard = function(imgCard){
	console.log(imgCard.getAttribute("data-id"));
	cardId = imgCard.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].suit +" "+ cards[cardId].rank);

	document.getElementById("game-board").children[cardId].setAttribute('src', cards[cardId].cardImage);
	
	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
	
}

var resetAll = function(){
	var imgCard = document.getElementById("game-board").children;
	for(var i=0;i<imgCard.length;i++){
		imgCard[i].setAttribute('src', 'images/card.jpg');
	}

	cardsInPlay = [];
}


var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		// console.log(cardElement);
		cardElement.setAttribute('src', 'images/card.jpg');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click",function() 
		{flipCard(this)});
        
		document.getElementById("game-board").appendChild(cardElement);
	}
	document.getElementById("reset").addEventListener("click",resetAll);
}

// flipCard(0);
// flipCard(2);

createBoard();
//checkForMatch();


