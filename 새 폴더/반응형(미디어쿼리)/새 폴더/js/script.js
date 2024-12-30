$(function () {
			var trigger = $('#trigger');
			var menu = $('nav ul');
			$(trigger).on('click', function (a) {
				a.preventDefault();
				menu.slideToggle();
			});
			$(window).resize(function () {
				var w = $(window).width();
				if (w > 320 && menu.is(':hidden')) {
					menu.removeAttr('style');
				}
			});
		});