var snake = {
	snakeBody: [],
	snakeDir: [],
	snakeHead: [],
	snakeTail: [],
	snakeLength: -1,
	defaultSnake: function(){
		this.snakeBody = [];
		this.snakeDir = 'c+';
		this.snakeHead = [];
		this.snakeTail = [0,0];
		this.snakeLength = defaultSnakeLength;
		var prevRow = this.snakeTail[0];
		var prevCol = this.snakeTail[1];
		for(var x=0; x<this.snakeLength; x++){
			if(this.snakeDir=='c+'){
				this.snakeBody.push([prevRow,prevCol++]);
			} else if(this.snakeDir=='c-'){
				this.snakeBody.push([prevRow,prevCol--]);
			} else if(this.snakeDir=='r+'){
				this.snakeBody.push([prevRow++,prevCol]);
			} else {
				this.snakeBody.push([prevRow--,prevCol]);
			}
		}
		this.snakeHead = this.snakeBody[this.snakeLength-1];
		this.displaySnake();
	},
	moveSnake: function(){
		var prevRow = this.snakeHead[0];
		var prevCol = this.snakeHead[1];
		if(this.snakeDir=='c+'){
			prevCol++;
		} else if(this.snakeDir=='c-'){
			prevCol--;
		} else if(this.snakeDir=='r+'){
			prevRow++;
		} else {
			prevRow--;
		}
		this.snakeHead = [prevRow,prevCol];
		if(this.isPresentOnSnakeBody(this.snakeHead)){
			this.displaySnake();
			endGame();
			return false;
		}
		if(isFoodEaten()){
			prevScore++;
			initFood();
			initSnakeMove(1);
		} else {
			this.snakeBody.shift(1);
		}
		this.snakeBody.push(this.snakeHead);
		this.snakeLength = this.snakeBody.length;
		this.snakeTail = this.snakeBody[0];
		this.displaySnake();
		if(prevRow>=rows || prevCol>=cols
			|| prevRow<0 || prevCol<0){
			endGame();
			return false;
		}
		return true;
	},
	displaySnake: function(){
		$(".snake-cell,.snake-head").removeClass();
		for(var x=0; x<this.snakeLength; x++){
			var snakeCell = this.snakeBody[x];
			if(x==this.snakeLength-1){
				$("#"+snakeCell[0]+"_"+snakeCell[1]).addClass("snake-head");
			} else {
				$("#"+snakeCell[0]+"_"+snakeCell[1]).addClass("snake-cell");
			}
		}
	},
	isPresentOnSnakeBody: function(pos){
		var result = false;
		for(var x=1; x<this.snakeLength; x++){
			var rowVal = pos[0];
			var colVal = pos[1];
			var cellRow = this.snakeBody[x][0];
			var cellCol = this.snakeBody[x][1];
			if(rowVal==cellRow && colVal==cellCol){
				result = true;
				break;
			}
		}
		return result;
	}
};