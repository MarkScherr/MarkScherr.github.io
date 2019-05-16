
/////////////////////////////////////////////////SHAWN METHODS/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function canToUsQuestion() {
	var input = $('#inputDiv');
	var infoType = "canToUs";
	input.empty();
	
	input.append('<h1>Canadian to US Conversion</h1><input type="number" class="form-control" id="guessNumber" style="font-size:24px;height:50px">');
    correctAnswer = 0.77;
    $('#guessNumber').focus();
    shawnKeypress(infoType);
}

function literToGallonQuestion() {
	var input = $('#inputDiv');
	var infoType = "literToGallon";
	input.empty();	
	input.append('<h1>Liter to Gallon Conversion</h1><input type="number" class="form-control" id="guessNumber" style="font-size:24px;height:50px">');
    correctAnswer = 0.264172;
    $('#guessNumber').focus();
    
	shawnKeypress(infoType);
}

function gasPriceQuestion() {
	var input = $('#inputDiv');
	var infoType = "gasPrice";
	input.empty();	
	input.append('<h1>Enter Gas Price</h1><input type="number" class="form-control" id="guessNumber" style="font-size:24px;height:50px">');
    correctAnswer = 1/0.264172 * .77;
    shawnKeypress(infoType);
} */
/////////////////////////////////////////////////MULTIPLY//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiplyQuestion() {
	var input = $('#inputDiv');
	infoType = 'multiply';
	input.empty();
    do{
        var firstFactor = getRandom(3,13); 
		var secondFactor = getRandom(3, 11);
		
    } while (firstFactor == 10 || firstFactor == 11 || secondFactor == 10 || previousNumbers.includes(secondFactor));
	

    input.append('<h1>' + firstFactor + ' X ' + secondFactor + ' ');
    appendHelpBox();	
    genericSubmitBox();
	 
    previousNumbers.push(secondFactor);
    correctAnswer = firstFactor * secondFactor;
    count++;
    console.log(correctAnswer);
    $('#guessNumber').focus();
    if(!isRandomTopic) {
    genericKeyPress(infoType, 10);
    } else {
     randomKeyPress();
}
}


/////////////////////////////////////////////////////DIVISION///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function divisionQuestion() {
    $("#selectionLinks").hide(); 
	infoType = 'division'
	var input = $("#inputDiv");
	input.empty();
	var currentQuestion = [];
	do {
		currentQuestion = [];
		var question = [];
		var allQuestions = [];
		correctAnswer = getRandom(2,8);
		var divisor = getRandom(2,8);

		currentQuestion.push(correctAnswer,divisor);
		allQuestions = previousNumbers;
		allQuestions = JSON.stringify(allQuestions);
		question = JSON.stringify(currentQuestion);
		console.log(previousNumbers);

	} while(allQuestions.indexOf(question) > 0);
	
	var dividend = correctAnswer * divisor;
	input.append('<h1 id="divisionQuestion">' + dividend + ' ÷ ' + divisor);
	appendHelpBox();	
    genericSubmitBox();
    
	count++;
	$('#guessNumber').focus();
	previousNumbers.push(currentQuestion);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

////////////////////////////////////////////////////TWO DIGIT MULTIPLY//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function twoDigitMultiplyQuestion() {
	infoType = 'twoDigitMultiply';
	var input = $("#inputDiv");
	input.empty();
	input.append('<h2>Under Construction!</h2>');
		do {
	    var multiplicandOne = getRandom(10, 90);
	    var multiplicandTwo = getRandom(10, 90);
	    correctAnswer = multiplicandOne * multiplicandTwo;
	    
	} while (correctAnswer%10 === 0 || previousNumbers.indexOf(correctAnswer) > -1);
	console.log(correctAnswer);
	previousNumbers.push(correctAnswer);
	
	input.append('<h1>\&nbsp;'+ multiplicandOne + '</h1><h1>X'+ multiplicandTwo + '</h1>');
	appendHelpBox();
	input.append('<div>' +  
	            '<div class="inline-div"><input type="number" class="form-control" value="0" style="height:50px;width:40px" readonly></div>' +
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div><br>' +
                '</div><div>' +
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
                '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +         
                '<div class="inline-div"><input type="number" class="form-control" value="0" style="height:50px;width:40px" readonly></div><br>' +
                '</div>' +
                '<input type="number" class="form-control" id="guessNumber" style="width: 160px;height:50px;direction: rtl;unicode-bidi: bidi-override;">' +
                '<div id="submitButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div>');
     count++;
     backwardsWritingKeypress(infoType, 10);
}

