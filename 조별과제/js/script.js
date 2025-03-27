$(document).ready(function(){
    // 네비게이션 
	$(".menu > li").mouseover(function(){
		$(".sub-menu").stop().slideDown(300);
        $("header").stop().animate({height: "165px"},300);
	});
	$(".menu > li").mouseout(function(){
		$(".sub-menu").stop().slideUp(300);
        $("header").stop().animate({height: "70px"},300);
	});

    var prevScroll = $(window).scrollTop(); 
    var didScroll = false; 
    var header = $("header"); 

    // 헤더 
    $(window).scroll(function() {
        didScroll = true; 
    });

    setInterval(function() {
        if (didScroll) {
            var currentScroll = $(window).scrollTop(); 

            if (currentScroll > prevScroll) {
                header.stop().slideUp(200);  
            } else {
                header.stop().slideDown(200); 
            }

            prevScroll = currentScroll; 
            didScroll = false; 
        }
    }, 100);
});
