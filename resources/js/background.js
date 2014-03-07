$( document ).ready(function() {
//	alert("working!");
	$('#blue').click(function(){
		//alert(this.innerText)
		//$('.blueDiv').css("width", "100%")
	});
	$(window).resize(function(){
		checkWindowWidth();
	});
	
});

function checkWindowWidth(){
	width = $(window).width();
	if (width == 800){
		console.log(width);
	}

}

$(window).load(function() {
    $(".flexslider").flexslider({
        animation: "slide",
       // directionNav: false,
        controlsContainer: ".nav",
        manualControls: "nav .navBlock"
    });
});