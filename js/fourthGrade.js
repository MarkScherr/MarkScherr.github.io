/////////////////////////////////////////////////////LONG DIVISION/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function longDivisionQuestion() {
	var input = $('#inputDiv');
	infoType = 'longDivision';
	input.empty();
	var dividend = 0;
	var divisor = 0;
	
	do {
	    correctAnswer = getRandom(130, 9870);
	    divisor = getRandom(2,9);
	    
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	
	dividend = divisor * correctAnswer;
	console.log(dividend +' ' + divisor + ' '+ correctAnswer);
	previousNumbers.push(correctAnswer);
	
	input.append('<div class="longDivision" style="width: 50%;margin: 0 auto;"><input type="number" class="form-control" id="guessNumber" style="width:50%;height:50px;margin-right:0px;">' +
	'<h1 style="margin-right:-50px;"><span class="numbers">' + divisor + ' </span><span class="numbers" ' +
    'style="border-top: 3px #fff solid; border-left: 3px #fff solid;"> ' + dividend + '</span></div>');
	appendHelpBox();
    $('#guessNumber').focus();
    count++;
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
    
}

/////////////////////////////////////////////////////MULTIPLY NEGATIVES////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiplyWithNegativesQuestion() {
	var input = $('#inputDiv');
	infoType = 'multiplyWithNegatives';
	input.empty();
    do{
        var firstFactor = getRandom(3,13); 
		var secondFactor = getRandom(3, 11);
		
		
		firstFactor *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		secondFactor *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		
    } while (firstFactor == 10 || firstFactor == 11 || secondFactor == 10 || previousNumbers.includes(secondFactor));
	

    input.append('<h1>' + firstFactor + ' X ' + secondFactor + ' ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
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



/////////////////////////////////////////////////////DIVISION WITH NEGATIVES///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function divisionWithNegativesQuestion() {
	infoType = 'divisionWithNegatives'
	var input = $("#inputDiv");
	input.empty();
	var currentQuestion = [];
	do {
		var currentQuestion = [];
		var question = [];
		var allQuestions = [];
		correctAnswer = getRandom(2,8);
		var divisor = getRandom(2,8);
        
        correctAnswer *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        divisor *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        
		currentQuestion.push(correctAnswer,divisor);
		allQuestions = previousNumbers;
		allQuestions = JSON.stringify(allQuestions);
		question = JSON.stringify(currentQuestion);
		console.log(previousNumbers);

	} while(allQuestions.indexOf(question) > 0);
	
	var dividend = correctAnswer * divisor;
	input.append('<h1 id="divisionQuestion">' + dividend + ' ÷ ' + divisor + ' ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	count++;
	$('#guessNumber').focus();
	previousNumbers.push(currentQuestion);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}


//////////////////////////////////////////////////PEMDAS////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pemdasSolvingQuestion() {
	infoType = 'pemdasSolving';
	input = $("#inputDiv");
	input.empty();
	
	// 1=multiplication 2=additon 3=subtraction
	do {
		var numberTwoType = getRandom(1,3);
		var numberThreeType = getRandom(1,3);
	} while (numberTwoType == numberThreeType);
	
	var parenthesisPosition = getRandom(0,2);
	
	
	var numberOne = getRandom(2,8);
	var numberTwo = getRandom(2,8);
	var numberThree = getRandom(2,8);
	var row = '';
	
	if(parenthesisPosition == 0) {
		if (numberTwoType == 1 && numberThreeType ==2) {
			row += '<h1>(' + numberOne + ' x ' + numberTwo + ') + ' + numberThree;
			correctAnswer = (numberOne * numberTwo) + numberThree;

		} else if (numberTwoType == 1 && numberThreeType == 3) {
			row += '<h1>(' + numberOne + ' x ' + numberTwo + ') - ' + numberThree;
			correctAnswer = (numberOne * numberTwo) - numberThree;
			
		} else if(numberTwoType == 2 && numberThreeType == 1) {
			row += '<h1>(' + numberOne + ' + ' + numberTwo + ') x ' + numberThree;
			correctAnswer = (numberOne + numberTwo) * numberThree;
			
		} else if(numberTwoType == 2 && numberThreeType == 3) {
			row += '<h1>(' + numberOne + ' + ' + numberTwo + ') - ' + numberThree;
			correctAnswer = (numberOne + numberTwo) - numberThree;
			
		} else if(numberTwoType == 3 && numberThreeType == 1) {
			row += '<h1>(' + numberOne + ' - ' + numberTwo + ') x ' + numberThree;
			correctAnswer = (numberOne - numberTwo) * numberThree;
			
		} else if(numberTwoType == 3 && numberThreeType == 2) {
			row += '<h1>(' + numberOne + ' - ' + numberTwo + ') + ' + numberThree;
			correctAnswer = (numberOne - numberTwo) + numberThree;

		}
	} else {
		if (numberTwoType == 1 && numberThreeType == 2) {
			row += '<h1>' + numberOne + ' x ' + '(' + numberTwo + ' + ' + numberThree + ')';
			correctAnswer = numberOne * (numberTwo + numberThree);

		} else if (numberTwoType == 1 && numberThreeType == 3) {
			row += '<h1>' + numberOne + ' x ' + '(' + numberTwo + ' - ' + numberThree + ')';
			correctAnswer = numberOne * (numberTwo - numberThree);
			
		} else if(numberTwoType == 2 && numberThreeType == 1) {
			row += '<h1>' + numberOne + ' + ' + '(' + numberTwo + ' x ' + numberThree + ')';
			correctAnswer = numberOne + (numberTwo * numberThree);
			
		} else if(numberTwoType == 2 && numberThreeType == 3) {
			row += '<h1>' + numberOne + ' + ' + '(' + numberTwo + ' - ' + numberThree + ')';
			correctAnswer = numberOne + (numberTwo - numberThree);
			
		} else if(numberTwoType == 3 && numberThreeType == 1) {
			row += '<h1>' + numberOne + ' - ' + '(' + numberTwo + ' x ' + numberThree + ')';
			correctAnswer = numberOne - (numberTwo * numberThree);
			
		} else if (numberTwoType == 3 && numberThreeType == 2) {
			row += '<h1>' + numberOne + ' - ' + '(' + numberTwo + ' + ' + numberThree + ')';
			correctAnswer = numberOne - (numberTwo + numberThree);
		}
	}
	input.append(row);
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	count++;    
    $('#guessNumber').focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////////DECIMAL ADD////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function decimalAddQuestion() {
	infoType = 'decimalAdd';
	var numberOne = 0.0;
	var numberTwo = 0.0;
	input = $("#inputDiv");
	input.empty();
	do {
		numberOne = (Math.random()*(60)+10).toPrecision(3);
		numberTwo = (Math.random()*(60)+10).toPrecision(3);

		correctAnswer = (parseFloat(numberOne) + parseFloat(numberTwo)).toPrecision(3);		

	}while(correctAnswer > 100 || previousNumbers.indexOf(correctAnswer) >= 0);
	input.append('<h1>' + numberOne + ' + ' + numberTwo + ' ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	
	$("#guessNumber").focus();
	count++;
	previousNumbers.push(correctAnswer);	
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }

}


