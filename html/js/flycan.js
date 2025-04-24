
$(function(){

	$("#Btn").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#TopMenu").show();
		$("#XXbtn").on("click", CLOSECLOSE );
	}
	
	function CLOSECLOSE(){
		$("#TopMenu").hide();
		$("#XXbtn").off("click");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#TopMenu").removeAttr("style");
		}
	}
	
});

