// 01 igrica

// var xo = "O";

// var container = document.getElementsByClassName("container");

// for ( var i=0; i<9; i++){
// 	var newDiv = document.createElement("div");
// 	newDiv.className = "box"; 
// 	newDiv.id = "div" + i;
// 	container[0].appendChild(newDiv);
// }


// var boxes = document.getElementsByClassName("box");

// for ( var i=0; i<boxes.length; i++){
// 	boxes[i].addEventListener( "click", klikFunction)
// }

// function klikFunction(){
// 	if ( xo == "O"){
// 		xo = "X"
// 	}else{
// 		xo = "O"
// 	}
// 	this.innerHTML = xo;
// 	proveriLinije();
// }

// function proveriLinije(){
// 	if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML )){
// 		boxes[1].style.color = "red"
// 		boxes[2].style.color = "red"
// 		boxes[0].style.color = "red"
// 	}else if ((boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML )){
// 		boxes[3].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[5].style.color = "red"
// 	}else if (( boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML ) && (boxes[6].innerHTML == boxes[8].innerHTML )){
// 		boxes[6].style.color = "red"
// 		boxes[7].style.color = "red"
// 		boxes[8].style.color = "red"
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML)){
// 		boxes[0].style.color = "red"
// 		boxes[3].style.color = "red"
// 		boxes[6].style.color = "red"
// 	}else if ((boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML )){
// 		boxes[1].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[7].style.color = "red"
// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML )){
// 		boxes[2].style.color = "red"
// 		boxes[5].style.color = "red"
// 		boxes[8].style.color = "red"
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML )){
// 		boxes[0].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[8].style.color = "red"
// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML )){
// 		boxes[2].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[6].style.color = "red"
// 	}
// }	




// 02 igrica

// var xo = "O";

// var container = document.getElementsByClassName("container");

// for ( var i=0; i<9; i++){
// 	var newDiv = document.createElement("div");
// 	newDiv.className = "box"; 
// 	newDiv.id = "div" + i;
// 	container[0].appendChild(newDiv);
// }


// var boxes = document.getElementsByClassName("box");

// for ( var i=0; i<boxes.length; i++){
// 	boxes[i].addEventListener( "click", klikFunction)
// }

// function klikFunction(){
// 	if ( xo == "O"){
// 		xo = "X"
// 	}else{
// 		xo = "O"
// 	}
// 	this.innerHTML = xo;
// 	proveriLinije();
// }

// function proveriLinije(){
// 	if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML ) && (boxes[0].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML =="X")){
// 		boxes[1].style.color = "red"
// 		boxes[2].style.color = "red"
// 		boxes[0].style.color = "red"
// 		alert( "X is win" );
// 	}else if((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML ) && (boxes[0].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML =="O")){
// 		boxes[1].style.color = "red"
// 		boxes[2].style.color = "red"
// 		boxes[0].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML ) && (boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML =="X")){
// 		boxes[3].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[5].style.color = "red"
// 		alert( "X is win" );
// 	}else if((boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML ) && (boxes[3].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[5].innerHTML =="O")){
// 		boxes[3].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[5].style.color = "red"
// 		alert( "O is win" );


// 	}else if (( boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML ) && (boxes[6].innerHTML == boxes[8].innerHTML ) && (boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[6].style.color = "red"
// 		boxes[7].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "X is win" );
// 	}else if(( boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML ) && (boxes[6].innerHTML == boxes[8].innerHTML ) && (boxes[6].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[6].style.color = "red"
// 		boxes[7].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML) && (boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML =="X")){
// 		boxes[0].style.color = "red"
// 		boxes[3].style.color = "red"
// 		boxes[6].style.color = "red"
// 		alert( "X is win" );
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML) && (boxes[0].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML =="O")){
// 		boxes[0].style.color = "red"
// 		boxes[3].style.color = "red"
// 		boxes[6].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML ) && (boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML =="X")){
// 		boxes[1].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[7].style.color = "red"
// 		alert( "X is win" );
// 	}else if((boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML ) && (boxes[1].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[7].innerHTML =="O")){
// 		boxes[1].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[7].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML ) && (boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[2].style.color = "red"
// 		boxes[5].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "X is win" );
// 	}else if((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML ) && (boxes[2].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[2].style.color = "red"
// 		boxes[5].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML ) && (boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[0].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "X is win" );
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML ) && (boxes[0].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[0].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[8].style.color = "red"
// 		alert( "O is win" );


// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML ) && (boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML =="X")){
// 		boxes[2].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[6].style.color = "red"
// 		alert( "X is win" );
// 	}else if((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML ) && (boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML =="O")){
// 		boxes[2].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[6].style.color = "red"
// 		alert( "O is win" );
// 	}
// }



// 03 igrica treci pu


// var xo = "O";

// var container = document.getElementsByClassName("container");

// var header = document.getElementsByClassName("naslov");

// for ( var i=0; i<9; i++){
// 	var newDiv = document.createElement("div");
// 	newDiv.className = "box"; 
// 	newDiv.id = "div" + i;
// 	container[0].appendChild(newDiv);
// }


// var boxes = document.getElementsByClassName("box");

// for ( var i=0; i<boxes.length; i++){
// 	boxes[i].addEventListener( "click", klikFunction)
// }

// function klikFunction(){
// 	if ( xo == "O"){
// 		xo = "X"
// 	}else{
// 		xo = "O"
// 	}
// 	this.innerHTML = xo;
// 	proveriLinije();
// }

// function proveriLinije(){
// 	if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML ) && (boxes[0].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML =="X")){
// 		boxes[1].style.color = "red"
// 		boxes[2].style.color = "red"
// 		boxes[0].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML) && (boxes[0].innerHTML == boxes[2].innerHTML ) && (boxes[0].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML =="O")){
// 		boxes[1].style.color = "red"
// 		boxes[2].style.color = "red"
// 		boxes[0].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML ) && (boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML =="X")){
// 		boxes[3].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[5].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if((boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML) && (boxes[3].innerHTML == boxes[5].innerHTML ) && (boxes[3].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[5].innerHTML =="O")){
// 		boxes[3].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[5].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if (( boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML ) && (boxes[6].innerHTML == boxes[8].innerHTML ) && (boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[6].style.color = "red"
// 		boxes[7].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if(( boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML ) && (boxes[6].innerHTML == boxes[8].innerHTML ) && (boxes[6].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[6].style.color = "red"
// 		boxes[7].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML) && (boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML =="X")){
// 		boxes[0].style.color = "red"
// 		boxes[3].style.color = "red"
// 		boxes[6].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML) && (boxes[0].innerHTML == boxes[6].innerHTML) && (boxes[0].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML =="O")){
// 		boxes[0].style.color = "red"
// 		boxes[3].style.color = "red"
// 		boxes[6].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML ) && (boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML =="X")){
// 		boxes[1].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[7].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if((boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML) && (boxes[1].innerHTML == boxes[7].innerHTML ) && (boxes[1].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[7].innerHTML =="O")){
// 		boxes[1].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[7].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML ) && (boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[2].style.color = "red"
// 		boxes[5].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML) && (boxes[2].innerHTML == boxes[8].innerHTML ) && (boxes[2].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[2].style.color = "red"
// 		boxes[5].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML ) && (boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML =="X")){
// 		boxes[0].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if ((boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML) && (boxes[0].innerHTML == boxes[8].innerHTML ) && (boxes[0].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[8].innerHTML =="O")){
// 		boxes[0].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[8].style.color = "red"
// 		header[0].innerHTML = "KICA is win";


// 	}else if ((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML ) && (boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML =="X")){
// 		boxes[2].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[6].style.color = "red"
// 		header[0].innerHTML = "DANILO is win";
// 	}else if((boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML) && (boxes[2].innerHTML == boxes[6].innerHTML ) && (boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML =="O")){
// 		boxes[2].style.color = "red"
// 		boxes[4].style.color = "red"
// 		boxes[6].style.color = "red"
// 		header[0].innerHTML = "KICA is win";
// 	}
// }		


// 04 igricaaaaaaa

var xo = "O"

var container = document.getElementsByClassName("container");

for ( var i=0; i<9; i++){
	var newDiv = document.createElement("div");
	newDiv.className = "box";
	newDiv.id = "box " + i;
	container[0].appendChild(newDiv);
}

var boxes = document.getElementsByClassName("box");

for ( var i=0; i<boxes.length; i++ ){
	boxes[i].addEventListener("click", clickFunction);
}

function clickFunction(){
	if ( xo == "X"){
		xo = "O"
	}else{
		xo = "X"
	}
	this.innerHTML = xo;

	proveraLinija();
}

function proveraLinija(){
	
}

