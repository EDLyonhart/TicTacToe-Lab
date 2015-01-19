
window.addEventListener("load", function () {

	var turn = 0;
	var squares = document.getElementsByClassName("unUsedSquare");
	var winningCondition = false;


	//cycle through squares apply click
		//dont apply if square is already clicked <-------------- still to do
			//.removeEventListener
			//if this.innerHtml === ""

	function clickedSquare () {
		for (i = 0; i < squares.length; i++) {
			squares[i].addEventListener("click", addMarker);
		}
	}
	clickedSquare();

	//change background and marker based on which player is up

	function addMarker () {
		if (turn % 2 === 0 && winningCondition === false) {
			this.style.backgroundColor="red";
			this.innerHTML="X";
		} else {
			this.style.backgroundColor="yellow";
			this.innerHTML="O";
		}
		turn++;
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

// switch (winningCondition) { 
// 	case (document.getElementById("1") && (document.getElementById("2") && (document.getElementById("3"))
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("4") && (document.getElementById("5") && (document.getElementById("6")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("7") && (document.getElementById("8") && (document.getElementById("9")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("1") && (document.getElementById("4") && (document.getElementById("7")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("2") && (document.getElementById("5") && (document.getElementById("8")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("3") && (document.getElementById("6") && (document.getElementById("9")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("1") && (document.getElementById("5") && (document.getElementById("9")):
// 		winningCondition = true;
// 		break;
// 	case (document.getElementById("3") && (document.getElementById("5") && (document.getElementById("7")):
// 		winningCondition = true;
// 		break;
// 	default: winningCondition = false;
// 		{
// }





















