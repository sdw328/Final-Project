var pic1=document.getElementById("pic1");
var pic2=document.getElementById("pic2");
var pic3=document.getElementById("pic3");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var body=document.getElementById("body");
var stormaudio = document.getElementById("stormaudio");
var fireaudio = document.getElementById("fireaudio");
var basketballaudio = document.getElementById("dribble");

function storm(){
	pic1.style.transform="scale(1.1)";
	pic2.style.transform="scale(1)";
	pic3.style.transform="scale(1)";
	pic1.style.opacity="1";
	pic2.style.opacity="0";
	pic3.style.opacity="0";
	body.style.backgroundColor="#273259";
	body.style.backgroundImage = "url('images/storm.gif')"
	body.style.backgroundSize = "100vw";
	stormaudio.play();
}

function storm2(){
	stormaudio.pause();
}


function fire(){
	pic2.style.transform="scale(1.1)";
	pic1.style.transform="scale(1)";
	pic3.style.transform="scale(1)";
	pic2.style.opacity="1";
	pic1.style.opacity="0";
	pic3.style.opacity="0";
	body.style.backgroundColor="#960919";
	pic2.style.transform

	body.style.backgroundImage = "url('images/fire.gif')"
	body.style.backgroundSize = "50vh";
	fireaudio.play();
}

function fire2(){
	fireaudio.pause();
}

function ball(){
	pic3.style.transform="scale(1.1)";
	pic1.style.transform="scale(1)";
	pic2.style.transform="scale(1)";
	pic3.style.opacity="1";
	pic1.style.opacity="0";
	pic2.style.opacity="0";
	body.style.backgroundColor="#516868";
	body.style.backgroundImage = "url('images/basketball.gif')"
	basketballaudio.play();
}

function ball2(){
	basketballaudio.pause();
}


button1.addEventListener("mouseenter", storm);
button1.addEventListener("mouseout", storm2);
button2.addEventListener("mouseenter", fire);
button2.addEventListener("mouseout", fire2);
button3.addEventListener("mouseenter", ball);
button3.addEventListener("mouseout", ball2);



