$(document).ready(function() {
      AOS.init({
        easing: 'ease',
		duration: 1000,
		offset:10,
		once: false,
		mirror: true,
      });
});
/////////Tabs
$(document).ready(function(){
	$(".tabs_container li a").click(function(e) {
		e.preventDefault();
		// Active state for tabs
		$(".tabs_containers li a").removeClass("active");
		$(this).addClass("active");
		
		// Active state for Tabs Content
		$(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(500);
		$(this.rel).fadeIn(500).addClass("tab_content_active");
		
	});	
  
  });