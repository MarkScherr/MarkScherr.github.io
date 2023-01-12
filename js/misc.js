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
		"LIGHTNING BOLT"
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

function spellsQuestion() {
	var input = $('#inputDiv');
	input.empty();
	var spellLevelList = [
		"Cantrip",
		"Level 1",
		"Level 2",
		"Level 3",
		"Level 4",
		"Not Equipped"
	];
	for (var i = 0 ; i < spellLevelList.length ; i++ ) {
		var spellLevelId = 'spellLevel' + i;
		input.append('<br><h1 id="' + spellLevelId + '">' + spellLevelList[i] + '</h1>');
		setSpellLevelClickFunction(spellLevelId, spellLevelList[i]);
	}

function setSpellLevelClickFunction(spellLevelId, spellLevelListItem) {

  $('#' + spellLevelId).on("click", function() {
    	spellsQuestion2(spellLevelListItem);
    });
}


}

var scrollPos;
function spellsQuestion2(spellLevelListItem) {
	var input = $('#inputDiv');
	input.empty();
	var spellListMap = new Map();
	spellListMap.set("Cantrip", BARD_CANTRIP_LIST);
	spellListMap.set("Level 1", BARD_SPELL_LEVEL_1);
	spellListMap.set("Level 2", BARD_SPELL_LEVEL_1);
	spellListMap.set("Level 3", BARD_SPELL_LEVEL_3);
	spellListMap.set("Level 4", BARD_SPELL_LEVEL_4);
	spellListMap.set("Not Equipped", BARD_SPELLS_NOT_EQUIPPED);

	var currentSpellLevelListToDisplay = spellListMap.get(spellLevelListItem);
	input.append('<h1>' + spellLevelListItem + ' Spells:</h1>');
	for (var i = 0 ; i < currentSpellLevelListToDisplay.length ; i++ ) {
		var spellListId = 'spellLevelListItem' + i;
		var currentSpellName = currentSpellLevelListToDisplay[i];
		input.append('<br><h2 id="' + spellListId + '">' + currentSpellName + '</h2>');
		setClickFunctionForSpellsWithoutTunes(spellListId, currentSpellName, BARD_SPELL_DETAIL.get(currentSpellName), spellLevelListItem);
	}    		
	input.append('<div class="inline-div"><div id="returnButton" class="inline-div"><img src="img/marioReturn\.png" style="height:85px; margin-bottom:-5px;"></div></div>');
	setReturnButtonClickEventForSpellsWithoutTunes();

}
function setClickFunctionForSpellsWithoutTunes(spellListId, spellName, spellDetail, spellLevelListItem) {
		$("#" + spellListId).on('click', function() {
			var input = $('#inputDiv');
			input.empty();
			input.append('<h1>' + spellName + ':</h1>');
			input.append('<br><h2>' + spellDetail + '</h2><br>');
    		input.append('<div class="inline-div"><div id="returnButton" class="inline-div"><img src="img/marioReturn\.png" style="height:85px; margin-bottom:-5px;"></div></div>');
 			setReturnButtonClickEventForSpellsWithoutTunesToLevelLevel(spellLevelListItem);
			$('html, body').animate({scrollTop: '0px'}, 300);
 			scrollPos = $(window).scrollTop();
		});
}


function setReturnButtonClickEventForSpellsWithoutTunesToLevelLevel(spellLevelListItem) {
  $("#returnButton").on("click", function() {
  	$('html, body').animate({
        scrollTop: scrollPos
      }, 500);
    	spellsQuestion2(spellLevelListItem);
    });
}

function setReturnButtonClickEventForSpellsWithoutTunes() {
  $("#returnButton").on("click", function() {
    	spellsQuestion();
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