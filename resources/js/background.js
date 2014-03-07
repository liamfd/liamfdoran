$(window).load(function() {
	$("#content-slider").flexslider({
        animation: "slide",
        directionNav: false,
        animationDuration:2,
        controlsContainer: ".nav",
        manualControls: "nav .navBlock",
        sync:"#background-slider",
      //  animationLoop:false,
      //  asNavFor:'#background-slider',
        slideshow:false
    });
    $("#background-slider").flexslider({
       // initDelay:5000,
        animation:'slide',
        animationDuration:2,
       // animationLoop:false, //needed to sync properly, otherwise don't move same
        directionNav: false,
        slideshow: false
    });

});
/*
var children_slides;

$(window).load(function() {
    /** 
    * Create the children flexsliders. Must be array of jquery objects with the
    * flexslider data. Easiest way is to place selector group in a var.
    */
  /*  children_slides = $('.flexslider_children').flexslider({
      'slideshow': false, // Remove the animations
      'controlNav' : false, // Remove the controls
      'animation': "slide"
    });

    /** 
    * Set up the main flexslider
    */
  /*  $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        controlsContainer: ".nav",
        manualControls: "nav .navBlock",
      // Call the update_children_slides which itterates through all children slides 
      'before' : function(slider){ // Hijack the flexslider
        update_children_slides(slider.animatingTo);
      }
    });

    /** 
    * Method that updates children slides
    * fortunately, since all the children are not animating,
    * they will only update if the main flexslider updates. 
    */
 /*   function update_children_slides (slide_number){
      // Iterate through the children slides but not past the max
      for (i=0;i<children_slides.length;i++) {
        // Run the animate method on the child slide
        $(children_slides[i]).data('flexslider').flexAnimate(slide_number);
      }
    }
});
*/