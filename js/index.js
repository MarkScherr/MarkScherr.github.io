var count = 0;
var correctAnswer = 0;
var previousNumbers = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var highScore = 0;
var isCorrect = false;
var isPerfect = true;
var numberGuessed = -1;
var simplifiedNumerator = 0;
var simplifiedDenominator = 0;
var simplifiedFullNumber = 0;
var foilCorrectSecondAnswer = 0;
var foilCorrectThirdAnswer = 0;
var infoType = '';
var showJoke = false;
var isRandomTopic = false;
var myTimer;
var randomTopic= ["multiply", "division", "multiplyWithNegatives", "divisionWithNegatives","decimalAdd", 
 "romanNumeral", "timeMath", "longDivision", "fractionToDecimal", "gcf", "percent", "median", "mean", 
 "pemdasSolving", "decimalMultiply", "exponentSolving", "squareRoot", "sequence", 
 "factorial", "simpleEquation", "logarithm", "pythagorean", "permutation", "rounding"];
 
////////////////////////////////////////////////LINKS///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$( document ).ready(function() {

$("#mario").on('click', function() {
	showMario();
});
});

function linkClick(id) {
    $('#sound').append('<audio autoplay><source src="sound/smb3_enter_level.wav" type="audio/wav"></audio>');
    console.log(id.slice(0, -4));
    refreshSite();
    name = id.slice(0, -4);
    window[name + "Question"]();
} 


////////////////////////////////////////////////KEYPRESS////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function genericKeyPress(type , totalQuestions) {
    $("#submitButton").on("click", function(){
			numberGuessed = $("#guessNumber").val();
			console.log(numberGuessed)
			guess(numberGuessed);	
			if(count<totalQuestions) {
                window[type + "Question"]();
			} else {
			    checkFinalAnswer();
			}
    });
    $("#guessNumber").keypress(function(e){
         if(e.which === 13) {
			e.preventDefault();
			numberGuessed = $("#guessNumber").val();
			console.log(numberGuessed)
			guess(numberGuessed);	
			if(count<totalQuestions) {
                window[type + "Question"]();
			} else {
			    checkFinalAnswer();
			}
        }
    });
}

function randomKeyPress() {
    console.log(count);
     $("#submitButton").on("click", function(){
			numberGuessed = $("#guessNumber").val();
			console.log(numberGuessed);
			console.log(correctAnswer);
			guess(numberGuessed);
			previousNumbers = [];
			correctAnswer = 0;
			var subject = getRandom(0,randomTopic.length);
        	var type = randomTopic[subject];
			if(count < 15) {
                window[type + "Question"]();
			} else {
			    $('#musicDiv').empty();
			    checkFinalAnswer();
			}
    });
    $("#guessNumber").keypress(function(e){
         if(e.which === 13) {
			e.preventDefault();
			numberGuessed = $("#guessNumber").val();
			console.log(numberGuessed);
			console.log(correctAnswer);
			guess(numberGuessed);
			previousNumbers = [];
			correctAnswer = 0;
			var subject = getRandom(0,randomTopic.length);
        	var type = randomTopic[subject];
			if(count < 15) {
                window[type + "Question"]();
			} else {
			    $('#musicDiv').empty();
			    checkFinalAnswer();
			}
        }
    });
}

function socialStudiesKeypress(type, totalQuestions, socialStudiesAnswers) {
    numberGuessed = $("#guessNumber").val();
    console.log("number guessed: " + numberGuessed);
    console.log(correctAnswer);
    socialStudiesGuess(numberGuessed, socialStudiesAnswers);
    correctAnswer = -1;
    if(count < totalQuestions) {
        window[type + "Question"]();
    } else {
        checkFinalAnswer();
    }
    
}
function backwardsWritingKeypress(type , totalQuestions) {
     $("#submitButton").on("click", function(){
		var stringNumber = "";
		var numberGuessedString = "";
		numberGuessed = $("#guessNumber").val();
		stringNumber = numberGuessed.toString();
		for(var i = stringNumber.length ; i >= 0 ; i--) {
		    numberGuessedString += stringNumber.charAt(i);
		}
		console.log(numberGuessedString)
		guess(numberGuessedString);	
		if(count<totalQuestions) {
            window[type + "Question"]();
		} else {
		    checkFinalAnswer();
		}
    });
    $("#guessNumber").keypress(function(e){
     if(e.which === 13) {
		e.preventDefault();
		var stringNumber = "";
		var numberGuessedString = "";
		numberGuessed = $("#guessNumber").val();
		stringNumber = numberGuessed.toString();
		for(var i = stringNumber.length ; i >= 0 ; i--) {
		    numberGuessedString += stringNumber.charAt(i);
		}
		console.log(numberGuessedString)
		guess(numberGuessedString);	
		if(count<totalQuestions) {
            window[type + "Question"]();
		} else {
		    checkFinalAnswer();
		}
    }
    });
}
    

