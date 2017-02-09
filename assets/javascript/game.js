function game() {
	//main interactive game object
	var crystals = {
		//variables
		value : [0,0,0,0],
		score : 0,
		wins : 0,
		losses : 0,
		points : 0,

		//set values
		init : function(){
			this.score = Math.floor(Math.random() * 102) + 19;
			this.points = 0;

			//set up crystal values
			for(i=0; i<4; i++){
				this.value[i] = Math.floor(Math.random() * 12) + 1;

				//redundancy check on crystal values
				var a = i;
				while( a > 0 ){
					if( this.value[i] == this.value[a-1]){
						this.value[i] = Math.floor(Math.random() * 12) + 1;
					}
					else{
						a--;
					}
				}

			}

			//print values
			$("#theScore").html(this.score);
			$("#yourPoints").html(this.points);
		},

		//what happens when a gem is clicked
		gotClicked : function(index){
			//add points for click
			console.log("click");
			this.points = this.points + this.value[index];
			$("#yourPoints").html(this.points);

			//check win
			if(this.score == this.points){
				//update wins
				this.wins++;
				$("#wins").html("Your Wins: " + this.wins);

				//alert if win
				alert("You Win!");

				//reset
				this.init();
			}

			//check lose
			else if(this.score < this.points){
				//update losses
				this.losses++;
				$("#losses").html("Your Losses: " + this.losses);

				//alert if loss
				alert("You Lose :(");

				//reset
				this.init();
			}

			//just in case
			else{}

		}
	}

	//initialize game
	crystals.init();

	//event listeners
	$("#crystal1").on("click", function(){crystals.gotClicked(0)});
	$("#crystal2").on("click", function(){crystals.gotClicked(1)});
	$("#crystal3").on("click", function(){crystals.gotClicked(2)});
	$("#crystal4").on("click", function(){crystals.gotClicked(3)});
}