//listen for click.
//determin whos turn it is
	//is class 'unUsedSquare'?
		//change background on click based on player
		//change class to usedSquare
		//progress the turn count

window.onload = beginning;

function beginning() {
	clickedSquare();
}

var turn = 0;
var squares = document.getElementsByClassName("unUsedSquare");


//cycle through squares apply click

function clickedSquare () {
	for (i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", addMarker);
	}
}
clickedSquare();

//determin if square is an unUsedSquare
//acknowledge who's turn it is
	//change background
	//add 'x'/'o'
	//change class name to 'usedSquare'

function addMarker () {
	console.log("functioning");
	if (turn % 2 === 0) {
		this.style.backgroundColor="red";
		this.innerHTML="X";
	} else {
		this.style.backgroundColor="yellow";
		this.innerHTML="O";
	}
	event.target.className = "col-sm-2 usedSquare";
	turn++;
}





















