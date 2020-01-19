
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
function changeimage1(x){
	x.src="rheart.png";
	x.style.height="25px"
	x.style.top="6px";
	x.style.left="10px";
	x.style.cursor="pointer";
}
function changeimage2(x){
	x.src="pinkheart.svg";
	x.style.height="40px";
	x.style.width="25px";
}
function changeimage3(x){
	
	x.style.height="342px"
	x.style.width="252px";
	x.style.cursor="pointer";
	x.transition="height 2s,width 2s";

}
function changeimage4(x){
	
	x.style.height="322px"
	x.style.width="232px";
}
