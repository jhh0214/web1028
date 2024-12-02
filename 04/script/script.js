// Javascript

$(document).ready(function () {

   $('#wrap').fullpage({
      // 각 페이지 배경색
      sectionsColor: ['transparent', '#eee', 'cadetblue', '#ccc'],
      // 페이지 이동 내비게이션
      navigation: true,
      navigationTooltips: ['About Hyundai', 'Model', 'Event', 'Customer Service'],
      showActiveTooltip: true,
      // 슬라이드 메뉴
      slidesNavigation: true,
      loopHorizontal: false,
      // GNB
      menu: '#menu',
      // 현재 페이지에 떠난 이후
      onLeave: function (origin, destination, direction) {
         if (origin.index == 0) {
            // vid.pause();
            $('.s1').css({backgroundColor:'yellow'});
         }
      },
      // 현재 페이지에 도착한 이후
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 0) {
            // vid.play();
            $('.s1').css({backgroundColor:'orange'});
         }
      },
      onLeave: function (origin, destination, direction) {
         if (origin.index == 2) {
            $('.s3 p').animate({ opacity: 0, left: -100 }, 1000);
         }
      },
      // 현재 페이지에 도착한 이후
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 2) {
            $('.s3 p').animate({ opacity: 1, left: '50%' }, 500);
         }
      },
   });

   // 1 페이지 - 회사 소개 비디오 재생
   var vid = $('video').get(0);
   vid.load();

   $('.s1').mouseenter(function(){
      vid.play();
   });
   $('.s1').mouseleave(function(){
      vid.pause();
   });


   // 2 페이지 - 전체모델 탭 메뉴 형식
   $('#tab>ul>li').click(function () {
      // 버튼 클리 시 해당 버튼의 숫자를 i에 저장
      var i = $(this).index();
      // 버튼 클릭 시 div(내용)를 모두 숨기고, 클릭 한 div만 보여준다.
      $('#tab div').css({ display: 'none' })
      $('#tab div').eq(i).css({ display: 'block' });
      // 라인 처리
      $('#tab>ul>li').css({ backgroundColor:'#444', zIndex:0,color:'#fff' });
      $(this).css({ backgroundColor: '#fff', zIndex: 1, color:'#444' });
   });

   // 탭 메뉴 내용을 클릭 시
   $('#tab div:eq(0) li').click(function () {
      var num = $(this).index();
      // 새 창으로 링크
      if (num == 0) {
         window.open('about:blank').location.href = "http://widesign.dothome.co.kr";
      } else if (num == 1) {
         window.open('about:blank').location.href = "http://hurom.dothome.co.kr";
      } else if (num == 2) {
         window.open('about:blank').location.href = "http://monami3.dothome.co.kr";
      } else {
         window.open('about:blank').location.href = "http://ikea.dothome.co.kr";
      }
   });
   $('#tab div:eq(1) li').click(function () {
      var num = $(this).index();
      // 새 창으로 링크
      if (num == 0) {
         window.open('about:blank').location.href = "http://widesign.dothome.co.kr";
      } else if (num == 1) {
         window.open('about:blank').location.href = "http://hurom.dothome.co.kr";
      } else if (num == 2) {
         window.open('about:blank').location.href = "http://monami3.dothome.co.kr";
      } else {
         window.open('about:blank').location.href = "http://ikea.dothome.co.kr";
      }
   });

   // 4 페이지 - 고객서비스
   var mySlider = $('.bxslider').bxSlider({
      // 슬라이드 크기
      slideWidth: 400,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 10,
      captions: true,
      // 자동 슬라이드
      auto: true,
      // 이미지에 마우스 호버 시 슬라이드 정지
      autoHover: true,
      // 좌우 버튼
      controls: false,
      // 하단 중앙 페이저 버튼
      pager: false,
      // 슬라이딩 되기 전에 autoPager 함수 호출
      onSlideBefore: function () { autoPager(); }
   });

   // 좌우 버튼
   $('.pBtn').click(function () {
      mySlider.goToPrevSlide();
      autoPager();
      return false;
   });
   $('.nBtn').click(function () {
      mySlider.goToNextSlide();
      autoPager();
      return false;
   });

   // 페이저 버튼
   $('#mainImg .pager li').click(function () {
      var num = $(this).index();
      mySlider.goToSlide(num);
      return false;
   });

   // 페이저 색 변경
   function autoPager() {
      $('#mainImg .pager li').removeClass('active');
      var current = mySlider.getCurrentSlide();
      $('#mainImg .pager li').eq(current).addClass('active');
   }

});