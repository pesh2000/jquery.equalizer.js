(function($) {
	$.fn.equalHeights = function(minHeight, maxHeight) {
		var tallest = (minHeight) ? minHeight : 0;
		this.each(function() {
			$(this).css("height","auto");
		});
		this.each(function() {
			if($(this).outerHeight(true) > tallest) {
				tallest = $(this).outerHeight(true);
			}
		});
		if((maxHeight) && tallest > maxHeight) {
			tallest = maxHeight;
		}
		return this.each(function() {
			$(this).height(tallest);
		});
	};
})(jQuery);