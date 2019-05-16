
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("display").value = "";
});


document.getElementById("delete").addEventListener("click", function() {
    var displayValue = document.getElementById("display").value;
    displayValue = displayValue.slice(0,-1);
    document.getElementById("display").value = displayValue;
});
function get(value) {
	document.getElementById("display").value += value; 
    $('#sound').append('<audio autoplay><source src="sound/smb3_stomp.wav" type="audio/wav"></audio>');
} 


function calculates() {
	var result = 0;
	result = document.getElementById("display").value;
	document.getElementById("display").value = "";
	document.getElementById("display").value = eval(result);
    $('#sound').append('<audio autoplay><source src="sound/smb_bowserfire.wav" type="audio/wav"></audio>');
	
}