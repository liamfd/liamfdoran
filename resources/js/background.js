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
	$("#content-slider").flexslider({
        animation: "slide",
        directionNav: false,
        animationDuration:2,
        controlsContainer: ".nav",
        manualControls: "nav .navBlock",
        asNavFor:'#background-slider',
        slideshow:false
    });
    $("#background-slider").flexslider({
        sync:"#content-slider",
        animationDuration:2,
        controlNav:false,
        directionNav: false,
        slideshow: false
    });

});