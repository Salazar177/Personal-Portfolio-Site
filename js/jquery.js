$(document).ready(function() {
	$('.flexslider').flexslider(
		{
		    selector: ".slides > li",
			animationLoop: true,
			slideshow: true,
			initDelay: 0,
			slideshowSpeed: 5000,
			controlNav: false,
			directionNav: true,
			animationSpeed: 800,   
		});
	});
	
	
$(document).ready(function() {
 
    //move the image in pixel
    var move = 0;
     
    //zoom percentage, 1.2 =120%
    var zoom = 0;
 
    //On mouse over those thumbnail
    $('.item').hover(function() {
         
        //Set the width and height according to the zoom percentage
        width = $('.item').width() * zoom;
        height = $('.item').height() * zoom;
         
        //Move and zoom the image
        $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
         
        //Display the caption
        $(this).find('div.caption').stop(false,true).fadeIn(200);
    },
    function() {
        //Reset the image
        $(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});    
 
        //Hide the caption
        $(this).find('div.caption').stop(false,true).fadeOut(200);
    });
 
});