////////////////////////////////////////////////////ROUNDING////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function roundingQuestion() {
	infoType = 'rounding';
	var input = $("#inputDiv");
	input.empty();
	//typeOfRounding 0=smallest number from answer, 1=largest number from answer, 2-5=round to nearest 10
    var typeOfRounding = getRandom(0,6);
	input.append('<h1');
	switch(typeOfRounding) {
	    case 0:
	        do {
	            var questionNumber = getRandom(10,991);
	        } while(questionNumber % 10 != 0 || previousNumbers.indexOf(questionNumber-5) > -1);
	        
	        correctAnswer = questionNumber - 5;
	        input.append('Smallest Number that rounds to ' + questionNumber);
	        break;
        case 1:
            do {
	            var questionNumber = getRandom(10,991);
	        } while(questionNumber % 10 != 0 || previousNumbers.indexOf(questionNumber+4) > -1);
	        
	        correctAnswer = questionNumber + 4;
	        input.append('Largest Number that rounds to ' + questionNumber);
            break;
        case 2:
        case 3:
        case 4:
        case 5: 
             do {
	            correctAnswer = getRandom(10,991);
	        } while(correctAnswer % 10 != 0 || previousNumbers.indexOf(correctAnswer) > -1);
	        
	        var randomDifference = getRandom(1,5);
	        
	        if(randomDifference == 5) {
	            randomDifference -= 10;
	        } else {
	            randomDifference *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	        }
	        var questionNumber = correctAnswer + randomDifference;
	        input.append('Number that '+ questionNumber + ' rounds to');
            break;
        default: 
            alert('you shouldn\'t be here, go home you\'re drunk')
	}
	
	console.log(correctAnswer);
	appendHelpBox();
    genericSubmitBox();
	$('#guessNumber').focus();
	count++;
	
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

////////////////////////////////////////////////////FRACTION ADD////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionAddQuestion() {
	infoType = 'fractionAdd';
	var input = $("#inputDiv");
	input.empty();
	do {
		var numeratorOne = getRandom(1,4);
		var denominatorOne = getRandom(1,5);
	} while(denominatorOne<= numeratorOne);
	
	do {
		var numeratorTwo = getRandom(1,4);
		var denominatorTwo  = getRandom(1,5);
	} while(denominatorTwo <= numeratorTwo);
	

	simplifyFraction((numeratorOne*denominatorTwo) + (numeratorTwo*denominatorOne), (denominatorOne * denominatorTwo));
	if(simplifiedFullNumber > 0 && simplifiedNumerator == 0) {
		correctAnswer = (simplifiedFullNumber)
	} else if(simplifiedFullNumber > 0) {
		correctAnswer = (simplifiedFullNumber + ' ' + simplifiedNumerator + '/' + simplifiedDenominator);
	} else {
		correctAnswer = (simplifiedNumerator + '/' + simplifiedDenominator);
	}
	
	input.append('<h1><sup>' + numeratorOne + '</sup>/<sub>' + denominatorOne + 
	'</sub> + <sup>' + numeratorTwo + '</sup>/<sub>' + denominatorTwo + '</sub> ');
	appendHelpBox();
	fractionSubmitBox();	
	count++;
	$('#numeratorGuess').focus();
	fractionKeypress(infoType);
}


////////////////////////////////////////////////FRACTION SIMPLIFY///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionSimplifyQuestion() {
	infoType = 'fractionSimplify';
	var fullNumberGuess = 0;
	var numeratorGuess = 0;
	var denominatorGuess = 0;
	input = $("#inputDiv");
	input.empty();
	do {
		var numerator = getRandom(1,60);
		var denominator = getRandom(1,60);
	} while((numerator % 2 != 0 && denominator % 2 != 0) || 
	(numerator % 3 != 0 && denominator % 3 != 0) || (numerator % 4 != 0 && denominator % 4 != 0) || 
	(numerator % 5 != 0 && denominator % 5 != 0) || (numerator % 6 != 0 && denominator % 6 != 0));
	simplifyFraction(numerator, denominator);
	
	if(simplifiedFullNumber > 0 && simplifiedNumerator == 0) {
		correctAnswer = (simplifiedFullNumber)
	} else if(simplifiedFullNumber > 0) {
		correctAnswer = (simplifiedFullNumber + ' ' + simplifiedNumerator + '/' + simplifiedDenominator);
	} else {
		correctAnswer = (simplifiedNumerator + '/' + simplifiedDenominator);
	}
	
	input.append('<h1 class="fractionFont"><sup>' + numerator + '</sup>/<sub>' + denominator + ' ');
    appendHelpBox();
    fractionSubmitBox();
	count++;
	$('#numeratorGuess').focus();
	fractionKeypress(infoType);
}


