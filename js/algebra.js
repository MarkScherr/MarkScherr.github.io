/////////////////////////////////////////////////FACTORIALS////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factorialQuestion() {
	infoType = 'factorial';
	input = $("#inputDiv");
	input.empty();
	
	do {
	    var number = getRandom(1,6);
	} while(previousNumbers.indexOf(number) > -1);
    
    var tempNumber = number;
    correctAnswer = number;
    while(tempNumber > 2) {
        correctAnswer = correctAnswer * (tempNumber-1);
        tempNumber--;
    }
    
    console.log(number +" "+correctAnswer);
    
	input.append('<h1>' + number + '! ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	$("#guessNumber").focus();
	count++
	previousNumbers.push(number);
	console.log(previousNumbers);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 5);
	 } else {
	     randomKeyPress();
	 }
}


/////////////////////////////////////////////////SIMPLE EQUATIONS///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function simpleEquationQuestion() {
	infoType = 'simpleEquation';
	input = $("#inputDiv");
	input.empty();
    var coefficient = 0;
    var constant = 0;
    do { 
		coefficient = getRandom(2,8);
		constant = getRandom(2,8);
		correctAnswer = getRandom(2,13);
		equationConstant = correctAnswer * coefficient + constant;
    } while (previousNumbers.indexOf(correctAnswer) > 0);
	
	input.append('<h1 id="algebraQuestion">' + equationConstant + ' = ' + coefficient + 'x + ' + constant + ' ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
    count++;    
    $('#guessNumber').focus();
    previousNumbers.push(correctAnswer);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }

}
/////////////////////////////////////////////////FOIL///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function foilQuestion() {
	infoType = 'foil';
	input = $("#inputDiv");
	input.empty();
	//for now xVariables will always = 1 until the difficulty increases
	var xVariableOne = 1;
	var xVariableTwo = 1;
	
	do {
    	var constantOne = getRandom(1,9);
    	var constantTwo = getRandom(1,9);
	} while (previousNumbers.indexOf(constantOne) > 0);
	
	//add foilCorrectFirst Answer here later
	foilCorrectSecondAnswer = (xVariableOne * constantTwo) + (constantOne * xVariableTwo);
	foilCorrectThirdAnswer = constantOne * constantTwo;
	console.log(foilCorrectSecondAnswer + " " + foilCorrectThirdAnswer);
	
    input.append('<h1>(X + ' + constantOne +')(X + ' + constantTwo + ') ');
	appendHelpBox();
	input.append('<h1 style="display:inline;">X<sup> 2</sup> + </h1></div></h1><input type="number" class="form-control" id="guessNumberTwo"' +
		'style="width:60px;height:50px; display:inline;"><h1 style="display:inline; bottom: -15px;">X + </h1>' +
		 '<input type="number" class="form-control" id="guessNumberThree" style="width:60px;height:50px; display:inline;">');
	 $('#guessNumberTwo').focus();
	 count++
     previousNumbers.push(constantOne);
     foilKeypress();
}

function foilGuess() {
    var guessedNumberTwo = $('#guessNumberTwo').val();
    var guessedNumberThree = $('#guessNumberThree').val();
    
    if(guessedNumberTwo == foilCorrectSecondAnswer && guessedNumberThree == foilCorrectThirdAnswer) {
        isCorrect = true;
    } else {
        isCorrect = false;
        correctAnswer = "X\u00B2 + " + foilCorrectSecondAnswer + "X + " + foilCorrectThirdAnswer;
    }
    checkAnswer();
    if(count<10) {
        foilQuestion();
    } else {
        results();
    }
}

