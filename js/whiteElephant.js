var playerName = '';
var enableSubmit = function(ele) {
    $(ele).removeAttr("disabled");
}
var haveRolledDoubles = false;
var totalRolls = 0;
const base_url = 'https://white-elephant20.herokuapp.com';
const numberToLetterMap = {
	"1":"A","2":"B","3":"C","4":"D","5":"E","6":"F","7":"G","8":"H","9":"I","10":"J","11":"K","12":"L","13":"M","14":"N","15":"O","16":"P",
};

function whiteElephant() {
	$("body").empty();
	$("body").append('<div id="weDiv" class="col-md-12"></div>');
	createLogin();
	newDice();

}

function createLogin() {
	$("#weDiv").append('<div class="form-group"><label for="usr">Name:</label><input type="text" class="form-control" id="usr"></div>');
	$("#weDiv").append('<div class="col-md-3"></div><div id="enterName" class="col-md-3"><button class="btn btn-primary"' +
		' type="submit">Enter Name</button></div><div class="col-md-3"></div><br>');
	setNameEnterButton();
}

function setNameEnterButton() {
	$("#enterName").on("click", function(){
		playerName = $("#usr").val();
		if (playerName != "") {
			$("#usr").prop( "disabled", true );
			$("#enterName").empty();
		}
    });
}

