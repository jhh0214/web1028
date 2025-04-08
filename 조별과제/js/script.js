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
    let currentIndex = 1;
    const totalSlides = 3; // 총 슬라이드 수
    const slideWidth = $(".slide-txt > div").outerWidth();  
    
    // 이미지 업데이트 함수
    function updateImage() {
        // 메인 이미지 업데이트 (현재 인덱스)
        $('.slide-img').css('background', `url('img/img${currentIndex}.jpg')`);
        
        // 미리보기 이미지 업데이트 (다음 슬라이드, 순환)
        let previewIndex = currentIndex + 1;
        if (previewIndex > totalSlides) {
            previewIndex = 1; // 순환
        }
        $('.slide-preview').css('background', `url('img/img${previewIndex}.jpg')`);
    }
    
    // 슬라이드 이전 버튼 클릭
    $('.prev-btn').click(function() {
        currentIndex = currentIndex === 1 ? totalSlides : currentIndex - 1; // 슬라이드 순환
        updateImage();
        $(".move").css({"marginLeft": "-"+slideWidth+"px"});  
        $(".slide-txt > div:last").prependTo(".slide-txt");  
        $(".move").css({"marginLeft": "0"}); 
    });
    
    // 슬라이드 다음 버튼 클릭
    $('.next-btn').click(function() {
        currentIndex = currentIndex === totalSlides ? 1 : currentIndex + 1; // 슬라이드 순환
        updateImage();
        $(".move").css({"marginLeft": "-"+slideWidth+"px"});  
        $(".slide-txt > div:first").appendTo(".slide-txt");  
        $(".move").css({"marginLeft": "0"}); 
    });
    

})


