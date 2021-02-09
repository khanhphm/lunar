$(document).ready(function() {
	const secondHand = document.querySelector(".sc");
	const hourHand = document.querySelector(".hr");
	const minHand = document.querySelector(".mn");
	function setDate() {
		const now = new Date();
		const second = now.getSeconds();
		const secondsDegrees = second / 60 * 360;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		const hours = now.getHours();
		const hoursDegrees = hours / 12 * 360;
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
		const mins = now.getMinutes();
		const minDegrees = mins / 60 * 360;
		minHand.style.transform = `rotate(${minDegrees}deg)`;
	}


	var y = setInterval(setDate, 1000);
	$(".countdown").hide();
	$(".count").hide();
  	var countDownDate = new Date("2021 Feb 11 23:59:43").getTime();
  	var sayTime = new Date("2021 Feb 11 23:59:50").getTime();
  	var songTime = new Date("2021 Feb 11 23:59:45").getTime();
  	var audio = new Audio("countdownsound.mp3");
  	var newYearTime = new Date("2021 Feb 12 00:00:00").getTime();
  	var song = new Audio("song.mp3");
  // Update the count down every 1 second
  	var x = setInterval(function() {
  		
	    // Get today's date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now and the count down date
	    var distance = countDownDate - now;

	    if((songTime-now)<=0 && (songTime-now)>-950){
	    	console.log("song");
	    	song.play();
	    }
	      if ((distance <= 0) && ((newYearTime-now)>=-300)) {
	      	
	      	clearInterval(y);
	      	$('.au').remove();
	      	$('.slide').remove();
	        change();
	      	
	      }
	      if(((newYearTime-now)<=0) ){
	      	
	      	var txt1 = '<div class="he">Chúc Mừng Năm Mới!</div>';
	      	$(".cover").append(txt1);
	      	clearInterval(x);
	      	$(".count").hide(500);
	      	$(".count").remove(500);
	      	$(".time").remove();
	      	$(".countdown").show();
	      	Run();
	      }
	      if(now-(now%1000)==sayTime){
        	
        	audio.play();
      	  }
  	}, 1000);
});

function change(){
	console.log("call change();");
   	$(".time").animate({
   		opacity: "0"},
   		500, function() {
   		
   		$(".time").hide(function(){
   			$(".countdown").show("slow",function(){
   				$(".count").show(500);
   			});
   		});
   	});
   	
	
	 	

}



