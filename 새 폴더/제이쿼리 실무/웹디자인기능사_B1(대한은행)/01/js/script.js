
$(document).ready(function(){
	$(".slide_btn").click(function(){
		st();
	});
	$(".navi > li").mouseover(function(){
		$(".submenu").stop().slideDown(500)
	});
	$(".navi > li").mouseout(function(){
		$(".submenu").stop().slideUp(500);
	});
	$(".notice li:first").click(function(){
		$("#modal").addClass("active");
	});
	$(".btn").click(function(){
		$("#modal").removeClass("active");	
	});
	$(".tabmenu > li > a").click(function(){
		$(this).parent().addClass("active")
				.siblings().removeClass("active");
	});
	/**
	var aa = setInterval(function(){
		$(".slidelist").animate({"marginLeft":"-1200px"},function(){
			$(".slidelist a:first").appendTo(".slidelist");
			$(".slidelist").css({"marginLeft":"0"});
		});
	}, 3000);
	$(".slide_btn").click(function(){
		clearInterval(aa);
	});
	**/
		var cnt = 1;
		function st(){
		cnt++;
		if(cnt%2 == 1){
			var aa = setInterval(function(){
				$(".slidelist").animate({"marginLeft":"-1200px"},function(){
					$(".slidelist a:first").appendTo(".slidelist");
					$(".slidelist").css({"marginLeft":"0"});
				});
			},3000)
		}
		else {			
		clearInterval(aa);
			}
	}

});
