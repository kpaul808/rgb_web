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

function changeRed(){
	document.getElementById("red").innerHTML = "Red is "+document.getElementById("Redslide").value
	console.log("Redval="+document.getElementById("Redslide").value)
	changediv()
}

function changeGreen(){
	document.getElementById("green").innerHTML = "Green is "+document.getElementById("Greenslide").value
	console.log("Greenval="+document.getElementById("Greenslide").value)
	changediv()
}

function changeBlue(){
	document.getElementById("blue").innerHTML = "Blue is "+document.getElementById("Blueslide").value
	console.log("Blueval="+document.getElementById("Blueslide").value)
	changediv()
}

function changediv(){
	document.getElementById('slidecolor').style.backgroundColor= "rgb("+ document.getElementById("Redslide").value+ ", "+document.getElementById("Greenslide").value+ ", "+ document.getElementById("Blueslide").value+")"
}