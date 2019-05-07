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
var ball3=document.getElementById('ball');
var nav=document.getElementsByClassName("link");
ball3.style.opacity="0";

function storm(){
	pic1.style.transform="scale(1.1)";
	pic2.style.transform="scale(1)";
	pic3.style.transform="scale(1)";
	pic1.style.opacity="1";
	pic2.style.opacity="0";
	pic3.style.opacity="0";
	ball3.style.opacity="0";
	body.style.backgroundColor="#273259";
	body.style.backgroundImage = "url('images/storm.gif')" /*gif taken from giphy.com, I do not take credit for it*/
	body.style.backgroundSize = "100vw";
	stormaudio.play();
	nav[0].style.color="white";
	nav[1].style.color="white";
	nav[2].style.color="white";
	nav[3].style.color="white";
}

function storm2(){
	stormaudio.pause();
	ball3.style.opacity="0";
	nav[0].style.color="white";
	nav[1].style.color="white";
	nav[2].style.color="white";
	nav[3].style.color="white";
}


function fire(){
	pic2.style.transform="scale(1.1)";
	pic1.style.transform="scale(1)";
	pic3.style.transform="scale(1)";
	pic2.style.opacity="1";
	pic1.style.opacity="0";
	pic3.style.opacity="0";
	ball3.style.opacity="0";
	body.style.backgroundColor="#960919";
	pic2.style.transform

	body.style.backgroundImage = "url('images/fire.gif')"/*gif taken from giphy.com, I do not take credit for it*/
	body.style.backgroundSize = "50vh";
	fireaudio.play();
	nav[0].style.color="white";
	nav[1].style.color="white";
	nav[2].style.color="white";
	nav[3].style.color="white";
}

function fire2(){
	fireaudio.pause();
	ball3.style.opacity="0";
	nav[0].style.color="white";
	nav[1].style.color="white";
	nav[2].style.color="white";
	nav[3].style.color="white";
}

function ball(){
	pic3.style.transform="scale(1.1)";
	pic1.style.transform="scale(1)";
	pic2.style.transform="scale(1)";
	pic3.style.opacity="1";
	pic1.style.opacity="0";
	pic2.style.opacity="0";
	ball3.style.opacity="1";
	body.style.backgroundColor="#516868";
	body.style.backgroundImage = "url('images/basketball.gif')"/*gif taken from giphy.com, I do not take credit for it*/
	basketballaudio.play();
	nav[0].style.color="black";
	nav[1].style.color="black";
	nav[2].style.color="black";
	nav[3].style.color="white";

}

function ball2(){
	basketballaudio.pause();
	ball3.style.opacity="1";
	nav[0].style.color="black";
	nav[1].style.color="black";
	nav[2].style.color="black";
	nav[3].style.color="white";
}


button1.addEventListener("mouseenter", storm);
button1.addEventListener("mouseout", storm2);
button2.addEventListener("mouseenter", fire);
button2.addEventListener("mouseout", fire2);
button3.addEventListener("mouseenter", ball);
button3.addEventListener("mouseout", ball2);