function fractionKeypress(type) {
    $("#submitButton").on("click", function(){
			fractionSimplifiedGuess(type);
    });	
    $('#numeratorGuess').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			fractionSimplifiedGuess(type);
		}
	});
	$('#denominatorGuess').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			fractionSimplifiedGuess(type);
		}
	});
	$('#fullNumberGuess').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			fractionSimplifiedGuess(type);
		}
	});
}

function factoringKeypress(type) {
    $("#submitButton").on("click", function() {
        numberGuessed = $("#guessNumber").val().split(" ");
		console.log(numberGuessed);
		if (compareFactors(numberGuessed)) {
		    console.log('correct')
			guess(correctAnswer);
		}else {
			guess(false);
		}
		if(count<10) {
			 window[type + "Question"]();
		} else {
		    checkFinalAnswer();
		}
    });	
	$('#guessNumber').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			numberGuessed = $("#guessNumber").val().split(" ");
			console.log(numberGuessed);
			if (compareFactors(numberGuessed)) {
			    console.log('correct')
				guess(correctAnswer);
			}else {
				guess(false);
			}
			if(count<10) {
				 window[type + "Question"]();
			} else {
			    checkFinalAnswer();
			}
		}
	});
}

function foilKeypress() {
    $("#submitButton").on("click", function(){
		foilGuess();	
    });	
	$('#guessNumberTwo').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			foilGuess();			
		}
	});
	$('#guessNumberThree').keypress(function(e){
		if(e.which === 13) {
			e.preventDefault();
			foilGuess();			
		}
	});
}
 
function checkFinalAnswer() {
    $('#inputDiv').empty();
    $('#inputDiv').append('<h1>Press here for Results</h1>');
    $('#inputDiv').on('click', function(){
        $("#inputDiv").prop("onclick", null).off("click");
        results();
    });
}

