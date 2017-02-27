
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
	luke: '<div class="characters" id= "lukeSkywalker" style="border: 3px solid #00cc02">' + 
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
numberClicks = 0
function determineChar(){
	if (numberClicks === 0){
		enemy();
		numberClicks++;
		console.log(numberClicks);
	} else {
		defender();
		numberClicks++;
		console.log(numberClicks);
	}
}

	//change color and move to enemy 
function enemy(){
	$(".characters").not(this)
		.appendTo(".enemiesToAttack")
		.css("background-color", "red")
		.css("border", "2px solid black")
		.css("color","black");
}
	//change color and move to defender



	//when game is won
		//show reset button, visibile currently to test functionality

	//when game is lost
		//show rest button


	//attack button
function attackFunction(){
	attackPower = attackPower + 8
	//UNFINISHED
		//need to track health scores, 
		//subtract counter attacks


};

	//reset function, set all varaibles back 
function resetFunction(){
	//reset variables to zero 
	numberClicks =0;
	attackPower = 8;
	lukeHealthRemaining = 120;
	yodaHealthRemaining = 100;
	vaderHealthRemaining = 180;
	bobaHealthReaming = 150;
	//move characters back to starting position
	$(".characterSection").empty();
	for (var i = 0; i < characterList.length; i++) {
		$(".characterSection").append(characterList[i]);
	};
	$(".enemiesToAttack").empty();
	//need to include ability to reclick characters
};


//Got stuck on how to track which ID was clicked to move remaining to enemmies 
	//need to count clicks to determine who to fight first
 numberClicks = 0;
//On Click
$(document).on("click", "#lukeSkywalker", determineChar);

$(document).on("click", "#yoda", determineChar);

$(document).on("click", "#darthVader", determineChar);

$(document).on("click", "#bobaFett", determineChar);


$(".resetButton").on("click", function(){
	resetFunction();
});

});

