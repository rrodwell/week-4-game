
//Attack variables
var attackPower = 8;
var enemyAttackPower = 25;

var lukeHealthRemaining = 120;
var yodaHealthRemaining = 100;
var vaderHealthRemaining = 180;
var bobaHealthReaming = 150;

//Character vs. Enemy 
var isMainCharacter = false;
var isEnemy = false;

//object for divs
var characterDiv = {
	luke: '<div class="characters" id= "lukeSkywalker" style="border: 3px solid #00cc02" >' + 
			'<h4>Luke Skywalker</h4>' + 
			'<img src="assets/images/luke.png" width="160" height="130">' +
			'<p id="lukeHealth">120</p>' + '</div>',

	yoda: '<div class="characters" id="yoda" style="border: 3px solid #00cc02">' +
			'<h4>Yoda</h4>' + 
			'<img src="assets/images/yoda.png" width="160" height="130">' +
			'<p id="yodaHealth">100</p>' + '</div>',
				
	vader: '<div class="characters" id= "darthVader" style="border: 3px solid #00cc02">' +
			'<h4>Darth Vader</h4>' + 
			'<img src="assets/images/darthvader.png" width="160" height="130">' +
			'<p id="vaderHealth">180</p>' + '</div>',

	boba: '<div class="characters" id= "bobaFett" style="border: 3px solid #00cc02">' +
			'<h4>Boba Fett</h4>' +
			'<img src="assets/images/bobafett.png" width="160" height="130">' +
			'<p id="bobaHealth">150</p>' + '</div>'
};
var characterList = [characterDiv.luke, characterDiv.yoda, characterDiv.vader, characterDiv.boba];

$(document).ready(function() {
	
	for (var i = 0; i < characterList.length; i++) {
		$(".characterSection").append(characterList[i]);
	}
	
//Functions 

	//change color and to enemy
function enemyColor(){

};
	//change color and move to defender
function defenderColor(){

};

	//when game is won
		//show reset button

	//when game is lost
		//show rest button


	//attack button
function attackFunction(){

};

	//reset function, set all varaibles back 
function resetFunction(){
	//reset variables to zero 
	numberClicks =0;
	attackPower = 8;
	enemyAttackPower = 25;
	lukeHealthRemaining = 120;
	yodaHealthRemaining = 100;
	vaderHealthRemaining = 180;
	bobaHealthReaming = 150;
	//move characters back to starting position
	for (var i = 0; i < characterList.length; i++) {
		$(".characterSection").append(characterList[i]);
	};
	$(".enemiesToAttack").html("<div class='enemiesToAttack'></div>");
};



//On Click
$("#lukeSkywalker").on("click", function(){
	var numberClicks = 0
	if 

	$("#lukeSkywalker").appendTo(".enemiesToAttack");

});

$("#yoda").on("click", function(){

});

$("#darthVader").on("click", function(){

});

$("#bobaFett").on("click", function(){

});

$(".attackButton").on("click", function(){

});

$(".resetButton").on("click", function(){
	resetFunction();

});

});

