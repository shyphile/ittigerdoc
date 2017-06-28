 $(document).ready(function () {
    var isMenuOpen = false;
    if(!$("#menu_container").clearQueue().animate({
        left: '0px'
    })){
        alert('浏览器不支持,请更换浏览器.');
    }
    $("#menu_container").clearQueue().animate({
        left: '0px'
    })
    $("#grey_back").css({ 'opacity': '0.0' });
    $("#grey_back").fadeIn('fast');
    isMenuOpen = true;

    $('.menu_btn').click(function () {
        $("#grey_back").css({ 'opacity': '0.7' });
        if (isMenuOpen == false) {
            $("#menu_container").clearQueue().animate({
                left: '0px'
            })
            $("#grey_back").fadeIn('fast');
            $(this).fadeOut(200);
            isMenuOpen = true;
        }
    });
    $('#grey_back').click(function () {
        if (isMenuOpen == true) {
            $("#menu_container").clearQueue().animate({
                left: '-450px'
            })
            $("#grey_back").fadeOut('fast');
            $(this).fadeOut(200);
            $(".menu_btn").fadeIn(300);
            isMenuOpen = false;
        }
    });
    $('a').click(function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    });
    $('a').attr("target", "frame");
    if ($('a').attr('href') == "http://count.knowsky.com/") {
        $('a').attr('href', "");
    }

    if ($('ol:first').css('list-style-type') != 'none') { /* For IE6/7 only. */
        $('ol ol').each(function(i, ol) {
            ol = $(ol);
            var level1 = ol.closest('li').index() + 1;
            ol.children('li').each(function(i, li) {
                li = $(li);
                var level2 = level1 + '.' + (li.index() + 1);
                li.prepend('<span>' + level2+ '</span>');
            });
        });
    }

    //$('li>a').click(function(){
    //    var iframepage=document.getElementById('iframepage');
    //    setIframeHeight(iframepage);
    //});
});

//  function iFrameHeight() {
//     var ifm = document.getElementById("iframepage");
//     var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
//     if (ifm != null && subWeb != null) {
//         ifm.height = subWeb.body.scrollHeight;
//     }
// }

function displayCount() {
    if ($('#count a').attr('href') == 'http://count.knowsky.com') {
        $('#count a').attr('href', './homePage/homePage.html');
    }
    $('#count').show();
}

// var timer1;
// var timeCount = 0;
// function reinitIframe() 
// {
//     timeCount++;
//     if (timeCount > 100) 
//     {
//         window.clearInterval(timer1);// 停止定时
//     }
//     var iframe = document.getElementById("iframepage");
//     var bHeight = iframe.contentWindow.document.body.scrollHeight;
//     var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
//     var height = Math.min(bHeight, dHeight);
//     iframe.height = height;
// }

// function reinitIframeEND() {
//     timeCount = 0;
//     window.clearInterval(timer1);// 停止定时
//     var iframe = document.getElementById("iframepage");
//     var bHeight = iframe.contentWindow.document.body.scrollHeight;
//     var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
//     var height = Math.min(bHeight, dHeight);
//     iframe.height = height;
//     timer1 = window.setInterval("reinitIframe()", 500); //定时开始
// }

//  // document.domain = "caibaojian.com";
//  function setIframeHeight(iframe) {
//    if (iframe) {
//        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
//        if (iframeWin.document.body) {
//            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
//            alert(iframe.height );
//        }
//    }
// }