function newDice() {
	$("#weDiv").append('<div id="diceDiv" class="col-md-12"></div>');
	$("#diceDiv").append('<img src="img/d6/g1.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	$("#diceDiv").append('<img src="img/d6/r1.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	$("#weDiv").append('<div id="rollContainer"><div id="rollDiceButton" class="col-md-12"><button id="diceButton" class="btn btn-primary" type="submit">ROLL</button></div></div>');
	$("#weDiv").append('<div id="resultDiv"></div>');
	setDiceRollButton();
}

function refreshDice(diceToPlace) {
	emptyDivs();
	$("#resultDiv").empty();
	$("#diceDiv").append('<img src="img/d6/g' + diceToPlace + '.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	$("#diceDiv").append('<img src="img/d6/r' + diceToPlace + '.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	setTimerOfDice();
	$("#rollDiceButton").show();
}

function setDiceRollButton() {
	$("#rollDiceButton").on("click", function(){
    $('#weDiv').append('<audio autoplay><source src="sound/we/diceRoll.mp3" type="audio/mpeg"></audio>');
		rollDice();	
    });
}

function emptyDivs() {
	$("#diceDiv").empty();
	$("#presentDiv").empty();
}
function rollDice() {
	totalRolls += 1;
	emptyDivs();	
	var greenDie = getRandom(1,6);
	var redDie = getRandom(1,6);
	$("#diceDiv").append('<img src="img/d6/g' + greenDie + '.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	$("#diceDiv").append('<img src="img/d6/r' + redDie + '.png" style="flex-grow:2;width: 50%;max-width:50%;">');
	if (greenDie === redDie) {
		haveRolledDoubles = true;
		getGiftsFromServer(greenDie);
	} else {
		setTimerOfDice();
		if (!haveRolledDoubles && totalRolls % 3 == 0) {
    		setTimeout(function() {$('#weDiv').append('<audio autoplay><source src="sound/we/noDoublesYet.mp3" type="audio/mpeg"></audio>')}, 2500);
		}
	}

}

function unleashThePresents(playerToPresentMap, dice) {
	emptyDivs();
	$("#resultDiv").empty();
	if (dice === 1) {
		$("#resultDiv").append('<h2>You rolled SNAKE EYES!</h2>');
	} else {
		$("#resultDiv").append('<h2>You rolled ' + dice + '\'s</h2>');		
	}
	addGiftCarousel(playerToPresentMap, dice);
}

function addGiftCarousel(playerToPresentMap, dice){
	$("#weDiv").append('<div id="presentDiv"></div>');
	setCarousel(playerToPresentMap, dice);
}

function makeSwipable() {
	$(".carousel").on("touchstart", function(event){
	        var xClick = event.originalEvent.touches[0].pageX;
	    $(this).one("touchmove", function(event){
	        var xMove = event.originalEvent.touches[0].pageX;
	        if( Math.floor(xClick - xMove) > 5 ){
	            $(this).carousel('next');
	        }
	        else if( Math.floor(xClick - xMove) < -5 ){
	            $(this).carousel('prev');
	        }
	    });
	    $(".carousel").on("touchend", function(){
	            $(this).off("touchmove");
	    });
	});
}

function setButtonActions(dice) {
	$("#selectPresentButton").on("click", function(){
		$('#weDiv').append('<audio autoplay><source src="sound/we/bingo.mp3" type="audio/mpeg"></audio>');
		sendPresentSelectionToServer();
		refreshDice(dice);
    });
	$("#cancelPresentSelectionButton").on("click", function(){
		if (confirm("Are you sure you don't want a gift?")) {
			$('#weDiv').append('<audio autoplay><source src="sound/we/nothing.mp3" type="audio/mpeg"></audio>');
			refreshDice(dice);
		}
    });
}

function getCurrentVisiblePresent() {
	var imageId = $('div.active').index() + 1;
	return imageId;
}

function getGiftsFromServer(dice) {
	$("#rollDiceButton").hide();
	emptyDivs();
	callServer(dice)
}

function callServer(dice) {
	let playerToPresentMap = {};	
    $(function () {	
	 	$.get(base_url + "/person/all", function(data, status){
			for(var i = 0 ; i < data.length ; i++) {
				playerToPresentMap[data[i].giftName] = data[i].name;
			}
		  	unleashThePresents(playerToPresentMap, dice);
		});
	 });
}

function setCarousel(playerToPresentMap, dice) {
	emptyDivs();
	let giftDivs = getGiftDivs(playerToPresentMap, 10);
	console.log(giftDivs);

	$("#presentDiv").append(`<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">` + giftDivs +
  `<a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>
<div class="col-md-12">
	<button id="selectPresentButton" class="btn btn-primary" type="submit">SELECT CURRENT GIFT</button>
</div>
<br>
<div class="col-md-12">
	<button id="cancelPresentSelectionButton" class="btn btn-primary" type="submit">CANCEL SELECTION</button>
</div>

`);
	makeSwipable();
	setButtonActions(dice);
}

function getGiftDivs(playerToPresentMap, totalGifts) {
	let giftsInDiv = 0;
	let alreadyInDivGifts = [];
	let giftDivs = "";
	let indexToUpdate = 0;
	do {
		do {
			indexToUpdate = getRandom(1,10);
		} while (alreadyInDivGifts.indexOf(indexToUpdate) > -1);
		alreadyInDivGifts.push(indexToUpdate);

		let giftLetter = numberToLetterMap[indexToUpdate];	

		let grayScale = 0
		if (playerToPresentMap[giftLetter] != null) {
			grayScale = 75;
		} 
		let ownerOfGift = getPersonsGift(playerToPresentMap, giftLetter);
		let activeDiv = ""

		if (giftsInDiv === 0) {
			activeDiv = " active";
		}
		giftDivs += `   
		<div class="item` + activeDiv + `" id="` + giftLetter + `">
  			<div class="container">
	    		<img src="img/presents/` + giftLetter + `.jpg" style="-webkit-filter:grayscale(` + grayScale + `%);filter:grayscale(` + grayScale + `%)
	    		;max-width: 100%;max-height: 100%;">
	      		<div class="centered">` + ownerOfGift + `</div>
	    	</div>
    	</div>
    	`	
    	giftsInDiv += 1;

	} while (giftsInDiv < 10);

	return giftDivs;
}


function getPersonsGift(playerToPresentMap, key) {
	if(playerToPresentMap[key] == null) {
		return "";
	}
	return playerToPresentMap[key].toString();
}

function sendPresentSelectionToServer() {
	var currentPresent = $('div.active').attr('id');
	$.get(base_url + "/person/" + playerName + "/" + currentPresent, function(data, status){});
}

function setTimerOfDice() {
    setTimeout(function() { $("#diceButton").attr("disabled", false)}, 5000);
    $("#diceButton").attr("disabled", true);
}