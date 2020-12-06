$(document).ready(function () {
	$.ajaxSetup({cache: false});
});
var playerName = '';
var enableSubmit = function(ele) {
    $(ele).removeAttr("disabled");
}
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
		$("#usr").prop( "disabled", true );
		$("#enterName").empty();
    });
}

function newDice() {
	$("#weDiv").append('<div id="diceDiv" class="col-md-12"></div>');
	$("#diceDiv").append('<img src="img/d6/g1.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	$("#diceDiv").append('<img src="img/d6/r1.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	$("#weDiv").append('<div id="rollDiceButton" class="col-md-12"><button id="diceButton" class="btn btn-primary" type="submit">ROLL</button></div>');
	$("#weDiv").append('<div id="resultDiv"></div>');
	setDiceRollButton();
}

function refreshDice() {
	emptyDivs();
	$("#resultDiv").empty();
	$("#diceDiv").append('<img src="img/d6/g1.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	$("#diceDiv").append('<img src="img/d6/r1.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	$("#rollDiceButton").show();
}

function setDiceRollButton() {
	$("#rollDiceButton").on("click", function(){
		rollDice();	
    });
}
function emptyDivs() {
	$("#diceDiv").empty();
	$("#presentDiv").empty();
}
function rollDice() {
	emptyDivs();	
	var greenDie = getRandom(1,6);
	var redDie = getRandom(1,6);
	$("#diceDiv").append('<img src="img/d6/g' + greenDie + '.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	$("#diceDiv").append('<img src="img/d6/r' + redDie + '.jpg" style="flex-grow:2;width: 50%;max-width:50%;height:150px;">');
	if (greenDie === redDie) {
		var playerToPresentMap = getGiftsFromServer();
		unleashThePresents(playerToPresentMap, greenDie);
	}
	// setTimerOfDice();

}

function unleashThePresents(playerToPresentMap, dice) {
	emptyDivs();
	$("#resultDiv").empty();
	$("#rollDiceButton").hide();
	if (dice === 1) {
		$("#resultDiv").append('<h2>You rolled SNAKE EYES!</h2>');
	} else {
		$("#resultDiv").append('<h2>You rolled ' + dice + '\'s</h2>');		
	}
	addGiftCarousel(playerToPresentMap);
}

function addGiftCarousel(playerToPresentMap){
	$("#weDiv").append('<div id="presentDiv"></div>');
	setTimeout(() => {  setCarousel(playerToPresentMap); }, 4000);
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

function setButtonActions() {
	$("#selectPresentButton").on("click", function(){
		sendPresentSelectionToServer();
		refreshDice();
    });
	$("#cancelPresentSelectionButton").on("click", function(){
		if (confirm("Are you sure you don't want a gift?")) {
			refreshDice();
		}
    });
}

function getCurrentVisiblePresent() {
	var imageId = $('div.active').index() + 1;
	return imageId;
}

function getGiftsFromServer() {
	emptyDivs();
	$.get(base_url + "/person/all", function(data, status){
		playerToPresentMap = createPlayerPresentMap(data);
	  	console.log(playerToPresentMap);
	  	return playerToPresentMap;
  	});
}

function createPlayerPresentMap(data) {
	var playerToPresentMap = {};
	for(var i = 0 ; i < data.length ; i++) {
		playerToPresentMap[data[i].giftName] = data[i].name;
	}
	  	return playerToPresentMap;
}

function getPersonsGift(playerToPresentMap, key) {
	if(playerToPresentMap[key] == null) {
		return "";
	}
	return playerToPresentMap[key].toString();
}

function getGiftIndexGrayScale(playerToPresentMap) {
	var giftsTaken = [];
	if(playerToPresentMap["A"] == null) {
		giftsTaken.push(0);
	} else {
		giftsTaken.push(50);
	}
	if(playerToPresentMap["B"] == null) {
		giftsTaken.push(0);
	} else {
		giftsTaken.push(50);
	}
	if(playerToPresentMap["C"] == null) {
		giftsTaken.push(0);
	} else {
		giftsTaken.push(50);
	}
	if(playerToPresentMap["D"] == null) {
		giftsTaken.push(0);
	} else {
		giftsTaken.push(50);
	}
	return giftsTaken;
}

function setCarousel(playerToPresentMap) {
	emptyDivs();
	var giftsTaken = getGiftIndexGrayScale(playerToPresentMap);
	var aOwner = getPersonsGift(playerToPresentMap, "A");
	var bOwner = getPersonsGift("B");
	var cOwner = getPersonsGift("C");
	var dOwner = getPersonsGift("D");
	var eOwner = getPersonsGift("E");
	var fOwner = getPersonsGift("F");
	var gOwner = getPersonsGift("G");
	var hOwner = getPersonsGift("H");
	var iOwner = getPersonsGift("I");
	var jOwner = getPersonsGift("J");
	var kOwner = getPersonsGift("K");
	var lOwner = getPersonsGift("L");
	var mOwner = getPersonsGift("M");
	var nOwner = getPersonsGift("N");
	var oOwner = getPersonsGift("O");
	var pOwner = getPersonsGift("P");

	$("#presentDiv").append(`<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
	    <div class="item active" id="a">
  	<div class="container">
	      <img src="img/presents/A.jpg" style="-webkit-filter:grayscale(` + giftsTaken[0] + `%);filter:grayscale(` + giftsTaken[0] + `%);">
	      <div class="centered">` + aOwner + `</div>
	    </div>
    </div>

	    <div class="item" id="b">
  	<div class="container">
	      <img src="img/presents/B.jpg" style="-webkit-filter:grayscale(` + giftsTaken[1] + `%);filter:grayscale(` + giftsTaken[1] + `%);">
	      <div class="centered">` + bOwner + `</div>
    	</div>
    </div>

	    <div class="item" id="c">
  	<div class="container">
	      <img src="img/presents/C.jpg" style="-webkit-filter: grayscale(` + giftsTaken[2] + `%);filter: grayscale(` + giftsTaken[2] + `%)";>
	      <div class="centered">` + cOwner + `</div>
	    </div>
    </div>

		<div class="item" id="d">
  	<div class="container">
	      <img src="img/presents/D.jpg" style="-webkit-filter: grayscale(` + giftsTaken[3] + `%);filter: grayscale(` + giftsTaken[3] + `%)";>
	      <div class="centered">` + dOwner + `</div>
	    </div>
    </div>
  </div>
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
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
	setButtonActions();
}

function sendPresentSelectionToServer() {
	var currentPresent = getCurrentVisiblePresent();
	var currentPresentLetter = numberToLetterMap[currentPresent];
	$.get(base_url + "/person/" + playerName + "/" + currentPresentLetter, function(data, status){});
}

// function setTimerOfDice() {
//     $("#diceButton").attr("disabled", true);
//     setTimeout(function() { enableSubmit("#diceButton") }, (9 - playerToPresentMap.length) * 0);
// }