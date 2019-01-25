var searchbar = $("#searchbar");

searchbar.click(function() {
	$("#search-input").removeClass("searchbar_hidden").addClass("searchbar_active");
	$("#search-link").addClass("hidden");
	$("#shop-bag").addClass("hidden");
});

$(document).mouseup(function(e) {

	if (!searchbar.is(e.target) && searchbar.has(e.target).length === 0) {
		$("#search-input").removeClass("searchbar_active").addClass("searchbar_hidden");
		$("#search-link").removeClass("hidden");
		$("#shop-bag").removeClass("hidden");
	}
});
