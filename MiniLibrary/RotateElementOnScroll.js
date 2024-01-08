var i=true;/*Prevent multiuse of Function because 1 scroll brings 40 reuse of window.onscroll*/
var destroy;
 	window.onscroll=function(){NGU()};

 function NGU(){if (!document.hidden){
 		if (i==true){
 	
	document.getElementById("leftBlackWing").classList.add("leftBlackWingMove");/*The added Class has css keyframe animation in*/
	document.getElementById("rightBlackWing").classList.add("rightBlackWingMove");
	i=false;
	destroy=setTimeout(function(){
		
document.getElementById("leftBlackWing").classList.remove("leftBlackWingMove");
	document.getElementById("rightBlackWing").classList.remove("rightBlackWingMove");

i=true;/*Reset the var so it can be used after the 150 milisec delay*/
window.onscroll.stopPropagation();
clearTimeout(destroy);
		 },550);	}	    
	}
	
	}			






