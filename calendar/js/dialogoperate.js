$('#event1').hide();
$('#event2').hide();
$('#event3').hide();
$('#event4').hide();
$('#event5').hide();
$('#event6').hide();
$('#event7').hide();
$('#event8').hide();

$(document).ready(function(){
	$('.flash').dblclick(function(){
		$('#event1').show();
		$('#tung1').show();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();

	});

	$('.anim').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').show();
		$('#tung2').show();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.prog').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').show();
		$('#tung3').show();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.design').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').show();
		$('#tung4').show();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.autocad').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').show();
		$('#tung5').show();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.robo').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').show();
		$('#tung6').show();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.dip').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').show();
		$('#tung7').show();
		$('#event8').hide();
		$('#tung8').hide();
	});

	$('.webd').dblclick(function(){
		$('#event1').hide();
		$('#tung1').hide();
		$('#event2').hide();
		$('#tung2').hide();
		$('#event3').hide();
		$('#tung3').hide();
		$('#event4').hide();
		$('#tung4').hide();
		$('#event5').hide();
		$('#tung5').hide();
		$('#event6').hide();
		$('#tung6').hide();
		$('#event7').hide();
		$('#tung7').hide();
		$('#event8').show();
		$('#tung8').show();
	});

	$("#tung1").click(function(){
                    					$("#event1").toggle().preventDefault();});

	$("#tung2").click(function(){
                    					$("#event2").toggle().preventDefault();});

	$("#tung3").click(function(){
                    					$("#event3").toggle().preventDefault();});

	$("#tung4").click(function(){
                    					$("#event4").toggle().preventDefault();});

	$("#tung5").click(function(){
                    					$("#event5").toggle().preventDefault();});

	$("#tung6").click(function(){
                    					$("#event6").toggle().preventDefault();});

	$("#tung7").click(function(){
                    					$("#event7").toggle().preventDefault();});

	$("#tung8").click(function(){
                    					$("#event8").toggle().preventDefault();});

	$("#the_lights").fadeTo(1,0);
                    
	$("#login").hide();
	$(".window").hide();
	$(".opened.tunggal").hide();
	$("#turnoff").click(function () {
                $("#the_lights").css({'display' : 'block'});
                $("#the_lights").fadeTo("slow",1);
				$("#startbar").hide();
				$(".calget").hide();
				$(".window").hide();
		   	    $(".icons").hide();
  				   
                });
    $("#soft").click(function () {
                document.getElementById("the_lights").style.display="block";
                $("#the_lights").fadeTo("slow",0.8);
				$("#startbar").hide();
 			    $("#login").fadeIn();
				$(".calget").hide();
				$(".window").hide();
				$(".icons").hide();
                });
    $("#turnon").click(function () {
                document.getElementById("the_lights").style.display="block";
                $("#the_lights").fadeTo("slow",0);
	  			$("#startbar").fadeIn();
                $(".calget").fadeIn();
                $(".opened.tunggal").hide();
                $(".icons").fadeIn();
				$("#login").hide();
                });
                    
    $(".close").click(function(){
    			$(this).parent().parent().hide();
    			$(".opened.tunggal").hide();
                });
                    
    $(".min").click(function(){
      			$(this).parent().parent().hide();});
                   
    $(document).keyup(function(e) {

				if (e.keyCode == 27) { $('.window').hide(); }   // esc
				if (e.keyCode == 13) { 
		  					document.getElementById("the_lights").style.display="block";
		                    $("#the_lights").fadeTo("slow",0);
							$("#startbar").fadeIn();
                      		$(".calget").fadeIn();
                      		$(".opened.tunggal").hide();
                      		$(".icons").fadeIn();
						 	$("#login").hide(); 
						 	}   // enter
						});

});