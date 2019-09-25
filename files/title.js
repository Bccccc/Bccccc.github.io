if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "/ ", "| ", "&#92; ", "4", "4/ ", "4| ", "4&#92; ", "40/ ", "40| ", "40&#92; ", "404", "404/ ", "404| ", "404&#92; ", "404b", "404b/ ", "404b| ", "404b&#92; ",  "404bc", "404bc/ ", "404bc| ", "404bc&#92; ",  "404bc.", "404bc./ ", "404bc.| ", "404bc.&#92; ","404bc.c", "","404bc.c/ ", "","404bc.c| ", "","404bc.c&#92; ", "","404bc.cc", "404bc.cc/ ", "404bc.cc| ", "404bc.cc#92; ",];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}