/////////////////////////////////////////////////ROMAN NUMERALS////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function romanNumeralQuestion() {
	var input = $('#inputDiv');
	infoType = 'romanNumeral';
	input.empty();
	var numeralSingles = ["z","I","II","III","IV","V","VI","VII","VIII","IX"];
	var numeralTens = ["z","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	var numeralHundreds = ["z","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    do{
		var numeralQuestion = getRandom(1,1000);
		correctAnswer = numeralQuestion;
		var numeralTracker = 0;
		var numeralToDisplay = "";
		
		while(numeralQuestion >= 100) {
		    numeralTracker++;
		    numeralQuestion -= 100;
		}
		if(numeralTracker > 0) {
		    numeralToDisplay += numeralHundreds[numeralTracker];
		    numeralTracker = 0;
		}
		
		while(numeralQuestion >= 10) {
		    numeralTracker++;
		    numeralQuestion -= 10;
		}
		if(numeralTracker > 0) {
		    numeralToDisplay += numeralTens[numeralTracker];
		    numeralTracker = 0;
		} 
		if(numeralQuestion > 0) {
		    numeralToDisplay += numeralSingles[numeralQuestion];
		}
		
    } while (previousNumbers.indexOf(correctAnswer) > -1);
	console.log(numeralToDisplay);
    previousNumbers.push(correctAnswer);
    
    input.append('<h1>' + numeralToDisplay + ' ');
    appendHelpBox();
    genericSubmitBox();
		
	 count++;
	 
	 $('#guessNumber').focus();
    if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
    } else {
	     randomKeyPress();
    }
    
}


/////////////////////////////////////////////////TIME MATH/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tellTimeQuestion() {
	var input = $('#inputDiv');
	infoType = 'tellTime';
	input.empty();
	var hour = 0;
	var minute = 0;
	var displayAddOrSubtract;
	do{
	    hour = getRandom(1,12);
	    minute = getRandom(0,58);
        
	    if (minute == 0) {
	        minute = "00";
	    } else if(minute < 10) {
	        minute = "0" + minute;
	    }
	    correctAnswer = hour + ":" + minute;
	    
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	console.log(correctAnswer);
	
	previousNumbers.push(correctAnswer);
	
	input.append('<canvas id="canvas" width="150" height="150" style="margin: 0px; background-color:#000"></canvas>' +
        '<script src="js/clock.js"></script><h1>What time is it?');
    appendHelpBox();
    input.append('<div class="inline-div"><input type="text" class="form-control" id="guessNumber" style="height:50px;width:100px"></div>' +
	            '<div id="submitButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div>');
	 
    drawClock(hour, minute);
    count++;
    $('#guessNumber').focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
    
}

/////////////////////////////////////////////////TIME MATH/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function timeMathQuestion() {
	var input = $('#inputDiv');
	infoType = 'timeMath';
	input.empty();
	var hour = 0
	var minute = 0
	var minutesToMath = 0;
	var displayAddOrSubtract;
	do{
	    hour = getRandom(1,12);
	    minute = getRandom(0,56);
	    minutesToMath = getRandom(15,86);
	    var addOrSubtract = getRandom(0,2);
	    var minuteAnswer = 0;
	    var hourAnswer = hour;
	    if(addOrSubtract == 1) {
	        displayAddOrSubtract = "Add ";
	        minuteAnswer = minutesToMath + minute;
	        while (minuteAnswer > 59) {
	            if(hourAnswer < 12){
	                hourAnswer++
	            } else {
	                hourAnswer = 1;
	            }
	            minuteAnswer -= 60;
	        }
	    } else {
	        displayAddOrSubtract = "Subtract ";
	        minuteAnswer = minute - minutesToMath;
	        while(minuteAnswer < 0) {
	            if(hourAnswer > 1) {
	                hourAnswer--;
	            } else {
	                hourAnswer = 12;
	            }
	            minuteAnswer += 60;
	        }
	    }
	    if (minuteAnswer == 0) {
	        minuteAnswer = "00";
	    } else if(minuteAnswer < 10) {
	        minuteAnswer = "0" + minuteAnswer;
	    }
	    correctAnswer = hourAnswer + ":" + minuteAnswer;
	    
	} while(minute % 5 != 0 || minutesToMath % 5 != 0 || previousNumbers.indexOf(correctAnswer) > -1);
	console.log(correctAnswer);
	
	previousNumbers.push(correctAnswer);
	
	input.append('<canvas id="canvas" width="150" height="150" style="margin: 0px; background-color:#000"></canvas>' +
        '<script src="js/clock.js"></script><h1>'+ displayAddOrSubtract + minutesToMath + ' minutes ');
    appendHelpBox();
    input.append('<div class="inline-div"><input type="text" class="form-control" id="guessNumber" style="height:50px;width:100px"></div>' +
	            '<div id="submitButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div>');
	 
    drawClock(hour, minute);
    count++;
    $('#guessNumber').focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
    
}
