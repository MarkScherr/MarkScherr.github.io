function parentSoundBoardQuestion() {
	var input = $('#inputDiv');
	infoType = 'longDivision';
	var soundIds = ['cleanTable', 'deodorant', 'feetCouch', 'feetToys', 'hatOff', 'kickDog', 
	'leanCouch', 'pretzel', 'sitUp', 'standCouch'];
	input.empty();
	input.append('<h5 id="' + soundIds[0] + '">Clean Table</h5><br><h5 id="' + soundIds[1] + '">Deodorant?</h5><br>' +
		'<h5 id="' + soundIds[2] + '">Feet of Off Couch</h5><br><h5 id="' + soundIds[3] + '">Feet Off Dog Toys</h5><br><h5 id="' + soundIds[4] + '">Hat Off</h5><br>' +
		'<h5 id="' + soundIds[5] + '">Do not Kick the Dog</h5><br><h5 id="' + soundIds[6] + '">Do not Lean on Couch</h5><br><h5 id="' + soundIds[7] + '">Pretzel Boy</h5><br>' +
		'<h5 id="' + soundIds[8] + '">Sit Up</h5><br><h5 id="' + soundIds[9] + '">Do not stand Behind Couch</h5>');

	setSoundBoardValues(soundIds);
}

function setSoundBoardValues(soundIds) {
	for (var i = 0 ; i < soundIds.length ; i++) {
		setClickFunction(soundIds[i]);
	}
}

function setClickFunction(soundId) {
		$("#" + soundId).on('click', function() {
		 	$('#' + soundId).append('<audio autoplay><source src="sound/parent/' + soundId + '.wav" type="audio/wav"></audio>');
		});
}


function bestManSpeechLinkClick() {
    $('#sound').append('<audio autoplay><source src="sound/smb/smb3_enter_level.wav" type="audio/wav"></audio>');
    bestManSpeechQuestion(0);
} 

function bestManSpeechQuestion(indexToTrigger) {
	var input = $('#inputDiv');
	input.empty();
	var triggerList = ["QUARTER CENTURY", "THANKS", "SHORT", "READ THIS CARD", "CHEERING UP", 
	"ARSENAL", "I Also Have Those", "CONVINCING", "DO IT!!!", "HANDY", "NEED HELP CONVINCING", "LUCKY", "HAPPY", "PERFECT MATCH", "TOAST"];
	var triggerLine = [	
"Hi! My name is Mark, I have been friends with Dave for about a quarter century, but it feels much longer than that. PAUSE",
"Before I get too far into my speech, I just want to stop and say thank you to . . .for her amazing speech. She is going to be a tough act to follow. Well done!",
"I was told that I should tell stories and talk about Dave in only a positive non-incriminating way, so this will be a very short speech. PAUSE 🤣",
"What can I say about Dave? Okay here it goes: (look directly at note cards) Dave is so good looking, so considerate, so humble, so . . . Dave, what else did you tell me to say? I can't read your writing here on this card. PAUSE 🤣🤣🤣",
"But seriously, Dave is a great guy, whenever you need some cheering up he will always be there to laugh with you or at you. ",
"Of all the people I know, Dave is the only friend that keeps an arsenal of funny videos and pictures or embarrassing moments of your life categorized for retaliation. ",
"Because of this, I too havce a file of incriminating photos and videos that I keep of Dave. (Smile devilishly) 😈😈😈 But since it is his wedding night, I will keep those to myself. 🤣😜",
"One thing I feel is a great tip for Sarah that I learned early on while spending time with the Nohr Family is that they are great at convincing you to do things out of your comfort zone.",
"Whenever I was timid about trying a new food or doing something new, I would hear the Nohr's shout \"Mark, just do it! Do it! Do it! Try it! Do it!\" In the end, I would always breakdown at their insistent nature and eventually do it!",
"Sarah, this comes in handy with Dave because if you push him about things over and over he will do it too! ",
"So Sarah, if there is ever a time where he needs a little extra convincing be relentless and if he still doesnt want to do it, call me up and I will keep at him too! Dave do something! 😄",
"To wrap this up, I just want to say that Dave is a very lucky man. Sarah you are truly the best person for Dave, you have the humour to match Dave's wit.",
"You are down to earth and have the same fun and adventurous spirit. Most importantly though is that I have never seen Dave so happy.",
"I have been trying to convince Dave to settle down and get married for awhile now. All the yelling to Dave to \"do something!\" has finally paid off! I am just so glad that he waited for his perfect match to come along.",
"Now, Please join me in raising a glass (raise your glass🥂) to the happy couple. To Dave and Sarah Nohr!"];
	input.append('<h1>' + triggerList[indexToTrigger] + '</h1>');
	input.append('<h1>' + triggerLine[indexToTrigger] + '</h1>');
	speechNextBox();
	speechRandomBox();
    speechKeyPress(indexToTrigger, triggerList.length - 1);
}


function speechKeyPress(indexToTrigger, largestIndex) {
    $("#randomButton").on("click", function(){
    	bestManSpeechQuestion(getRandom(0 , largestIndex));
    });
    $("#nextButton").on("click", function(){
    	if (indexToTrigger == largestIndex) {
    		indexToTrigger = 0;
    		bestManSpeechQuestion(indexToTrigger);
    	} else {
    		bestManSpeechQuestion(indexToTrigger + 1);
    	}
    });
}


function speechNextBox() {
    	$('#inputDiv').append('<div class="inline-div"><div id="nextButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div></div>');
	 
}

function speechRandomBox() {
    	$('#inputDiv').append('<div class="inline-div"><div id="randomButton" class="inline-div"><img src="img/questionBlock.gif" style="height:85px; margin-bottom:-5px;"></div></div>');
	 
}
function whiteElephantQuestion() {
	$(document).ready(function () {
		$.ajaxSetup({cache: false});
		whiteElephant();
	});
}