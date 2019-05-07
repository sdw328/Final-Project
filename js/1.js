let blue=document.getElementById("icon2");
let green=document.getElementById("icon1");
let btn=document.getElementById("btn");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let red=document.getElementById("icon3");
let yellow=document.getElementById("icon4");
let landscapes=document.getElementsByClassName("landscape");
//let landscapes=document.getElementById("landscape");
let streets = document.getElementsByClassName("street");
let portraits = document.getElementsByClassName("portrait");
let pics= document.getElementsByTagName("img");

function clear(){
	for(i=0; i<pics.length; i++){
		pics[i].style.opacity="0.09";
		pics[i].style.transform="scale(1,1)"
		pics[i].style.padding="0%";

}
}

function landscape(){
	clear();
	let landscapes=document.getElementsByClassName("landscape");
		for(i=0; i<landscapes.length; i++){
		landscapes[i].style.opacity="1.0";
		landscapes[i].style.padding="0px 30px 0px 30px";
		landscapes[i].style.transform="scale(1.2,1.2)"
	}	

	//let green=document.getElementById("icon1")
	//green.style.tranform
}

function street(){
	clear();
	let streets=document.getElementsByClassName("street");
		for(i=0; i<streets.length; i++){
		streets[i].style.opacity="1.0";
		streets[i].style.padding="0px 30px 0px 30px";
		streets[i].style.transform="scale(1.2,1.2)"

	}	
}

function portrait(){
	clear();
	let portraits=document.getElementsByClassName("portrait");
		for(i=0; i<portraits.length; i++){
		portraits[i].style.opacity="1.0";
		portraits[i].style.padding="0px 30px 0px 30px";
		portraits[i].style.transform="scale(1.2,1.2)"
	}	
}

function reset(){
	for(i=0; i<pics.length; i++){
		pics[i].style.opacity="1.0";
		pics[i].style.transform="scale(1,1)"
		pics[i].style.padding="0%";
}
}


btn.addEventListener("click", landscape);
btn2.addEventListener("click", street);
btn3.addEventListener("click", portrait);
btn4.addEventListener("click", reset);

