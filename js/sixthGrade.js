//////////////////////////////////////////////////ADDING THOUSANDS/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addThousandsQuestion() {
    infoType = 'addThousands';
	input = $("#inputDiv");
	input.empty();
    
    do {
        var numberOne = getRandom(1000, 9000);
        var numberTwo = getRandom(1000, 9000);
        var numberThree = getRandom(1000, 9000);
        var numberFour = getRandom(100, 9000);
        
        correctAnswer = numberOne + numberTwo + numberThree + numberFour;
        
    } while(previousNumbers.indexOf(correctAnswer) > -1);
    
    previousNumbers.push(correctAnswer);
    console.log(correctAnswer);
    if (numberFour < 1000) {
        input.append('<h1 style="margin:0px;padding: 0px;"><span style="color:#ffffff">+</span>'+ numberOne + '</h1>' +
        '<h1 style="margin:0px;padding: 0px;"><span style="color:#ffffff">+</span>'+ numberTwo + '</h1><h1 style="margin:0px;padding: 0px;">' +
    	'<span style="color:#ffffff">+</span>'+ numberThree + '</h1>' +
    	'<h1 style="margin:0px;padding: 0px;">+<span style="color:#ffffff">1</span>'+ numberFour + '</h1>');
	appendHelpBox();
	input.append('</h1>');
    } else {
        input.append('<h1 style="margin:0px;padding: 0px;"><span style="color:#ffffff">+</span>'+ numberOne + '</h1>' +
    	'<h1 style="margin:0px;padding: 0px;"><span style="color:#ffffff">+</span>'+ numberTwo + '</h1><h1 style="margin:0px;padding: 0px;">' +
    	'<span style="color:#ffffff">+</span>'+ numberThree + '</h1>' +
    	'<h1 style="margin:0px;padding: 0px;">+'+ numberFour + '</h1>');
	appendHelpBox();
    }
    input.append('<input type="number" class="form-control" id="guessNumber" style="width:175px;height:50px;direction: rtl;' +
        'unicode-bidi: bidi-override;">');
    count++;
    $('#guessNumber').focus();
    backwardsWritingKeypress(infoType, 10);
}

//////////////////////////////////////////////////NEGATIVE EXPONENTS///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function negativeExponentQuestion() {
    infoType = 'negativeExponent';
	input = $("#inputDiv");
	input.empty();
	do {
	    var exponent = 0;
	    var constant = getRandom(2, 12);
	    if(constant < 5) {
	       exponent = getRandom(2,2);
	    } else {
	        exponent = 2;
	    }
	   simplifyFraction(1 , Math.pow(constant, exponent));
	   correctAnswer = (1 + '/' + Math.pow(constant, exponent));
	    
	} while(previousNumbers.indexOf(correctAnswer) > -1);
	
	console.log(correctAnswer);
	
	previousNumbers.push(correctAnswer);
	
	input.append('<h1>' + constant + '<sup>-' + exponent +'</sup> ');
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

//////////////////////////////////////////////////3 DIGIT MULTIPLICATION/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function threeDigitMultiplyQuestion(){
    infoType = 'threeDigitMultiply';
	input = $("#inputDiv");
	input.empty();
	
	do {
	    var multiplicandOne = getRandom(101, 899);
	    var multiplicandTwo = getRandom(101, 899);
	    correctAnswer = multiplicandOne * multiplicandTwo;
	    
	} while (correctAnswer%10 === 0 || previousNumbers.indexOf(correctAnswer) > -1);
	console.log(correctAnswer);
	previousNumbers.push(correctAnswer);
	
	input.append('<h1>\&nbsp;'+ multiplicandOne + '</h1><h1>X'+ multiplicandTwo + '</h1>');
	appendHelpBox();
	input.append('<div>' +  
                 '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px" readonly></div>' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px" readonly></div>' +
                 '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div><br>' +
	             '</div><div>' +
                 '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"  readonly></div>' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +         
	             '<div class="inline-div"><input type="number" class="form-control" value="0" style="height:50px;width:40px" readonly></div><br>' +
	             '</div><div">' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" style="height:50px;width:40px"></div>' +         
	             '<div class="inline-div"><input type="number" class="form-control" value="0" style="height:50px;width:40px" readonly></div>' +   
	             '<div class="inline-div"><input type="number" class="form-control" value="0" style="height:50px;width:40px" readonly></div></div>' +
	             '</div></h1><input type="number" class="form-control" id="guessNumber" style="width: 175px;height:50px;direction: rtl;unicode-bidi: bidi-override;">');
     count++;
     backwardsWritingKeypress(infoType, 10);
}

