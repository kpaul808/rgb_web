var red;
var green;
var blue;

window.onload=colorchange1	



function colorchange1(){
	red = Math.floor(Math.random() * 256);
	console.log(red)
	colorchange2()
}

function colorchange2(){
	green = Math.floor(Math.random() * 256);
	console.log (green)
	colorchange3()
}

function colorchange3(){
	blue = Math.floor(Math.random() * 256)
	console.log(blue)
	CHANGECOLOR()
}

function CHANGECOLOR(){
	document.getElementById('maindiv').style.backgroundColor= "rgb("+ red+ ", "+green+ ", "+ blue+")"
	changetitle()
}

function changetitle(){
	document.getElementById("title").innerHTML= "rgb("+ red+ ", "+green+ ", "+ blue+")"
}