/////////////////////////////////////////////////LOGARITHMS///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function logarithmQuestion() {
    infoType = 'logarithm';
	input = $("#inputDiv");
	input.empty();
	do {
	    var base = getRandom(1,13);
	    if(base < 6 && base > 1) {
	        var exponent = getRandom(2,2);
	    } else {
	        var exponent = getRandom(0,3);
	    }
	} while (previousNumbers.indexOf(base) > -1 || base == 1);
	
	var argument = Math.pow(base, exponent);
	correctAnswer = exponent;
	
	input.append('<h1>log<sub>'+ base +'</sub>(' + argument + ') ');
	appendHelpBox();
	input.append('</div></h1><input type="number" class="form-control" id="guessNumber" style="height:50px">');
    count++;    
    $('#guessNumber').focus();
    previousNumbers.push(base);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
	
}

/////////////////////////////////////////////////PYTHAGOREAN THEOREM///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pythagoreanQuestion(){
    infoType = 'pythagorean';
	console.log(infoType);
	input = $("#inputDiv");
	input.empty();
	var a = 0.0;
	var b = 0.0;
	var c = 0.0;
	do {
    	a = getRandom(1,15); 
    	b = getRandom(1,15); 
    	c = Math.sqrt((a*a) + (b*b)); 
	} while (!Number.isInteger(c) || previousNumbers.indexOf(a+b) > 0);
	correctAnswer = c;
	console.log('a' + a+' b' +b + ' c' + c);
	input.append('<div id="pythDiv" style="position: relative;top: -40px"><p style="position: relative;top:48px;left:29px">C</p>' + a +'<div class="triangle triangle-1"' +
	'style="display: inline-block;margin: 0 5px;vertical-align: middle;width:60px;height: 60px;border-bottom: solid 30px #fff;border-left: solid 30px  #fff;border-right:' +
	'solid 30px transparent;border-top: solid 30px transparent;"></div>' + '<p>'+ b +' </p>');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px"></div>');
    count++;    
    $('#guessNumber').focus();		 
    previousNumbers.push(a+b);
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 5);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////FACTORING EQUATIONS////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function factoringEquationQuestion() {
    infoType = 'factoringEquation';
	console.log(infoType);
	input = $("#inputDiv");
	input.empty();
	
	//variables are according to quadratic formula: ax²+bx+c
	var b = 0;
	do{
	    correctAnswer = [];
	    var c = getRandom(5,90);
	    var factors = getFactors(c);
	    if(factors.length > 2) {
    	    if(factors.length % 2 == 1){
    	        b = factors[factors.length-1] * 2;
    	        correctAnswer.push(factors[factors.length-1]);
    	        correctAnswer.push(factors[factors.length-1]);
    	    } else {
    	        b = factors[factors.length-2] + factors[factors.length-1];
    	        correctAnswer.push(factors[factors.length-2]);
    	        correctAnswer.push(factors[factors.length-1]);
    	    }
	    }
	    
	} while(factors.length < 3 || previousNumbers.indexOf(c) > -1);
    
    console.log('b' + b);
    console.log('c' + c);
    console.log(factors);
    console.log(correctAnswer);
    
    previousNumbers.push(c);
    
	input.append('<h1 style="font-size: 18px">x<sup> 2</sup> + ' + b + 'x + ' + c + ' = 0 ');
	appendHelpBox();
	input.append('<input type="text" class="form-control" id="guessNumber" style="height:50px">');
    $("#guessNumber").focus();
    count++;
    factoringKeypress(infoType);
    
    
    
}

