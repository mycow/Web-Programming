(function () {
	// Add the click handler for the button
	$("button").click(function(){
		$("#allUpper").html($("#myInput").val().toUpperCase());
		$("#allLower").html($("#myInput").val().toLowerCase());
		$("#redText").css('color', 'red');
		$("#redText").html($("#myInput").val());
		$("#flashyText").addClass("flashy");
		$("#flashyText").html($("#myInput").val().toUpperCase());
	})
})();