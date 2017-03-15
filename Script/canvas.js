var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");


var c1 = document.getElementById("myCanvas1");

var ctx1 = c.getContext("2d");


var c2 = document.getElementById("myCanvas2");

var ctx2 = c.getContext("2d");


var wW = 1920 / 4;
var wH = 1080 / 4;


//Creates a new canvas with the current users width and height
function createNewCanvas(){
  c.width  = wW;
  c.height =  wH;
}

function createNewCanvas2(){
  c2.width  = wW;
  c2.height =  wH;
}

function createNewCanvas1(){
  c1.width  = wW;
  c1.height =  wH;
}
createNewCanvas();
createNewCanvas1();
createNewCanvas2();

function randomHeightPos(){
	return (Math.random() * ctx.canvas.height)+ 1;
}

//Some random number from 0-yourScreenWidth
function randomWidthPos(){
		return (Math.random() * ctx.canvas.width)+ 1;
}
