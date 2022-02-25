$(document).ready(function () {
  /*Sticky menu*/

  $('.dark').hide();

$(window).on('scroll', function(){
    if($(this).scrollTop() >10){
      $('.sticky-header').addClass('sticky');
      $('.dark').show();
      $('.light').hide();
    }else{
      $('.sticky-header').removeClass('sticky');
      $('.dark').hide();
      $('.light').show();
  }

});

// sticky navbar
	    // // sticky navbar
      //  $('.dark').hide();
	    //   $(window).on('scroll',function() {    
			// 	   var scroll = $(window).scrollTop();
			// 	   if (scroll < 50) {
      //        $(".sticky-header").removeClass("sticky");
      //          $('.dark').show();
      //          $('.light').hide();
			// 	   }else{
      //        $(".sticky-header").addClass("sticky");
      //          $('.dark').hide();
      //          $('.light').show();
			// 	   }
			// });
	
// Mobile Menus JS
	// Mobile Menus JS
	$('#menu').click(function(){
		$('.menu ul').slideToggle()
	})

	$('#menu').on('click', function () {
		$(this).toggleClass('active');
	});
		 
		 
  
  

});