/////////////////////////////////////////////////TipClicks//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tipClick() {
    $('#inputDiv').append('<audio autoplay><source src="sound/smb_jump-small.wav" type="audio/wav"></audio>');
    setTimeout(function() {
    	switch(infoType) {
    		case "multiply":
    			alert("Remember to round to the easiest number\nFor example: 5 x 11\nSubtract 1 from 11 " +
    			"because 5x10 is 50 and 5x1 is 5\n\nMake sure to then add them back together to get 55");
    			break;
    			
    		case "division":
    			alert("Think of the smaller number's multiplication table\nFor example: 45/5\nThink of what multiplied by 5 equals 45" +
    			"\n\n 5x9=45");
    			break;
    		
    		case "twoDigitMultiply":
    			alert("twoDigitMultiply");
    			break;
    			
    		case "rounding":
    			alert("rounding");
    			break;
    		
    		case "multiplyWithNegatives":
    		    alert("The trick to using negatives is simple. If there is one negative in the question the result will be negative. If there are " +
    		    "two negatives the result will be positive\nFor example -2 x -2 = 4, but 2 x -2 = -4");
    		    break;
    		    
    		case "divisionWithNegatives":
    		    alert("The trick to using negatives is simple. If there is one negative in the question the result will be negative. If there are " +
    		    "two negatives the result will be positive\nFor example -4 / -2 = 2, but 4 / -2 = -2");
    		    break;
    		    
    		case "decimalAdd":
    			alert("The trick to adding decimals is to add each portion individually\nThen you add them together\nFor example: " +
    			"5.8 + 2.7\nBreak it into 5+2 and 8+7 and remember that any number greater than nine will be 1 . something\n" +
    			"In this case you get 7 and 1.5\nThen add them together to get 8.5");
    			break;
    			
    		case "fractionAdd":
    			alert("In order to add decimals you need to make sure the denominators are the same\nFor example: 1/2 + 1/3\n" +
    			"You need to multiply them by each other (2x3)\nAfterwards remember when adjusting one part of an equation " +
    			"\you have to adjust the other portion, so you'll have to multiply the top by the same number you multiplied the bottom" +
    			"\nAfter doing this your number will be 3/6 + 2/6\n\nThen just add the top numbers together to get 5/6");
    			break;
    			
    		case "fractionSimplify":
    			alert("Simplifying fractions is all about finding common multipliers\nYou need to figure out what is the largest " +
    			"number that both the top and the bottom will divide by nicely\nFor Example: 10/20\n\nThese numbers will both divide" +
    			" by 5. However, this would result in 2/4 which is still not simplified.\nThe trick is to try to use the smaller number" +
    			" and then work down. In this case 10 works for both making the result 1/2\n\nIn the case of the larger number on top" +
    			" determine how many times the smaller number adds into the top number, put that in the whole numbers, and then subtract" +
    			" that from the top number 30/14 14 goes into 30 2 times with 2 left over making this 2 2/14 which can be further " +
    			"simplified to 2 1/7.");
    			break;
    		
            case "romanNumeral":
                alert("Roman Numerals are all about knowing the the letters and then remembering that when you are before 5 or 10 (or any multiple) you put 1 (or any " +
                "multiple) before that letter\nFor example: XL\nWe know that X is 10 and L is 50, since the X is before the 50 that will be 40.\nI = 1\n" +
                "V = 5\nX = 10\nL = 50\nC = 100\nD = 500\nM = 1000");
                break;
                
    		case "timeMath":
    		    alert("Adding time is basically deterimining the time and then adding the numbers. Remember that any number over 60 is a new hour, so to find the time "+
    		    "make sure you break it down so the number is less than 60.\nFor example: 5:10 add 90 minutes\nWe should start with adding 60 to make it 6:10 with 30 " +
    		    "minutes left over, then just add 30 minutes 6:10 making the correct answer 6:40.");
    		    break;
    		    
    		case "longDivision":
    		    alert("Long division is just like regular division, except that you have to do it multiple times. Make sure to work LEFT TO RIGHT and try to divide what you " +
    		    "can.\nFor Example: 6956256/8\n8 doesn't go into 6, but it does go into 69 8 times with 5 left over (\"8\"), carry the 5 to the next number to get 55/8, " +
    		    "that is 6 with 7 left over(\"86\"), carry the 7 over to the 6 to get 76/8, that is 9 with 4 left over (\"869\"), carry the 4 to the 2 to get 42/8, that is " +
    		    "5 with 2 left over (\"8695\"), carry the 2 over to 5 to get 25/8, that is 3 with 1 left over (\"86953\"), carry the 1 to the 6 to get 16/2, that is 2 and the " +
    		    "final answer is 869532\n\nNOTE: when the number cannot be divided you put a 0 and carry over the number that is smaller.");
    		    break;
    	    
    	    case "fractionToDecimal":
    		    alert("Changing a fraction to decimal is making the denominator 100 and then the numerator will be the decimal.\nFor example: 10 2/10\n" +
    		    "in the case of 2/10 you need to multiply BOTH the numerator and the denominator by 10 in order to have the denominator equal 100. We will then have " +
    		    "10 20/100. We then just translate that to 10.20 or 10.2\n\nNOTE: Don't forget in the case of 5 3/100 the decimal equivalent will be 5.03");
    		    break;
    		    
    		case "gcf":
    		    alert("Finding the greatest common factor involves a lot of division and knowing your multiplication. The trick to finding the GCF is to" +
    		    " find the smallest number in the set and see if that multiplies into all of them. If that doesn't work, then find the numbers that multiply into" +
    		    " that smallest number and work your way down to the lowest one. If none work, then 1 will be the greatest common factor.\nFor example: 14, 39, 45\n" +
    		    "With this example we should first try 14. However, 14 doesn't multiply nicely into 39 or 45. Then we should think of all the numbers that multiply" +
    		    " into 14. We know that 7x2=14 and 1x14=14. Looking at all the multiples from largest to smallest we see that 7 will multiply nicely into both 39 and 45," +
    		    " so 7 will be the Greatest Common Factor.\n\nNote: 1 will always be a factor, but necessarily the greatest factor.");
    		    break;
    		    
    		case "percent":
    		    alert("The trick to doing percentages is dividing the number by 10, and then dividing that number by 2. Once you have those numbers you can" +
    		    " find any percent that ends in 5 or 0\nFor example: 25% of 100\nWe would take 100/10 to get 10(%) and then 10/2 to get 5(%). From there" +
    		    " you just multiply the 10 twice and add the 5 to get the answer of 25.\n\nThink when you divide by 10 you get 10% and dividing 10%/2 you get 5%");
    		    break;
    
            case "addThousands":
                alert ("When adding thousands work from RIGHT TO LEFT adding each column and carrying the 10 spot number and leave the right number on the bottom.");
                break;
    
    	    case "negativeExponent":
    	        alert("With a negative exponent you just figure out what the regular (positive exponent answer) is and then place that as the denominator. the " +
    	        "the numerator will be 1.\nFor example 5\u207b\u00B2\nSince 5\u00B2 = 25 we just put a 1 as the numerator to get the answer 1/25.");
    	        break;
    	      
            case "threeDigitMultiply":
                alert("Multiplying 3 digits is all about breaking the bottom number and multiplying the top from RIGHT TO LEFT. After each number you go to the next " +
                "line and add a 0 for each line you go down (already provided).\nFor example:\n 489\nx943\nYou start with 3 and multiply the top number each number " +
                "3x9=27 keep the 7 and carry the 2 (\"7\"), 3x8+2=26 keep the 6 and carry the 2 (\"67\") 3x4+2=14 to get (\"1467\") starting the second line with " +
                "(\"0\") 4x9=36 keep the 6 and carry the 3 to get (\"60\") 4x8+3=35 keep the 5 and carry the 3 to get (\"560\") 4x4+3=19 to get (\"19560\") start " +
                "the third line with (\"00\") (every line after the first gets an extra 0, if there were 4 digits the 4th line would start (\"000\")) 9x9=81 " +
                "keep the 1 and carry the 8 to get (\"100\") 9x8+8=80 keep the 0 and carry the 8 to get (\"0100\") 9x4+8=44 to get (\"440100\") now that we " +
                "have all 3 lines we add them together.\n      1467\n    19560\n+440100\n   461127 is the answer for this question.");
                break;
                
    		case "median":
    		    alert("To find the median there are two ways to do this. The first and most difficult way is to sort every number in the set, and" +
    		    " then find the number that's in the middle. The other way is to find what the middle number and then count up to that number\nFor example:" +
    		    " 5,7,3,7,2\nSince you know the total number of elements is 5 you will know that 3rd smallest is the middle element. Then start going through" +
    		    " the set from smallest number: 2, 3, 5 here we get 5 as the result.\n\nNOTE: If the set is an even number of elements, then find the average of " +
    		    "the TWO middle numbers\n\nMAKE SURE TO ROUND UP ON THIS SITE!");
    		    break;
    		    
    		case "mean":
    		    alert("To find the mean (average) you need to add all the numbers in the set, and then divide by the total number of numbers.\n" +
    		    "For example: 1,3,5,7\nIn this case we first add 1+3+5+7 equaling 16, we then count that there are 4 numbers in the set. " +
    		    "We divide 16/4 and get 4 as the answer.\nMAKE SURE TO ROUND UP ON THIS SITE!");
    		    break;
    		    
    		case "pemdasSolving":
    			alert("The trick is all in the name PEMDAS: Parenthesis (), Exponents \u00B2, Multiplication x, Division /, Addition +," +
    			"and Subtraction -\n\nThat is the order to math the maths.\n\nFor example: 5 x (5-5)\nIf you were to math left to right\n" +
    			"you would get 5x5 to 25 and then subtract 5 and get 20, but with the correct order you'd see that 5-5=0 and 5x0=0");
    			break;
    			
    		case "fractionMultiply":
    		    alert("Multiplying fractions is actually easier than adding fractions. When multiplying all you need to do is multiply the numerators, then multiply the denominators. " +
    		    "The result of the numerators will be the numerator, and the result of the denominators will be the denominator.\nFor example: 2/3 x 1/3\nYou need to multiply (2 x 1)/(3 x 3) " +
    		    "this will result in 2/9\n\nNOTE: make sure to simplify your fractions, if you don't your answer will be wrong.");
    		    break;
    		 
    		case "fractionDivision":
    		    alert("The trick to dividing the fraction is to flip one of the fractions and then multiply them.\nFor example: 1/2 ÷ 1/3\nWith this example you can just flip 1/3 to 3/1." +
    		    "then you just multiply 1/2 x 3/1. Remember that is just (1x3)/(2x1) resulting in 3/2 and then simplified to 1 1/2.");
    		    break;   
    		    
    		case "decimalMultiply":
    		    alert("Multiplying decimals is imagining the numbers are full and then multiplying them. After you get the product make sure to move the decimal the " +
    		    "total amount that was in the question.\nFor example: 6.3 x 5.4\nYou make it 63x54. That equals 3402. Then looking at the question there are 2 spaces after " +
    		    "the decimal so we move the decimal two spaces to get 34.02\n\nNote: use the calculator to ease the math if needed.");
    		    break;
    		    
    		case "exponentSolving":
    			alert("Exponents are just a way of describing a multiplication question multiplying by itself.\nFor example: 5\u00B2\n" +
    			"This will just be a way of describing 5x5, The 2 represents how many times you are multiplying, other than numbers less than 1\n" +
    			"\n0 will always just equal 1");
    			break;
    			
    		case "squareRoot":
    			alert("Square Roots are finding what times itself equals the number shown.  There are more powers of roots, but when no power is shown, then it implies that you are looking for " +
    			"the square.\nFor Example: √4\nKnowing our exponents already we know that 2x2 = 4.  The answer to this would be 2.");
    			break;
    			
    		case "sequence":
    		    alert("The goal of this is to see the pattern of the numbers.\nFor example: 1, 3, 5, X\nWe can tell that the difference between 1 and 3 is 2 and the difference between " + 
    		    "3 and 5 is 2, so we then assume that X will equal 7.");
    		    break;
    		    
    	    case "factoring":
    	        alert("With factoring you try to find every number that multiplies nicely into the number shown. The trick is to start at 1 and work your way up to " +
    	        "get when the numbers multiplying match or are greater.\nFor example: 25\nWith 25 you start at 1 and 25 and then think does 25 divide by 2, then by 3 " +
    	        "then 4, and then 5. Yes 25 divides by 5 into 5x5, since those numbers are the same you know that 6 or higher cannot divide nicely. so the answer would be " +
    	        "\"1 5 25\"");
    	        break;
    			
    		case "factorial":
    			alert("Factorials are when you take the number and multiply it by every integer greater than 0\nFor Example: 8!\nThis would look like this written out: 8x7x6x5x4x3x2x1.\n" +
    			"The answer to this example is 40,320");
    			break;
    			
    		case "simpleEquation":
    			alert("The trick to equations is isolating the variable ('x' in this case) remember when adjusting one side," +
    			" you then have to adjust the other side also\nFor example: 5x + 3 = 28\nSubtract 3 from both sides making it" +
    			" 25 = 5x, then you divide both sides by 5 which makes the result 5 = x");
    			break;
    			
    		case "foil":
    			 alert("Foil stands for First, Outer, Inner, and Last.  The goal is to multiply in that order and then combine like terms (where there are the same amount of Xs)\nFor example:"+
    			 "(x+1)(x+2)\nHere you would multiply x * x, x * 2, 1 * x, and 2 * 1\nYou will have x\u00B2 + 2x + 1x(or just x)+ 2, then you need to combine them to get x\u00B2 + 3x + 2");
    			break;
    			
    		case "logarithm":
    			alert("This is using Square Roots and Exponents to solve the logarithm.  There are 3 parts to the logarithmic equation: the base, the exponent, and the argument" + 
    			"\nFor example: log₂(4)\nThe base is 2 and the argument is 4.  The goal is to find the exponent of the base that equals the argument\nIn this case 2 is the exponent "+
    			"that will make 2 equal 4");
    			break;
    			
    		case "pythagorean":
    			alert("Pythagorean theorem states that A\u00B2 + B\u00B2 = C\u00B2\nThis is used when the triangle is a right triangle (an L shaped triangle) an example of how to use this if you know "+
    			"the two sides values you can find the third side\nFor example: 3,4\nIf you know the sides are 3 and 4 you know that 3\u00B2 = 9 and 4\u00B2 = 16, then 16+9=25 so you now know " +
    			"that C\u00B2 = 25 and the square root of 25 is 5.");
    			break;
    			
    		case "factoringEquation":
    		    alert("Factoring equations is one of the tougher types of math. In this introduction what you are trying to do is find the number without variable's factors. After you " +
    		    "find the factors, you want to figure out which of them will add to equal the number with the variable that isn't squared.\nFor Example x\u00B2 + 5x + 6 = 0\n" +
    		    "Here you want to find the factors of 6 that add to equal 5. Start with trial and error. Does 1 + 6 = 5? no. Does 2 + 3 = 5? yes! your answer will be (x + 3)(x + 2) = 0\n" +
    		    "\nNOTE: on this site you don't need to type the whole formatted answer. The example's correct answer would be \"3 2\"");
    		    break;
    		    
    	    case "permutation":
    		    alert("Permutation is when you take a set of numbers and find out how many different orders you can put that set into. Think of school seating possibilities. " +
    		    "If there are 30 kids in the class there are 30 options for the 1st seat, there are 29 options for the 2nd seat, and then 28 options for the 3rd seat. The options " +
    		    "for seating assignments are 30! with permutations the second number limits the choices, and the first number is the total set.\nFor Example: P(30,4)\n" +
    		    "This would be like the earlier explanation a set of 30 but we only need the constraint of 4 desks.  The math for this will be 30 x 29 x 28 x 27 notice start with the total "+
    		    "set and multiply by one less each time until you hit the constraint.  The answer to this is 657,720 different options. \nWOW huh? that adds up quick. The tough ones I " +
    		    "gave you a calculator to use.");
    		    break;
    		    
            case "combination":
    	        alert("combination");
    	        break;
    	                   
           case "slope":
    	        alert("Finding the slope is all about remembering the formula, take (x,y) and (x,y) then the slope will be y-y/x-x\nFor Example: (6,9) and (3,5)\n" +
    	        "Take and solve 9-5/6-3 to get 4/3 and simplify to 1 1/3\n\nNOTE: There are a few things to watch out for:\n1. If the numerator is 0, then the slope " +
    	        "is automatically 0.\n2. If the denominator is 0 then the slope is undefined (remember you can't divide by 0)\n3. If both the numerator and the denominator "+
    	        "are negative numbers, then the result would be a positive number.\n4. If the number ends up being negative, then make sure to place the negative in the " +
    	        "furthest left answer box (either the full number or numerator box)\n5. Make sure to simplify your fraction, always simplify your fractions!");
    	        break;
  
    		default:
    			alert("You didn't really need any help? Did you? Let Mark know you saw this! :P\n\nMARK DO SOMETHING!");
    	}
    }, 600);
}

