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

function bardTimeQuestion() {
	var input = $('#inputDiv');
	input.empty();
	var songList = [
		"FIREBALL",
		"LIGHTNING BLAST"
	];
	var youTubeEmbedList = [
		'<div class="iframe-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/mdo647DU8EE?start=44" ' +
		'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; ' +
		'gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>',
		'<div class="iframe-container"><<iframe width="560" height="315" src="https://www.youtube.com/embed/66IM7Pb6JYc?start=68" ' +
		'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; ' +
		'gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>'
	];
	var parodyList = [
		'I came in like a FIREBALL<br><br>only just to destroy you all',
		'The Electricity of my lightning<br><br>now you will feel my blast'
	];
	for (var i = 0 ; i < songList.length ; i++ ) {
		var songListId = 'songList' + i;
		input.append('<br><h1 id="' + songListId + '">' + songList[i] + '</h1>');
		setClickFunctionForSpells(songListId, songList[i], youTubeEmbedList[i], parodyList[i]);

	}
}

function setClickFunctionForSpells(songListId, songName, embeddedHtmlForYouTube, newParodyLyrics) {
		$("#" + songListId).on('click', function() {
			var input = $('#inputDiv');
			input.empty();
			input.append('<h1>' + songName + '</h1><br>');
			input.append(embeddedHtmlForYouTube + '<br>');
			input.append('<br><h2>' + newParodyLyrics + '</h2><br>');
    		input.append('<div class="inline-div"><div id="returnButton" class="inline-div"><img src="img/marioReturn\.png" style="height:85px; margin-bottom:-5px;"></div></div>');
 			setReturnButtonClickEventForSpells()
		});
}

function setReturnButtonClickEventForSpells() {
  $("#returnButton").on("click", function() {
    	bardTimeQuestion();
    });
}

function whiteElephantQuestion() {
	$(document).ready(function () {
		$.ajaxSetup({cache: false});
		whiteElephant();
	});
}