
//////////////////////////////////////////////////FRACTION MULTIPLY////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionMultiplyQuestion() {
    infoType = 'fractionMultiply';
	input = $("#inputDiv");
	input.empty();
	
	do {
		var numeratorOne = getRandom(1,9);
		var denominatorOne = getRandom(1,9);
	} while(denominatorOne<= numeratorOne);
	
	do {
		var numeratorTwo = getRandom(1,4);
		var denominatorTwo  = getRandom(1,5);
	} while(denominatorTwo <= numeratorTwo);
	
	simplifyFraction((numeratorOne*numeratorTwo), (denominatorOne * denominatorTwo));
	
	if(simplifiedFullNumber > 0 && simplifiedNumerator == 0) {
		correctAnswer = (simplifiedFullNumber)
	} else if(simplifiedFullNumber > 0) {
		correctAnswer = (simplifiedFullNumber + ' ' + simplifiedNumerator + '/' + simplifiedDenominator);
	} else {
		correctAnswer = (simplifiedNumerator + '/' + simplifiedDenominator);
	}
	
	input.append('<h1><sup>' + numeratorOne + '</sup>/<sub>' + denominatorOne + 
	'</sub> X <sup>' + numeratorTwo + '</sup>/<sub>' + denominatorTwo + '</sub> ');
	appendHelpBox();
		
	input.append(
    	'<div class="col-md-12">' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="fullNumberGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;">&nbsp; &nbsp;</h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="numeratorGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;"> / </h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="denominatorGuess" style="width: 60px;height:50px;"></div>' +
    	'</div></div>');
	count++;
	$('#numeratorGuess').focus();
	fractionKeypress(infoType);
}

//////////////////////////////////////////////////FRACTION DIVISION/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionDivisionQuestion() {
    infoType = 'fractionDivision';
	input = $("#inputDiv");
	input.empty();
	
	do {
		var numeratorOne = getRandom(1,9);
		var denominatorOne = getRandom(1,9);
	} while(denominatorOne<= numeratorOne);
	
	do {
		var numeratorTwo = getRandom(1,4);
		var denominatorTwo  = getRandom(1,5);
	} while(denominatorTwo <= numeratorTwo);
	
	simplifyFraction((numeratorOne*denominatorTwo), (denominatorOne * numeratorTwo));
	
	if(simplifiedFullNumber > 0 && simplifiedNumerator == 0) {
		correctAnswer = (simplifiedFullNumber)
	} else if(simplifiedFullNumber > 0) {
		correctAnswer = (simplifiedFullNumber + ' ' + simplifiedNumerator + '/' + simplifiedDenominator);
	} else {
		correctAnswer = (simplifiedNumerator + '/' + simplifiedDenominator);
	}
	
	input.append('<h1><sup>' + numeratorOne + '</sup>/<sub>' + denominatorOne + 
	'</sub> ÷ <sup>' + numeratorTwo + '</sup>/<sub>' + denominatorTwo + '</sub> ');
	appendHelpBox();
		
	input.append(
    	'<div class="col-md-12">' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="fullNumberGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;">&nbsp; &nbsp;</h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="numeratorGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;"> / </h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="denominatorGuess" style="width: 60px;height:50px;"></div>' +
    	'</div></div>');
	count++;
	$('#numeratorGuess').focus();
	fractionKeypress(infoType);
}

