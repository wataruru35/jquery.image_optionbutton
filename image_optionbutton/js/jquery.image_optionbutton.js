(function( $ ) {

	$.fn.optionButton = function() {
	
		var all = $(this);
		
		$("[selected]").css({"-webkit-filter":"grayscale(0%)","filter":"none"});
		
		all.click(function () {
			
			all.removeAttr("style");
			
			$(this).css({"-webkit-filter":"grayscale(0%)","filter":"none"});
			
			$("[selected]").removeAttr("selected");
			
			$(this).attr("selected","selected");
			
		});
		
	};
	
	
	$.fn.selectedValue = function() {
	
		var val = $("[selected]").attr("val")
	
		return val;
		
	};

})( jQuery );