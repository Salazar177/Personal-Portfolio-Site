$(document).ready(function() {
	$('#projectsGrid').isotope();
	
	$('#filters a').click(function(e) {
        e.preventDefault();
		var to_filter = $(this).attr('data-filter');
		if(to_filter == '.all') {
            $('#projectsGrid').isotope({filter: '.project'});
		} else {
            $('#projectsGrid').isotope({filter: '.'+ to_filter});
		}
	});


});

$(function(){
  $("#filters a").click(function(){
    $(this).parent().addClass('selected'). // <li>
      siblings().removeClass('selected');
  });
});