/////////////////////////////////////////////////DECIMAL MULTIPLICATION////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function decimalMultiplyQuestion() {
	infoType = 'decimalMultiply';
	input = $("#inputDiv");
	input.empty();
	$("#calculator").remove();
	
	var integerOne = 0;
	var decimalOne = 0; 
	var integerTwo = 0;
	var decimalTwo = 0; 
	var firstNumber = 0.0;
	var secondNumber = 0.0;
	
	do {
		integerOne = getRandom(3,7);
		integerTwo = getRandom(3,7);	
		decimalOne = getRandom(0,10);	
		decimalTwo = getRandom(0,10);
		
		firstNumber = integerOne + decimalOne/10;
		secondNumber = integerTwo + decimalTwo/10;
		
		correctAnswer = (firstNumber * secondNumber);
		
	} while(previousNumbers.indexOf(correctAnswer) > -1 || correctAnswer.toString().length > 5);
	
	console.log(correctAnswer);
	previousNumbers.push(correctAnswer);
	
	input.append('<h1>' + firstNumber + ' X ' + secondNumber);
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">' +
		'<div id="calc"><i class="fa fa-calculator" style="margin-top:10px;font-size:24px"></i></div>');
    calcButton('decimal');
    $("#guessNumber").focus();
	count++;
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////EXPONENTS/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function exponentSolvingQuestion() {
	infoType = 'exponentSolving';
	input = $("#inputDiv");
	input.empty();
	var constant = 0;
	var exponent = 0; 
	
	do {
		constant = getRandom(2,11);
		if(constant < 6) {
			exponent = getRandom(2,2); 
		} else {
			exponent = getRandom(2,1);
		}
			
	} while(previousNumbers.includes(Math.pow(constant, exponent)));
	correctAnswer = Math.pow(constant, exponent);
	console.log(correctAnswer);
	input.append('<h1>' + constant + '<sup>' + exponent + '</sup> ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	$("#guessNumber").focus();
	count++
	previousNumbers.push(correctAnswer);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////SQUARE ROOTS/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function squareRootQuestion() {
	infoType = 'squareRoot';
	input = $("#inputDiv");
	input.empty();
	do {
	    correctAnswer = getRandom(1,13);
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	var questionNumber = correctAnswer * correctAnswer;
	
	console.log(questionNumber + " " + correctAnswer);
	input.append('<h1><span style="height:200%;">&#8730;</span><span style="border-top: 3px #fff solid;">' + questionNumber + ' </span>');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
		
	$("#guessNumber").focus();
	count++
	previousNumbers.push(correctAnswer);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////SEQUENCING////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sequenceQuestion() {
	infoType = 'sequence';
	input = $("#inputDiv");
	input.empty();
	do {
	    var isAddAndSubtract = false;
	    var firstNumber = 0;
	    var secondNumber = 0;
	    var thirdNumber = 0;
	    //patternType: 1 - addition, 2 - subtraction, 3 - multiplication, 4 - addition & subtraction
	    var patternType = getRandom(1,4);
	    
	    switch(patternType) {
	        case 1:
	            var numberThatIsAdded = getRandom(2,15);
	            firstNumber = getRandom(5,60);
	            secondNumber = firstNumber + numberThatIsAdded;
	            thirdNumber = secondNumber + numberThatIsAdded;
	            correctAnswer = thirdNumber + numberThatIsAdded;
	            break;
	            
            case 2:
                var numberThatIsSubtracted = getRandom(5,13);
                firstNumber = getRandom(20,30);
                secondNumber = firstNumber - numberThatIsSubtracted;
                thirdNumber = secondNumber - numberThatIsSubtracted;
                correctAnswer = thirdNumber - numberThatIsSubtracted;
                break;
                
            case 3:
                var numberToMultiplyBy = getRandom(2,4);
                firstNumber = getRandom(1,6);
                secondNumber = firstNumber * numberToMultiplyBy;
                thirdNumber = secondNumber * numberToMultiplyBy;
                correctAnswer = thirdNumber * numberToMultiplyBy;
                break;
            case 4:
                var addNumber = getRandom(5,13);
                var subtractNumber = getRandom(5,13);
                var fourthNumber = 0;
                isAddAndSubtract = true;
                firstNumber = getRandom(11,60);
                if(firstNumber % 2 == 0) {
                    secondNumber = firstNumber - subtractNumber;
                    thirdNumber = secondNumber + addNumber;
                    fourthNumber = thirdNumber - subtractNumber;
                    correctAnswer = fourthNumber + addNumber;
                } else {
                    secondNumber = firstNumber + addNumber;
                    thirdNumber = secondNumber - subtractNumber;
                    fourthNumber = thirdNumber + addNumber;
                    correctAnswer = fourthNumber - subtractNumber;
                }
                break;
            default:
                alert('RNGeesus is broken');
	        
	    }
	    console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, correctAnswer);
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	
	previousNumbers.push(correctAnswer);
	if(isAddAndSubtract) {
    	input.append('<h1>' + firstNumber + ', ' + secondNumber + ', ' + thirdNumber +', ' + fourthNumber + ', X ');
    	appendHelpBox();
    	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	} else {
    	input.append('<h1>' + firstNumber + ', ' + secondNumber + ', ' + thirdNumber +', X ');
    	appendHelpBox();
    	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	}
	$("#guessNumber").focus();
	count ++
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}
