//////////////////////////////////////RANDOM QUESTIONS/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function randomQuestionsQuestion(){
	isRandomTopic = true;
	var subject = getRandom(0,randomTopic.length);
	$('#musicDiv').append('<audio autoplay loop><source src="sound/bowserCastle.mp3" type="audio/mp3"></audio>');
	var type = randomTopic[subject];
	window[type + "Question"]();
}

//////////////////////////////////////RANDOM QUESTIONS/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function multiplicationTimedQuestion() {
	var input = $('#inputDiv');
	infoType = 'multiplicationTimed';
	input.empty();
	if(count == 0) {
	    if(localStorage.getItem('highScore')) {
	        highScore = localStorage.getItem('highScore');
	    }
	    $('#scoreBoard').empty();
        $('#scoreBoard').append('<div id="countDown" style="float:left;margin-top:8px;"></div>' +
            '<div id="score" style="margin-top:8px;"></div>');
	    $('#countDown').append('<p class="marioFont">1:00</p>')
	}
	if(count == 1){
    	$('#musicDiv').append('<audio autoplay><source src="sound/smb_warning.wav" type="audio/wav"></audio>');
	    timerFunction(1,0);
	}
    
    do{
        var firstFactor = getRandom(3,8); 
		var secondFactor = getRandom(3, 8);
		
    } while (firstFactor == 10 || firstFactor == 11 || secondFactor == 10);
	var score = correctAnswers * 4000 - wrongAnswers * 6500;
	$('#score').empty();
    $('#score').append('<p class="marioFont">score</p><p class="marioFont">' + score + '</p>' +
    '<p class="marioFont">highscore</p><p class="marioFont">' + highScore + '</p>');
    input.append('<h1>' + firstFactor + ' X ' + secondFactor + '</h1><input type="number" class="form-control" id="guessNumber" style="font-size:24px;height:50px">');
    
    correctAnswer = firstFactor * secondFactor;
    
    count++;
    console.log(correctAnswer);
    if (count>1) {
        if(myTimer.minutes == 0 && myTimer.seconds == 0) {
            resultsOfTimeChallenge(score);
        }
    }
    $('#guessNumber').focus();
    genericKeyPress(infoType, 5000);
	
	
}

function resultsOfTimeChallenge(score) {
    refreshSite();
    if(score > highScore) {
        $('#inputDiv').append('<h1>NEW HIGH SCORE!</h1>');
        localStorage.setItem('highScore' , score);
        highScore = localStorage.getItem('highScore');
    }
    $('#inputDiv').append('<h1>Score: ' + score + '</h1>');
    $('#resultsOfMathQuestion').show();
    $('#resultsOfMathQuestion').append('<h1>Try Again</h1><div id="questionCloud"><img src="img/Retro Question Cloud.png" style="display: block;' +
    'margin-left: auto;margin-right: auto;width: 25%;"></div>');
    retryMultiply();
} 

function retryMultiply() {
    $('#questionCloud').on('click', function(){
        refreshSite();
        multiplicationTimedQuestion();
    });
}

//////////////////////////////////////TRIAL BY FIRE////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function trialByFireQuestion() {
    var input = $('#inputDiv');
	infoType = 'trialByFire';
	input.empty();
    if(count > 0) {
        checkTime();
    } 
    if(count < 64) {
    	if(count == 0) {
    	    $('#scoreBoard').empty();
            $('#scoreBoard').append('<div id="countDown" style="margin-bottom:0px;"></div>');
    	    $('#countDown').append('<p class="marioFont" style="margin: 0 0 0 0px;">5:00</p>');
    	    $('#musicDiv').append('<audio autoplay><source src="sound/smb_warning.wav" type="audio/wav"></audio>');
    	    
    	}
    	var bigNumber = 0;
        var smallerNumber = 0;
        var difficulty = 0;
    	do {
    	   
    	    var currentQuestion = [];
    		var question = [];
    		var allQuestions = [];
    		
    		var questionCount = 0;
    		correctAnswer = getRandom(2,8);
    		smallerNumber = getRandom(2,8);
    		
    		bigNumber = correctAnswer * smallerNumber;
    
    		currentQuestion.push(bigNumber,smallerNumber);
    		allQuestions = previousNumbers;
    		allQuestions = JSON.stringify(allQuestions);
    		question = JSON.stringify(currentQuestion);
    		
    		for (var i = 0 ; i < allQuestions.length ; i++ ) {
    		    if (allQuestions[i] == question) {
    		        questionCount ++;
    		    }
    		}
    	} while(questionCount > 1);
    
        previousNumbers.push(currentQuestion);
    	count++;
        input.append('<h1>' + count + ') ' + bigNumber + ' / ' + smallerNumber + ' ');
        appendHelpBox();
        input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
        
    
        console.log(correctAnswer);
        $('#guessNumber').focus();
     
        if(count == 1) {
    	    timerFunction(5,0);
        }
        genericKeyPress(infoType, 64);
        checkTime();
    }
	
}