///////////////////////////////////////////////FRACTION SHARED FUNCTIONS/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractionSimplifiedGuess(type) {
	var fullNumberGuess = 0;
	var numeratorGuess = 0;
	var denominatorGuess = 0;
	var numberGuessed = 0;
	if($('#fullNumberGuess').val() !== '') {
		fullNumberGuess = $('#fullNumberGuess').val();
	}
	if($('#numeratorGuess').val() !== '') {
		numeratorGuess = $('#numeratorGuess').val();
	}
	if($('#denominatorGuess').val() !== '') {
		denominatorGuess = $('#denominatorGuess').val(); 
	}
	
	if (fullNumberGuess == simplifiedFullNumber && numeratorGuess == simplifiedNumerator && 
	denominatorGuess == simplifiedDenominator) {
		isCorrect = true;
	} else {
		isCorrect = false;
	}
	
	checkAnswer();
	if(count<10) {
		window[type + "Question"]();
	} else {
		checkFinalAnswer();
	}
	
}

function simplifyFraction(numerator, denominator) {
    var largestDivisor = 1;
	simplifiedFullNumber = 0;
	simplifiedNumerator = numerator;
	simplifiedDenominator = denominator;
	if(numerator == 0) {
    	simplifiedNumerator = 0;
    	simplifiedDenominator = 0;
    	return;
	} else if((numerator/denominator) % 1 == 0 ) {
	    simplifiedFullNumber = numerator/denominator;
    	simplifiedNumerator = 0;
    	simplifiedDenominator = 0;
    	return;
	} else if(Math.abs(numerator) > Math.abs(denominator)) {
	    if((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
	        numerator = Math.abs(numerator);
	        denominator = Math.abs(denominator);
        	while(numerator - denominator > 0) {
    			numerator = numerator - denominator;
    			simplifiedFullNumber--;
    		}
	    } else {
	        numerator = Math.abs(numerator);
	        denominator = Math.abs(denominator);
	        while(numerator - denominator >= 0) {
    			numerator = numerator - denominator;
    			simplifiedFullNumber++;
    		}
	    }
        largestDivisor = getLargestDivisor(numerator,denominator);

	} else if(denominator < 0 && numerator > 0) {
	    denominator = Math.abs(denominator);
        largestDivisor = getLargestDivisor(numerator,denominator);
		numerator *= -1;
	} else if(denominator > 0 && numerator < 0) {
	    numerator = Math.abs(numerator);
        largestDivisor = getLargestDivisor(numerator,denominator);
		numerator *= -1;
	    
	} else if(denominator < 0 && numerator < 0 ) {
        denominator = Math.abs(denominator);
        numerator = Math.abs(numerator);
        largestDivisor = getLargestDivisor(numerator,denominator);
	} else {
        largestDivisor = getLargestDivisor(numerator,denominator);
	}
	
	simplifiedNumerator = numerator/largestDivisor;
	simplifiedDenominator = denominator/largestDivisor;
	console.log(simplifiedFullNumber + ' ' + simplifiedNumerator + ' / ' + simplifiedDenominator);
  
}

function getLargestDivisor(numerator,denominator){
    var largestDivisor = 1;
    for(var i = 2 ; i <= (denominator/2) ; i++) {
			if( numerator%i == 0 && denominator%i==0) {
				largestDivisor = i;
			}
		}
	return largestDivisor;
}
function simplifyFraction2(numerator, denominator) {
	var largestDivisor = 1;
	simplifiedFullNumber = 0;
	simplifiedNumerator = numerator;
	simplifiedDenominator = denominator;

	if( numerator >= denominator) {
		while(numerator - denominator >= 0) {
			numerator = numerator - denominator;
			simplifiedFullNumber++;
		}
	} 
	if(numerator > 0 && denominator > 0) {
		for(var i = 2 ; i <= (denominator/2) ; i++) {
			if( numerator%i == 0 && denominator%i==0) {
				largestDivisor = i;
			}
		}
		simplifiedNumerator = numerator/largestDivisor;
		simplifiedDenominator = denominator/largestDivisor;
	}else {
		simplifiedNumerator = 0;
		simplifiedDenominator = 0;
	}
	
	console.log(simplifiedFullNumber + ' ' + simplifiedNumerator + ' / ' + simplifiedDenominator);
    
	

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////HELPER METHODS///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getFactors(numberToFactor) {
    var returnArray = [];
	for (var i = 1 ; i <= numberToFactor/2 ; i++) {
		if(returnArray.indexOf(i)>-1) {
    			break;
    		}
		if(numberToFactor % i === 0) {
			returnArray.push(i);
			if(returnArray.indexOf(numberToFactor/i) < 0) {
                returnArray.push(numberToFactor/i);
			}
		}
	}
	return returnArray;
}


function compareFactors(numberGuessed) {
	var tempArray = correctAnswer.slice();
	
	for (var i = 0; i < numberGuessed.length; i ++) {
		var isCorrect = false;
		for( var j = 0; j < correctAnswer.length ; j++){
			if(numberGuessed[i] == correctAnswer[j]) {
				if(tempArray.indexOf(correctAnswer[j]) < 0) {
					return false;
				}
				var index = tempArray.indexOf(correctAnswer[j]);
				tempArray.splice(index, 1);
				isCorrect = true;
				console.log(tempArray);
				break;
			}
		}
		if(!isCorrect && numberGuessed[i] != "") {
			return false;
		}
	}

	return tempArray.length == 0;
	
}

function guess(guessedNumber) {
	if(parseFloat(guessedNumber) == parseFloat(correctAnswer)) {
		isCorrect = true;
	} else {
		isCorrect = false;
	}
	checkAnswer();
}

function checkAnswer() {
	$('#resultsOfMathQuestion').empty();
	$('#correctAnswerDiv').empty();
	$('#resultsOfMathQuestion').show();
	if(isCorrect) {
		correctAnswers++;
	    $('#resultsOfMathQuestion').append('<img src="img/coin.gif" frameBorder="0" class=' + 
	    '"giphy-embed"></iframe><audio autoplay><source src="sound/smb_coin.wav" type="audio/wav"></audio>');
	
	} else {	
	  wrongAnswers++;
	  $('#correctAnswerDiv').append('<h3>Correct Answer: ' + correctAnswer + '</h3>');
	  $('#resultsOfMathQuestion').append('<img src="img/death.gif"' +
										'frameBorder="0" class="giphy-embed">' +
                                        '<audio autoplay><source src="sound/smb_mariodie.wav" type="audio/wav"></audio>');
	}
}

function socialStudiesGuess(guessedNumber, socialStudiesAnswers) {
    if(parseFloat(guessedNumber) == parseFloat(correctAnswer)) {
        isCorrect = true;
    } else {
        isCorrect = false;
    }
    $('#resultsOfMathQuestion').empty();
    $('#correctAnswerDiv').empty();
    $('#resultsOfMathQuestion').show();
    if(isCorrect) {
        correctAnswers++;
        $('#resultsOfMathQuestion').append('<iframe src="https://giphy.com/embed/n7GGXbQA59hfi" frameBorder="0" class=' + 
        '"giphy-embed"></iframe><audio autoplay><source src="sound/smb_coin.wav" type="audio/wav"></audio>');
    
    } else {    
      wrongAnswers++;
      $('#correctAnswerDiv').append('<h3>Correct Answer: ' + socialStudiesAnswers[correctAnswer] + '</h3>');
      $('#resultsOfMathQuestion').append('<iframe src="https://giphy.com/embed/HufVcQG2AFx9m"' +
                                        'frameBorder="0" class="giphy-embed"></iframe><audio autoplay><source src="sound/smb_mariodie.wav" type="audio/wav"></audio>');
    }
}

function results() {
        isRandomTopic = false;
    	$('#inputDiv').empty();
		$('#resultsOfMathQuestion').empty();
		$('#resultsOfMathQuestion').hide();
		$('#correctAnswerDiv').empty();
		$('#scoreBoard').empty();
        $('.navigationButtons').hide();
        $('#topDiv').hide();
        $('#jokeDiv').hide();
		$('#inputDiv').append('<h2 style="font-size:18px">Correct Answers: ' + correctAnswers + ' </h2>'  +
						'<h2 style="font-size:18px">Wrong Answers: ' + wrongAnswers + ' </h2>');
		
		if(wrongAnswers > 0 || isPerfect == false) {
		    $('#gameOverContainer').show();
		    var coins = correctAnswers * wrongAnswers;
		    var points = correctAnswers * 123450;
		    if(correctAnswers == 0) {
		        points = '000000';
		        coins = '00';
		    }
		    $('body').css("background-color", "#000000");
		    $('#gameOverContainer').append('<h3 class="marioFont" style="margin-top:20px;font-size:10px;">&nbsp;MARIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
		    '&nbsp;&nbsp;&nbsp;&nbsp;WORLD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIME</h3><h3 class="marioFont" style="font-size:10px">&nbsp;' + points +'&nbsp;&nbsp;<img ' + 
		    'src="img/Retro-Coin-icon.png">x'+ coins + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + correctAnswers + '-' + wrongAnswers +'</h3>' +
		    '<h3 class="marioFont" style="font-size:10px;padding: 280px 0;text-align: center;">GAME OVER</h3>');
		    if(wrongAnswers > 2) {
			    $('#resultsOfMathQuestion').append(' <iframe src="https://giphy.com/embed/t5iD9sS7qUcq4" ' +
				  'frameBorder="0" class="giphy-embed"></iframe>');
		    } else {
	            $('#resultsOfMathQuestion').append('<iframe src="https://giphy.com/embed/Mzz3M7dfHEQVi"' +
		        'frameBorder="0" class="giphy-embed"></iframe>');
		    }
		    $('#gameOverContainer').append('<audio autoplay><source src="sound/smb_gameover.wav" type="audio/wav"></audio>')
		    gameOverClick();
		    $("#footerLinks").hide();
		} else { 
		    $('#fireworks').append('<audio autoplay><source src="sound/smb_stage_clear.wav" type="audio/wav"></audio>');
			$('#fireworks').show();
			a = new Fireworks();
			a.run();
			fireworksClick();
			$('#inputDiv').append('<h1> Perfection!</h1>');
			$('#resultsOfMathQuestion').append(' <iframe src="https://giphy.com/embed/ZVZbyfM3eYrLi" frameBorder=' +
										'"0" class="giphy-embed"></iframe>');
		} 
}
function gameOverClick() {
    $('#gameOverContainer').on('click', function() {
        $('#gameOverContainer').empty();
	    $('#gameOverContainer').hide();
	    $('#resultsOfMathQuestion').show();
        $('body').css('background-color', '#ffffff');
		$('#topDiv').show();
		$('.navigationButtons').show();
        $("#footerLinks").show();
	});
}
function fireworksClick() {
	$('#fireworks').on('click', function() {
		$('#topDiv').show();
		$('#resultsOfMathQuestion').show();
		$('.navigationButtons').show();
		$('#fireworks').hide();
		a = new Fireworks();
		a.clear();
	});
}
function refreshSite() {
    $("#musicDiv").empty();
    $("#scoreBoard").empty();
    $("#calculator").remove();
	$('#divisionQuestion').empty();
	$('#correctAnswerDiv').empty();
	$('#resultsOfMathQuestion').empty();
	$('#resultsOfMathQuestion').hide();
	$('#inputDiv').empty();
	previousNumbers = [];
	count = 0;
	correctAnswers = 0;
	wrongAnswers = 0;
	fractionDecimalAnswer = 0.0;
    simplifiedNumerator = 0;
    simplifiedDenominator = 0;
    isPerfect = true;
}

function getRandom(minimum, distance) {
	return Math.floor(Math.random() * (distance) + minimum);
}

function showMario() {
	if(showJoke == false) {
		$('#jokeDiv').append(' <iframe src="https://giphy.com/embed/3ov9jURYkrRduYOiDm" ' +
				  'frameBorder="0" class="giphy-embed"></iframe>');
	    $([document.documentElement, document.body]).animate({
            scrollTop: $("#jokeDiv").offset().top
    }, 2000);
		showJoke = true;
	} else {
		$('#jokeDiv').empty();
		showJoke = false;
	}
	
	
}


function calcButton() {
    $("#calc").on('click', function(){
        $('#sound').append('<audio autoplay><source src="sound/smb_kick.wav" type="audio/wav"></audio>');
        if(document.getElementById("calculator")) {
            $("#calculator").remove();
        } else {
           $("#inputDiv").append(	'<div class="col-lg-12"><div class="center" id="calculator"><form name="calculator">'+
            '<input type="button" id="clear" class="btn other" value="C">' +
            '<input type="text" id="display"><br><input type="button" class="btn number" value="7" onclick="get(this.value);">' +
            '<input type="button" class="btn number" value="8" onclick="get(this.value);"><input type="button" class="btn number"' +
        	'value="9" onclick="get(this.value);"><input type="button" class="btn operator" value="+" onclick="get(this.value);">' +
            '<br><input type="button" class="btn number" value="4" onclick="get(this.value);"><input type="button" ' +
        	'class="btn number" value="5" onclick="get(this.value);"><input type="button" class="btn number" value="6" ' + 
        	'onclick="get(this.value);"><input type="button" class="btn operator" value="*" onclick="get(this.value);">' +
            '<br><input type="button" class="btn number" value="1" onclick="get(this.value);"><input type="button" ' +
        	'class="btn number" value="2" onclick="get(this.value);"><input type="button" class="btn number" value="3" ' +
        	'onclick="get(this.value);"><input type="button" class="btn operator" value="-" onclick="get(this.value);">' +
            '<br><input type="button" id="delete" class="btn other" value="<"><input type="button" class="btn number" ' +
            'value="0" onclick="get(this.value);"><input type="button" class="btn operator" ' +
        	'value="/" onclick="get(this.value);"><input type="button" class="btn other" value="=" onclick="calculates();">' +
        	'</form></div></div><script src="js/calc.js"></script>');
        }
    });
    
}

function appendHelpBox() {
    $('#inputDiv').append('<div class="popup" onclick="tipClick(infoType)"><img src="img/questionBlock.gif"' + 
		' style="margin-top: 8px; width:32px;"></div><br></h1>');
}

function genericSubmitBox() {
    	$('#inputDiv').append('<div class="inline-div"><input type="number" class="form-control" id="guessNumber" style="height:50px;width:100px"></div>' +
	            '<div id="submitButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div>');
	 
}

function fractionSubmitBox(){
	$("#inputDiv").append(
    	'<div class="col-md-12">' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="fullNumberGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;">&nbsp; &nbsp;</h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="numeratorGuess" style="width: 60px;height:50px;"></div>' +
    	'<h1 style="display:inline;"> / </h1>' +
    	'<div class="inline-div"> <input type="number" class="form-control" id="denominatorGuess" style="width: 60px;height:50px;"></div>' +
    	'</div><div class="inline-div">' +
        '<div id="submitButton" class="inline-div"><img src="img/marioSelect.png" style="height:85px; margin-bottom:-5px;"></div></div>');
}