/////////////////////////////////////////////////PERMUTATIONS////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function permutationQuestion() {
    infoType = 'permutation';
	input = $("#inputDiv");
	input.empty();
	
	var totalSet;
	var choiceSet;
	
	do{
	    totalSet = getRandom(6,32);
	    choiceSet = getRandom(2,3);
	    if(getRandom(1,20) == 3) {
	        choiceSet = 1;
	    }
	    for(var i = totalSet ; i > totalSet - choiceSet; i--) {
	        if(i==totalSet) {
	            correctAnswer = totalSet;
	        } else {
                correctAnswer = correctAnswer * i;
	        }
	        console.log(correctAnswer)
	        console.log(i);
	    }
	    console.log(correctAnswer+ ' ' + choiceSet + ' ' + totalSet);
	} while(previousNumbers.indexOf(correctAnswer) > -1)
	
	previousNumbers.push(correctAnswer);
	
	input.append('<h1>P(' + totalSet + ',' + choiceSet + ') ');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">');
	if(correctAnswer > 100) {
	    input.append('<div id="calc"><i class="fa fa-calculator" style="margin-top:10px;font-size:24px"></i></div>');
        calcButton('permutation');
	}
    $('#guessNumber').focus();	
	
	count++;
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////COMBINATIONS//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function combinationQuestion() {
    infoType = 'combination';
	input = $("#inputDiv");
	input.empty();
	input.append('<h2>Under Construction</h2>');
	
		var totalSet;
	var choiceSet;
	
	do{
	    totalSet = getRandom(6,32);
	    choiceSet = getRandom(2,3);
	    if(getRandom(1,20) == 3) {
	        choiceSet = 1;
	    }
	    for(var i = totalSet ; i > totalSet - choiceSet; i--) {
	        if(i==totalSet) {
	            correctAnswer = totalSet;
	        } else {
                correctAnswer = correctAnswer * i;
	        }
	        console.log(correctAnswer)
	        console.log(i);
	    }
	    var tempNumber = choiceSet;
	    var choiceSetAfterFactorial = choiceSet;
        while(tempNumber > 2) {
            choiceSetAfterFactorial = choiceSetAfterFactorial * (tempNumber-1);
            tempNumber--;
        }
	    correctAnswer = (correctAnswer/choiceSetAfterFactorial);
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	
	previousNumbers.push(correctAnswer);
	
    console.log(choiceSet +' ' +choiceSetAfterFactorial);
    console.log(correctAnswer+ ' ' + choiceSet + ' ' + totalSet);
    
	input.append('<h1>C(' + totalSet + ',' + choiceSet + ')');
	appendHelpBox();
	input.append('<input type="number" class="form-control" id="guessNumber" style="height:50px">' +
		'<div id="calc"><i class="fa fa-calculator" style="margin-top:10px;font-size:24px"></i></div>');
        calcButton('combination');
        
    $('#guessNumber').focus();	
	
	count++;
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
    
}

/////////////////////////////////////////////////SLOPE/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function slopeQuestion() {
    infoType = 'slope';
	input = $("#inputDiv");
	input.empty();
	var firstX;
	var firstY;
	var secondX;
	var secondY;
	
	do {
	    firstX = getRandom(0,21);
	    firstY = getRandom(0,21);
	    secondX = getRandom(0,21);
	    secondY = getRandom(0,21);
	    console.log(firstY - secondY);
	    var numerator = firstY - secondY;
	    console.log(firstX - secondX);
	    var denominator = firstX - secondX;
	    if(denominator != 0) {
    	    simplifyFraction(numerator, denominator);
        	if(simplifiedFullNumber !== 0 && simplifiedNumerator == 0) {
        		correctAnswer = (simplifiedFullNumber)
        	} else if(simplifiedFullNumber !== 0) {
        		correctAnswer = (simplifiedFullNumber + ' ' + simplifiedNumerator + '/' + simplifiedDenominator);
        	} else {
        		correctAnswer = (simplifiedNumerator + '/' + simplifiedDenominator);
        	}
	    }
	    console.log(correctAnswer);
	} while(previousNumbers.indexOf(correctAnswer) > -1 || denominator == 0);


	input.append('<h1 style="font-size:16px">(' + firstX + ',' + firstY +') and (' + secondX +  ',' + secondY + ')');
	appendHelpBox();
	
	input.append(
    	'<div class="col-md-12">' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="fullNumberGuess" style="width:60px;height:50px;"></div>' +
    	'<h1 style="display:inline;">&nbsp; &nbsp;</h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="numeratorGuess" style="height:50px;"></div>' +
    	'<h1 style="display:inline;"> / </h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="denominatorGuess" style="height:50px;"></div>' +
    	'</div></div>');
	count++;
	$('#numeratorGuess').focus();
	fractionKeypress(infoType);
}
	