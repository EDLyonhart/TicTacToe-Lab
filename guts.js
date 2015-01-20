
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


	//change background, message and marker based on which player is up
		//recognize if square has already been clicked based on innerHTML
	function addMarker () {
		if (this.innerHTML != "X" && this.innerHTML != "O") {
			if (turn % 2 === 0 && winningCondition === false) {
				this.style.backgroundColor="Gold";
				this.innerHTML="X";
				document.getElementById("message").innerHTML = "'X's turn";
			} else {
				this.style.backgroundColor="IndianRed";
				this.innerHTML="O";
				document.getElementById("message").innerHTML = "'O's turn";
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


[1,2,3], [4,5,6], [7,8,9], [1,5,9], [2,5,8], [3,5,7], [1,4,7], [2,5,8], [3,6,9]