//////////////////////////////////////////////////FRACTION TO DECIMAL//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionToDecimalQuestion(){
    infoType = 'fractionToDecimal';
	input = $("#inputDiv");
	input.empty();
	do{
    	var fullNumber = getRandom(1,100);
    	do {
            var denominator = getRandom(1,98);
            var numerator = getRandom(1,98);
    	} while(numerator >= denominator || 100 % denominator != 0);
    	correctAnswer = fullNumber + (numerator/denominator);
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	
	previousNumbers.push(correctAnswer);
	
	console.log(fullNumber + ' ' + numerator + '/' + denominator);
	console.log(correctAnswer);
	
	input.append('<h1>' + fullNumber + ' <sup>' + numerator + '</sup>/<sub>' + denominator + '</sub> ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	count++;
	$("#guessNumber").focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}
//////////////////////////////////////////////////GCF//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function gcfQuestion() {
    infoType = 'gcf';
	input = $("#inputDiv");
	input.empty();
	var firstNumber = 0;
	var secondNumber = 0; 
	var thirdNumber = 0;
	
	do{
        firstNumber = getRandom(5,80);
        secondNumber = getRandom(5,80);
        thirdNumber = getRandom(5,80);
        var thisArray = [firstNumber, secondNumber, thirdNumber];
        
        console.log(thisArray);
        var smallestNumber = 999999999;
        
        for (var i = 0 ; i < 3; i++){
            if(thisArray[i] < smallestNumber) {
                smallestNumber = thisArray[i];
            }
        }
        var greatestFactor = 1;
        for (var i = smallestNumber ; i > 0 ; i--) {
            if(firstNumber % i == 0 && secondNumber % i == 0 && thirdNumber % i == 0) {
                greatestFactor = i;
                break;
            }
        }
        
        correctAnswer = greatestFactor;
	    if(greatestFactor == 1 && previousNumbers.length == getRandom(4,4) && previousNumbers.indexOf(1) == -1) {
	        break;
	    }
	    
	} while(greatestFactor < 2 || greatestFactor > 11 ||firstNumber == secondNumber || thirdNumber == secondNumber || thirdNumber == firstNumber || previousNumbers.indexOf(correctAnswer) > -1);
    previousNumbers.push(correctAnswer);
    
    console.log(correctAnswer);
    console.log(thisArray);
    
    input.append('<h1>' + firstNumber + ', ' + secondNumber + ', ' + thirdNumber);
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	count++;
	$("#guessNumber").focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

//////////////////////////////////////////////////PERCENTAGES////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function percentQuestion() {
    infoType = 'percent';
	input = $("#inputDiv");
	input.empty();
	var percent = 0.0;
	var number = 0.0;
	do {
    	do {
    	    percent = getRandom(5,96);
    	} while(percent % 5 != 0);
    	
    	do {
    	    number = getRandom(10,90);
    	} while(number % 10 != 0);
    	
    	correctAnswer = number * (percent/100);
	} while (previousNumbers.indexOf(percent) > -1 );
    previousNumbers.push(percent);
    
	console.log(correctAnswer);
	
	input.append('<h1>' + percent + '% of ' + number + ' ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	count++;
	$("#guessNumber").focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

