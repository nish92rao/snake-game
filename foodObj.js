var food = {
	foodRow: -1,
	foodCol: -1,
	createFood: function(){
		this.newFoodPiece();
		if(foodPiece != null){
			clearInterval(foodPiece);
			foodPiece = null;
		}
		foodPiece = window.setInterval(function(){
			food.newFoodPiece();
		},15000);
	},
	newFoodPiece: function(){
		var newFood = food.getNewFoodPos();
		food.foodRow = newFood[0];
		food.foodCol = newFood[1];
		food.displayFood();
	},
	getNewFoodPos: function(){
		var newRow, newCol, newPos;
		do{
			newRow = Math.floor(Math.random() * rows);
			newCol = Math.floor(Math.random() * cols);
			newPos = [newRow,newCol];
		} while(snake.isPresentOnSnakeBody(newPos));
		
		return newPos;
	},
	displayFood: function(){
		if(foodBlink != null){
			clearInterval(foodBlink);
			foodBlink = null;
		}
		$(".food-cell").removeClass();
		foodBlink = window.setInterval(function(){
			var id = "#"+food.foodRow+"_"+food.foodCol;
			if($(id) != null){
				if($(id).hasClass("food-cell")){
					$(id).removeClass();
				} else {
					$(id).addClass("food-cell");
				}
			}
		},100);
	}
};