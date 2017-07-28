$(document).ready(function () {
	$('img').load(function(){ //子网页图片 加载完成后 调用父窗口的方法来调整iframe高度
		var height=$(document.body).height();
		parent.adjustIframeHeight(height);
	});

	$('.gif').each(function () {
		$(this).gif();
	});
	
});