function checkTime() {
    if(myTimer.minutes == 0 && myTimer.seconds == 0) {
        if(correctAnswers < 50) {
            isPerfect = false;
        }
        count = 50;
        results();
    }
}

function timerFunction(minutes, seconds) {
    $('#countDown').empty();
    var Timer = function(opts) {
      var self = this;
    
      self.opts     = opts || {};
      self.element  = opts.element || null;
      self.minutes  = opts.minutes || 0;
      self.seconds  = opts.seconds || 0;
    
      self.start = function() {
        self.interval = setInterval(countDown, 1000);
      };
    
      self.stop = function() {
        clearInterval(self.interval);
      };

      function countDown() {
        self.seconds--;
        if (self.minutes === 0 && self.seconds === 0) {
          self.stop();
        }
    
        if (self.seconds < 0) {
          self.seconds = 59;
          self.minutes--;
        }
    
        if (self.seconds <= 9) { self.seconds = '0' + self.seconds; }
        $('#countDown').empty();
        $('#countDown').append('<p class="marioFont">'+self.minutes+':'+self.seconds+'</p>')
      //  self.element.textContent = self.minutes + ' : ' + self.seconds;
      }
    };
    if(myTimer) {
        myTimer.stop();
    }
    myTimer = new Timer(
        {
        minutes: minutes,
        seconds: seconds,
        element: document.querySelector('#countDown')
    });
	
    myTimer.start();
}



//////////////////////////////////////Social Studies////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function socialStudiesQuestion() {
    infoType = 'socialStudies';
    var input = $('#inputDiv');
    var socialStudiesQuestions = [
    "Long ago, why did people build lighthouses?",
    "What animal lives in swamps in the SE?",
    "What is made from wood in the SE?",
    "What are some crops in the SE?",
    "What SE state is a major producer of peanuts?",
    "What natural resources in the SE do power plants burn for energy?",
    "Where is the fall line located?",
    "What state borders the Gulf of Mexico and the Atlantic Ocean?",
    "What area is very flat, low elevation, and different kinds of wetlands?",
    "How are the inner coastal plains different from the outer coastal plains?",
    "What has the highest elevation in the SE?",
    "Name landforms found in the SE:",
    "What mountain ranges are part of the Appalachians?",
    "What word best describes the climate of the SE?",
    "Describe a hurricane:"
    ]
    var socialStudiesAnswers = [
    "To help ships avoid rocky coastlines.",
    "Aligator",
    "Boards for furniture and paper pulp.",
    "Cotton, corn, peanuts, rice, oranges, soybean",
    "Georgia",
    "Coal",
    "Between Piedmont and the Coastal Plains.",
    "Florida",
    "Outer Coastal Plains",
    "Inner has higher elevation and closer inland.",
    "Mt. Mitchell, North Carolina",
    "Mountains, plains, beaches, wetlands, and island keys",
    "Blue Ridge Mountains and the Great Smoky Mountains",
    "Fucking Hunter can't write out his homework is properly",
    "Harsh, violent storm that forms over the ocean from June to November"
    ]
    input.empty();
    do {
        correctAnswer = getRandom(0, 15);
        console.log(correctAnswer);
        
    } while(previousNumbers.indexOf(correctAnswer) > -1);

    previousNumbers.push(correctAnswer);
    var incorrectAnswers = [];
    var incorrectAnswer = -1;
    incorrectAnswers.push(correctAnswer);
    for (var i = 0 ; i < 3 ; i++) {
            do {
                incorrectAnswer = getRandom(0,15);
            } while(incorrectAnswers.indexOf(incorrectAnswer) > -1);
            incorrectAnswers.push(incorrectAnswer);
            incorrectAnswer = -1;
    }
    console.log(incorrectAnswers);
    
    input.append('<div class="socialStudies" margin: 0 auto;"><h4  style="font-size:14px">' + 
        socialStudiesQuestions[correctAnswer] +'</h4></div><hr color="white" size="10"/>');
    var answerSelections = [];

    for (let i = 0 ; i < 4 ; i++) {
        var currentIndex = i;
        do {
            var currentAnswer = getRandom(0,4);
        } while (answerSelections.indexOf(currentAnswer) > -1);

        answerSelections.push(currentAnswer);

        console.log(incorrectAnswers[currentAnswer]);
        input.append('<div id="' + incorrectAnswers[currentAnswer] + 'answer"<h6 style="font-size:12px">' + socialStudiesAnswers[incorrectAnswers[currentAnswer]] + '</h6></div><br>');
        createOnClickForAnswer(incorrectAnswers[currentAnswer], input, socialStudiesAnswers);

    }
}

function createOnClickForAnswer(guess, input, socialStudiesAnswers) {
        $('#' + guess + 'answer').on('click', function() {
            console.log(guess);
            input.append('<input id="guessNumber" type="hidden" value="' + guess + '" />');
            count++;
            socialStudiesKeypress(infoType, 15, socialStudiesAnswers);
        });
}