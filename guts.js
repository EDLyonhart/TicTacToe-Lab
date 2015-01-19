
window.addEventListener("load", function () {

	var turn = 0;
	var squares = document.getElementsByClassName("unUsedSquare");
	var winningCondition = false;


	//cycle through squares apply click

	function clickedSquare () {
			for (i = 0; i < squares.length; i++) {
				squares[i].addEventListener("click", addMarker);
			}
		}
		clickedSquare();

	//change background and marker based on which player is up
		//recognize if square has already been clicked based on innerHTML

	function addMarker () {
		if (this.innerHTML != "X" && this.innerHTML != "O") {
			console.log("working");
			if (turn % 2 === 0 && winningCondition === false) {
				this.style.backgroundColor="red";
				this.innerHTML="X";
			} else {
				this.style.backgroundColor="yellow";
				this.innerHTML="O";
			}
			turn++;
		}
	}


	//create a restart button
	//listen for click
	//cycle through squares and change info back to beginning

	function clearBoard(event) {
		for (i = 0; i < squares.length; i++) {
			squares[i].className = "col-sm-2 unUsedSquare";
			squares[i].style.backgroundColor= "white";
			squares[i].innerHTML="";
		}
	}

	var resetButton = document.getElementsByClassName("reset");
	resetButton[0].addEventListener("click", clearBoard);
});

















