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