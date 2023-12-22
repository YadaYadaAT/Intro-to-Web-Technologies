
var aida=document.getElementsByClassName('PopUpClass');
var skata=function(){
	var pro=document.createElement("div");
	var info=this.getAttribute('data-PopUpMessage');
	pro.id="dafuc"+this.getAttribute('data-PopUpnumber');	
	pro.innerHTML=info+"<div class='daPopUpArrow'></div>";
	pro.className='daPopUp';
	this.appendChild(pro);
	var heightOfNewDiv=pro.offsetHeight/2;
	var heightOfThis=(this.offsetHeight/2)-heightOfNewDiv;
	var locationTop=this.offsetTop+heightOfThis;
	var locationLeft=this.offsetLeft+this.offsetWidth+25;
	document.getElementById(pro.id).style.top=locationTop+"px";
	document.getElementById(pro.id).style.left=locationLeft+"px";
	document.getElementById(pro.id).style.opacity="1";
	var locationOfArrow=heightOfNewDiv-12;
	document.getElementById(pro.id).childNodes[1].style.top=locationOfArrow+"px";
}


var aposkata=function(){
	var Tinos=this.getAttribute('data-PopUpnumber');
	var prepareId="dafuc"+Tinos
document.getElementById(prepareId).remove();
}



for (var i=0;i<aida.length;i++){
	aida[i].setAttribute("data-PopUpnumber",i);
}

for (var i=0;i<aida.length;i++){
	aida[i].addEventListener('mouseover',skata,false);
}
for (var i=0;i<aida.length;i++){
	aida[i].addEventListener('mouseout',aposkata,false);
}