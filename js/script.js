window.onload=function(){
	
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	
	var music=document.getElenebtById(music);
	var audio=document.getElementsByTagName("audio")[0];
	
	audio.addEventListener("ended"function(event){
		music.setAttribute("class","");
	},false);
	
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			
		}else{
			dudio.pause();
			this.setAttribute("class","");
		};
	},false);
	
	page1.addEventListener("touchstart",funtion(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false);
};
