$(document).ready(function () {
	$('.gif').each(function () {
		$(this).gif();
	});

	$('img').load(function(){
		var height=$(document.body).height();
		parent.adjustIframeHeight(height);
	});
});