var link1= document.getElementById('link1');
var link2= document.getElementById('link2');
var link3= document.getElementById('link3');

let colors=["red", "blue", "green", "pink", "orange", "purple", "navy", "yellow"];

let counter=0

function wide(){
	link1.style.letterSpacing = "15px";
	let num=Math.floor(Math.random() * 9);
	let color=colors[num];
	link1.style.color=color;
	link1.style.fontSize="80px";
}

function close(){
	link1.style.letterSpacing = "0px";
	link1.style.color="white";
	link1.style.fontSize="60px";
}

function wide2(){
	link2.style.letterSpacing = "15px";
	let num=Math.floor(Math.random() * 8);
	let color=colors[num];
	link2.style.color=color;
	link2.style.fontSize="100px";
}

function close2(){
	link2.style.letterSpacing = "0px";
	link2.style.color="white";
	link2.style.fontSize="60px";
}

function wide3(){
	link3.style.letterSpacing = "15px";
	let num=Math.floor(Math.random() * 8);
	let color=colors[num];
	link3.style.color=color;
	link3.style.fontSize="100px";
}

function close3(){
	link3.style.letterSpacing = "0px";
	link3.style.color="white";
	link3.style.fontSize="60px";
}


link1.addEventListener("mouseenter", wide);
link1.addEventListener("mouseout", close);
link2.addEventListener("mouseenter", wide2);
link2.addEventListener("mouseout", close2);
link3.addEventListener("mouseenter", wide3);
link3.addEventListener("mouseout", close3);

