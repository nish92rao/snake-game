$(document).ready(function(){
	init();
});

function init(){
	var msg = "Click OK to start a new game.";
	if(prevScore>-1){
		msg = "Score: "+prevScore+"\nHigh Score: "+highScore+"\n\n"+msg;
		if(confirm(msg)){
			startNewGame();
		} else {
			window.close();
		}
	} else {
		alert(msg);
		startNewGame();
	}
};

function startNewGame(){
	createBoardTable();
	snake.defaultSnake();
	initFood();
	initSnakeMove(1);
	changeDir();
}

function endGame(){
	clearInterval(movement);
	clearInterval(foodPiece);
	clearInterval(foodBlink);
	$(".food-cell").removeClass();
	prevScore = snake.snakeLength - defaultSnakeLength;
	if(prevScore > highScore){
		highScore = prevScore;
	}
	init();
}

function initFood(){
	food.createFood();
}

function initSnakeMove(speed){
	if(movement != null){
		clearInterval(movement);
		movement = null;
	}
	movement = window.setInterval(function(){
		snake.moveSnake();
	},getIntervalForSpeed(speed));
}

function changeDir(){
	$(document).on("keydown", function (e) {
		var snakeDir = snake.snakeDir;
		if(snakeDir=='r+' || snakeDir=='r-'){
			if(e.which == 37){//Left
				snake.snakeDir = 'c-';
			} else if(e.which == 39){//Right
				snake.snakeDir = 'c+';
			}
		} else if(snakeDir=='c+' || snakeDir=='c-'){
			if(e.which == 38){//Up
				snake.snakeDir = 'r-';
			} else if(e.which == 40){//Down
				snake.snakeDir = 'r+';
			}
		}
		
	});
}

function createBoardTable(){	
	var htmlStr = '<table style="table-layout:fixed;width:'+width+'px;height:'+height+'px;">';
	for(var i=0; i<rows; i++){
		var rowStr = '<tr>';
		for(var j=0; j<cols; j++){
			var cellStr = '<td id="'+i+'_'+j+'"></td>';
			rowStr += cellStr;
		}
		rowStr += '</tr>';
		htmlStr += rowStr;
	}
	htmlStr += '</table>';
	
	$("#board").html(htmlStr);
	$("#board").attr("style","border:1px solid black;width:"+width+"px;height:"+height+"px;");
}

function isFoodEaten(){
	var result = false;
	if(snake.snakeHead[0]==food.foodRow && snake.snakeHead[1]==food.foodCol){
		result = true;
	}
	return result;
}

function getIntervalForSpeed(speed){
	var result = 500;
	if(speed == 2){
		result = 400;
	} else if(speed == 3){
		result = 300;
	} else if(speed == 4){
		result = 200;
	} else if(speed == 5){
		result = 100;
	} else if(speed == 6){
		result = 50;
	}
	return result;
}