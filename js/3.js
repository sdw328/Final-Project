var images = document.getElementsByClassName("image");
var button= document.getElementById("randomize");
// var randomnum=Math.floor(Math.random() * 35)+1;

function random(){
	for (i=0;i<images.length;i++){
		var randomnum=Math.floor(Math.random() * 35)+1;
		images[i].src = "images/"+randomnum+".jpg";
	}
}

button.addEventListener("click", random);