//////////////////////////////////////////////////MEDIAN////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function medianQuestion() {
    infoType = 'median';
	input = $("#inputDiv");
	input.empty();
	var row = '';
	var arrayToDisplay = [];
    var numberOfElements = getRandom(3,5);
	var totalCount = 0.0;
	do {
    	for(var i = 0 ; i < numberOfElements; i++){
    	    arrayToDisplay[i] = getRandom(3,12);
    	}
    	var tempArray = arrayToDisplay.slice();
    	var sortedArray = [];
    	var smallestNumber = 0;
    	for(var i = 0; i < numberOfElements; i ++) {
    	    smallestNumber = 9999999999999;
    	    for(var j = 0 ; j < tempArray.length ; j++) {
    	        if(tempArray[j] < smallestNumber) {
    	            smallestNumber = tempArray[j];
    	        }
    	    }
    	    var index = tempArray.indexOf(smallestNumber);
            if (index > -1) {
                tempArray.splice(index, 1);
            }
    	    sortedArray.push(smallestNumber);
    	}
    	if(numberOfElements % 2 == 1) {
    	    correctAnswer = sortedArray[Math.floor(numberOfElements/2)];
    	} else {
    	    correctAnswer = Math.ceil(((sortedArray[numberOfElements/2 - 1]) + (sortedArray[numberOfElements/2]))/2);
    	}
    	
	} while (previousNumbers.indexOf(correctAnswer) > 0);
	previousNumbers.push(correctAnswer);
	
	console.log(arrayToDisplay);
	console.log('sorted'+sortedArray);
	console.log(correctAnswer);
	
	row += '<h1>' + '';
	for(var i = 0 ; i < numberOfElements; i++) {
	   if(i < numberOfElements - 1){
	       row += arrayToDisplay[i] + ', ';
	   } else {
	       row += arrayToDisplay[i];
	   }
	}
	
	row += '<div class="popup" onclick="tipClick(infoType)"><img src="img/questionBlock.gif"' + 
		' style="margin-top: 8px; width:24px;"></div></h1></div></h1><input type="number" class="form-control" id="guessNumber" style="height:50px">';
	input.append(row);
	count++;    
    $('#guessNumber').focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

//////////////////////////////////////////////////MEAN////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function meanQuestion() {
    infoType = 'mean';
	input = $("#inputDiv");
	input.empty();
	var row = '';
	var arrayToDisplay = [];
    var numberOfElements = getRandom(3,5);
	
	
	do {
	    var totalCount = 0.0;
    	for(var i = 0 ; i < numberOfElements; i++){
    	    arrayToDisplay[i] = getRandom(3,12);
    	    totalCount += arrayToDisplay[i];
    	}
    	correctAnswer = Math.ceil(totalCount/numberOfElements);
	} while (previousNumbers.indexOf(correctAnswer) > 0);
	previousNumbers.push(correctAnswer);
	console.log(arrayToDisplay);
	console.log(totalCount);
	console.log(correctAnswer);
	row += '<h1>' + '';
	for(var i = 0 ; i < numberOfElements; i++) {
	   if(i < numberOfElements - 1){
	       row += arrayToDisplay[i] + ', ';
	   } else {
	       row += arrayToDisplay[i];
	   }
	}
	
	row += '<div class="popup" onclick="tipClick(infoType)"><img src="img/questionBlock.gif"' + 
		' style="margin-top: 8px; width:24px;"></div></h1></div></h1><input type="number" class="form-control" id="guessNumber" style="height:50px">';
	input.append(row);
	count++;    
    $('#guessNumber').focus();
	if(!isRandomTopic) {
	    genericKeyPress(infoType, 10);
	 } else {
	     randomKeyPress();
	 }
}

/////////////////////////////////////////////////FACTORING/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factoringQuestion() {
	infoType = 'factoring';
	input = $("#inputDiv");
	input.empty();
	do {
		var numberToFactor = getRandom(9, 81);
	} while(previousNumbers.indexOf(numberToFactor) > -1);
	
	previousNumbers.push(numberToFactor);
	correctAnswer = [];
    correctAnswer = getFactors(numberToFactor);
	console.log(correctAnswer);
	input.append('<h1>' + numberToFactor +' ');
	appendHelpBox();
	input.append('</div></h1><input type="text" class="form-control" id="guessNumber" style="height:50px">');
	$("#guessNumber").focus();
	count++;
	factoringKeypress(infoType);
	
}