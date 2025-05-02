$(document).ready(function() {

	$("#main-menu li").mouseover(function(){
        $(this).find(".sub-menu").stop().
		slideDown();
		$(this).find(".sub-bar").stop().
		addClass("sub-act");
	});

	$("#main-menu").mouseout(function(){
        $(this).find(".sub-menu").stop().slideUp();
		$(this).find(".sub-bar").stop().removeClass("sub-act");
	});

	$("#trigger").click(function(event){
		event.preventDefault();
		$("#main-menu").toggleClass("main-act");
		$(this).toggleClass('acive');
	})

	$(window).scroll(function(){
        var value = $(window).scrollTop();

        if (value > 350){
            $('header').addClass('dark');
        } else {
            $('header').removeClass('dark');
        }
    });


    /*섹션 02*/
    let titles = ["점핏", "리버스", "인재풀"];

    let currentIndex = 1;
    const totalSlides = 3;
    const slideWidth = $(".move").outerWidth();  
    
   
    function updateImage() {
        $('.slide-img').css('background-image', `url('img/img${currentIndex}.jpg')`);
        let previewIndex = currentIndex + 1;
        if (previewIndex > totalSlides) {
            previewIndex = 1;
        }
        $('.slide-preview').css('background-image', `url('img/img${previewIndex}.jpg')`);
    }
    
  // 슬라이드 이전 버튼 클릭
$('.prev-btn').click(function () {
    currentIndex = currentIndex === 1 ? totalSlides : currentIndex - 1;
    updateImage();
    $('.slide-title>h4').text(titles[currentIndex - 1]);

    $(".txt-list > div:last").prependTo(".txt-list");
    $(".txt-list").css({ "marginLeft": "-" + slideWidth + "px" });
    $(".txt-list").stop().animate({ "marginLeft": "0px" }, 500);
});

    
    // 슬라이드 다음 버튼 클릭
    $('.next-btn').click(function () {
        currentIndex = currentIndex === totalSlides ? 1 : currentIndex + 1;
        updateImage();
        $('.slide-title>h4').text(titles[currentIndex - 1]);
        $(".txt-list").stop().animate({ "marginLeft": "-" + slideWidth + "px" }, 500, function () {
            $(".txt-list > div:first").appendTo(".txt-list");
            $(".txt-list").css({ "marginLeft": "0" });
        });
    });
    
    
    let startX = 0;
    
    $('.slide-wrap').on('mousedown touchstart', function (e) {
        startX = e.pageX || e.originalEvent.touches[0].pageX;
    });
    
    $('.slide-wrap').on('mouseup touchend', function (e) {
        let endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        let diffX = endX - startX;
    
        if (Math.abs(diffX) > 20) { // 드래그 방향 판단
            if (diffX > 0) {
                $('.prev-btn').trigger('click');  // 오른쪽 드래그 → 이전
            } else {
                $('.next-btn').trigger('click');  // 왼쪽 드래그 → 다음
            }
        }
    });
    
    
    // 아울캐로셀
    $('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: { items: 1 },
			750: { 
				items: 2,
				margin: 30
			},
			1150: {
				items: 3,
				nav: true,
				loop: false,
				margin: 30
			},
			1550: {
				items: 4,
				nav: true,
				loop: false,
				margin: 30
			}
		}
	});
})


