$(function() {

	$('.contentContainer').hide();

	$('.infoReveal').hide();
	
	// HOVER FOR ADDITIONAL INFO
	$('.info').mouseover(function(){
		$('.infoReveal').fadeIn(1000);
	});
	$('.info').mouseleave(function(){
		$('.infoReveal').fadeOut(750);
	});
	
	// INTRO PAGE STYLES
	$('.intro').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
	});
	$('.intro h1').css({
			'text-aling': 'center'
	});
	
	// NAV HOVERS
	var links = $('.links')
	$(links).mouseover(function(){
		if ($(this).hasClass('sun_link')) {
			$('.sun_link').css('background-color', '#F26522');
		}
		if ($(this).hasClass('mercury_link')) {
			$('.mercury_link').css('background-color', '#C5C7C9');
		} 
		if ($(this).hasClass('venus_link')) {
			$('.venus_link').css('background-color', '#FFC627');
		}
		if ($(this).hasClass('earth_link')) {
			$('.earth_link').css('background-color', '#009BDE');
		}
		if ($(this).hasClass('mars_link')) {
			$('.mars_link').css('background-color', '#ED8258');
		}
		if ($(this).hasClass('jupiter_link')) {
			$('.jupiter_link').css('background-color', '#D8941E');
		}
		if ($(this).hasClass('saturn_link')) {
			$('.saturn_link').css('background-color', '#EBB63B');
		}
		if ($(this).hasClass('neptune_link')) {
			$('.neptune_link').css('background-color', '#0E5FBC');
		}
		if ($(this).hasClass('uranus_link')) {
			$('.uranus_link').css('background-color', '#1BA1E0');
		}
	});
	$(links).mouseleave(function(){
		$(links).css('background-color', '#FFF');
	});
	
	//scrollTo
	$('.sun_link').click(function(){
	
		$('.sunContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$('nav a').removeClass('selected');
		$('.sun_link').addClass('selected');
		$(window).scrollTo('#sunlink', 800, function() {
			$('.sunContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.mercury_link').click(function(){
	
		$('.mercuryContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$('.links').removeClass('selected');
		$('.mercury_link').addClass('selected');
		$(window).scrollTo('#mercurylink', 800, function() {
			$('.mercuryContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.venus_link').click(function(){
		$('.links').removeClass('selected');
		$('.venus_link').addClass('selected');
	
		$('.venusContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#venuslink', 800, function() {
			$('.venusContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.earth_link').click(function(){
		$('.links').removeClass('selected');
		$('.earth_link').addClass('selected');
	
		$('.earthContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#earthlink', 800, function() {
			$('.earthContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.mars_link').click(function(){
		$('.links').removeClass('selected');
		$('.mars_link').addClass('selected');
	
		$('.marsContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#marslink', 800, function() {
			$('.marsContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.jupiter_link').click(function(){
		$('.links').removeClass('selected');
		$('.jupiter_link').addClass('selected');
	
		$('.jupiterContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#jupiterlink', 800, function() {
			$('.jupiterContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.saturn_link').click(function(){
		$('.links').removeClass('selected');
		$('.saturn_link').addClass('selected');
	
		$('.saturnContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#saturnlink', 800, function() {
			$('.saturnContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.neptune_link').click(function(){
		$('.links').removeClass('selected');
		$('.neptune_link').addClass('selected');
	
		$('.neptuneContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#neptunelink', 800, function() {
			$('.neptuneContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});
	$('.uranus_link').click(function(){
		$('.links').removeClass('selected');
		$('.uranus_link').addClass('selected');
	
		$('.uranusContainer').css({
			'width': $(window).width()+"px",
			'height': $(window).height()+"px"
			});
	
		$('.contentContainer').fadeOut(50, function() {
			$(this).css('right', '-50%');
		});
		$(window).scrollTo('#uranuslink', 800, function() {
			$('.uranusContentContainer').show().animate({'right': '0%'}, 1000);
		});
	});

	
	// KEYBOARD COMMANDS
	var planets = ['intro', 'sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus'];
	var current_page = 1;
	$(window).keydown(function(e) {
		if (e.keyCode == 39) {
			if (planets [current_page-1] == 'uranus'){
				current_page = 1
			} else
			current_page++;
		}else if (e.keyCode == 37)
		{
			if (current_page > 1)
				current_page--;
		}
		$('.'+planets[current_page-1]+'_link').click();
	}); 
  	
	// lock scroll position, but retain settings for later
      var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);      
});