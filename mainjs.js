
function rempre(){
			document.getElementById("inp").value="";
}
var count=0;
function expand(){
	if(count%2==0){
	document.getElementById("more1").innerHTML="Less About Black Clover";
	document.getElementById("more2").src="arrowup.png";
	document.getElementsByClassName("info")[0].style.display="inline";
	document.getElementsByClassName("info")[1].style.display="inline";
	/*var list=document.getElementsByClassName("expeffect");
	for (var i = 0; i <list.length; i++) {
		list[i].style.top+=200px;
	}*/
	}
	else{
	document.getElementById("more1").innerHTML="More About Black Clover";
	document.getElementById("more2").src="arrow.png";	
	document.getElementsByClassName("info")[0].style.display="none";
	document.getElementsByClassName("info")[1].style.display="none";
	/*var list=document.getElementsByClassName("expeffect");
	for (var i = 0; i <list.length; i++) {
		list[i].style.top-=200px;
	}*/
	}
	count++;
}