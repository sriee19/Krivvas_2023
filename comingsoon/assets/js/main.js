$(document).ready(function(){
	"use strict";
	function footerFixed(){
		var topRow = parseInt($('#wrapper').css('padding-top'),10)+$('.logo-row').outerHeight();
		var bottomRow = parseInt($('#wrapper').css('padding-bottom'),10)+$('#wrapper .footer').outerHeight()+parseInt($('#wrapper .footer').css('margin-top'),10)+parseInt($('#wrapper .footer').css('margin-bottom'),10);

		var topBottomHeight = topRow+bottomRow;

		var middleAreaHeight = window.innerHeight-topBottomHeight

		var middleHeight = $('.middle-area').outerHeight();
		
		if(middleHeight > middleAreaHeight){
			$('#wrapper .footer').removeClass('fixed');
			$('.middle-area').removeClass('setMiddle');
			
		}else{
			$('#wrapper .footer').addClass('fixed');
			$('.middle-area').addClass('setMiddle');
			
		}
	}
	footerFixed()

	$(window).resize(function(e){
		footerFixed();
	})

	$(document).on('submit', '#news', function(e) {
		e.preventDefault();	
			$('#wrapper .subscribe form .input-group #submit i').removeClass('fi flaticon-check');
			$('#wrapper .subscribe form .input-group #submit i').addClass('fa fa-spinner fa-spin');
			$.ajax({
				url : 'mail.php',
				type : 'post',
				data : $(this).serialize(),
				success : function(data) {
					$('#wrapper .subscribe form .input-group #submit i').addClass('fi flaticon-check');
					$('#wrapper .subscribe form .input-group #submit i').removeClass('fa fa-spinner fa-spin');
					$('.subscribe .success_msg').html("<p class='alert alert-success'><strong>Your Request was successfully sent.</strong> Thank you!</p>");
			},
			error : function(xhr, err) {
				$('#wrapper .subscribe form .input-group #submit i').addClass('fi flaticon-check');
				$('#wrapper .subscribe form .input-group #submit i').removeClass('fa fa-spinner fa-spin');
				$('.subscribe .success_msg').html("<p class='alert alert-danger'>Oops!! An error occurred.</p>");
			}
		});
		return false;
	});
});

(function($){

	"use strict";

	/* Demo Slideshow */
	
	$("#slideshow > div:gt(0)").hide();
	var wait=false;
	setInterval(function() { 
		if(wait){
			wait=false;
			return false;
		}
		$(".tab-pane").fadeOut();
		var active=$(".tab-pane.active");
		var id=active.next().attr("id"); 
		if(active.is(":last-child"))
		{
			active.removeClass("active");
			$(".tab-pane:first-child").addClass("active").fadeIn();
			id=$(".tab-pane:first-child").attr("id"); 
		}else 
		{
		active.removeClass("active").next().addClass("active").fadeIn();
		}
		$('.tab-nav').children().removeClass("active");
		$('a[href="#'+id+'"]').parent("li").addClass("active");
	},  5000);

	$(document).on('click', '.tab-nav a', function(e) {
		var $_this=$(this);
		var id=$_this.attr("href").split("#");
		$('.tab-pane').fadeOut();
		$("#"+id[1]).addClass("active").fadeIn();
		$_this.addClass('active');	
		wait=true;
	});

	var end = $('.countdown').data('end');
	var date = new Date(end.replace(/-/g,"/"));
	var sec = (date.getTime() - $.now())/1000;
	
	/* Countdown Activation */
	$('.countdown').ClassyCountdown({
		theme: "flat-colors",
		end: $.now() + sec,
		labelsOptions: {
			lang: {
				days: 'DAYS',
				hours: 'hours',
				minutes: 'mins',
				seconds: 'secs'
			},
			style: 'font-size:20px; text-transform:uppercase; font-family: Roboto; font-weight: 400;'
		},
		style: {
			days: {
				gauge: {
					thickness: 0.22,
					bgColor: "rgba(22, 34, 0, 0.8)",
					fgColor: "#a4ff00",
					fgLast: "#bafc00",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Roboto\';font-weight:400;color:#fff;font-size: 60px;'
			},
			hours: {
				gauge: {
					thickness: 0.22,
					bgColor: "rgba(12, 40, 40, .8)",
					fgColor: "#65f9ed",
					fgLast: "#24cad9",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Roboto\';font-weight:400;color:#fff;font-size: 60px;'
			},
			minutes: {
				gauge: {
					thickness: 0.22,
					bgColor: "rgba(52, 9, 20, .8)",
					fgColor: "#ff1415", 
					fgLast: "#fd08a8",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Roboto\';font-weight:400;color:#fff;font-size: 60px;'
			},
			seconds: {
				gauge: {
					thickness: 0.22,
					bgColor: "rgba(39, 28, 1, .8)",
					fgColor: "#ffbf00",
					fgLast: "#ff6e00",
					lineCap: 'round'
				},
				textCSS: 'font-family:\'Roboto\';font-weight:400;color:#fff;font-size: 60px;'
			}
		}
	});
	
	/* Tooltip Activation */
	$('[data-toggle=tooltip]').tooltip();
	
	/* Open Modal */
	$(document).on('click', '.page-link', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');

		$('body').addClass('hidden')
		
		$(target).removeClass('fadeOutUp').addClass('fadeInDown').css('visibility', 'visible');
		$('#home').addClass('blur');
		
//		var w = $(window).width();
//		
//		if(w > 992){
//			$('.page-link').css('left', '0');
//			$('.page-link.right').css({'right': '0', 'left': 'auto'});	
//		}
	});
	
	/* Closing Modal */
	$(document).on('click','.closeModal',function(e){
		e.preventDefault();
		$('#home').removeClass('blur');
		$(this).parents('.otherpage').removeClass('fadeInDown').addClass('fadeOutUp').css('visibility', 'hidden');
		$('body').removeClass('hidden')
	});
	
		$(document).on('keyup', '#input', function(e) {
		// console.log(e.keyCode);
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if(!pattern.test($(this).val()))
        {
        	$('#submit').removeClass('success').addClass('error');
        }
        else{
        	$('#submit').removeClass('error').addClass('success');
        }
	});
		
})(jQuery);
