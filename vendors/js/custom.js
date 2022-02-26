$(document).ready(function () {
  /*Sticky menu*/
	$('.cross').click(function(){
		 $('#my-add').hide();
	});
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


	
// Mobile Menus JS
	// Mobile Menus JS
	$('#menu').click(function(){
		$('.menu ul').slideToggle()
	})

	$('#menu').on('click', function () {
		$(this).toggleClass('active');
	});
		 
		 
  // scroll bar use
  // scroll bar use
  // scroll bar use
$('.scroll-bar a').click(function(){
		$('html,body').animate({
			'scrollTop':0
		},200);
		return false;
	});
  $(window).scroll(function(){
		 
		 if($(window).scrollTop() > 200 ){
			 $('.scroll-bar a').fadeIn(2000);
		 }
		 else{
			  $('.scroll-bar a').fadeOut(2000);
		 }
		 
	 });

});
