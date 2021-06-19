$(function(){
	$('header .nav-btn').on('click',function(){
		$('.nav-box').stop().fadeIn(function(){
			$(this).addClass('animate');
		})
	})
	$('.nav-close').on('click',function(){
		$('.nav-box').stop().fadeOut(function(){
			$(this).removeClass('animate')
		});
	})
	var winTop = $(window).scrollTop();
	if(winTop>0){
		$('header,.sub-nav,.news-page,.about-page').addClass('on');
	}else{
		$('header,.sub-nav,.news-page,.about-page').removeClass('on');
	}
	$(window).on('scroll',function(){
		winTop = $(window).scrollTop();
		if(winTop>0){
			$('header,.sub-nav,.news-page,.about-page').addClass('on');
		}else{
			$('header,.sub-nav,.news-page,.about-page').removeClass('on');
		}
	})

	// $('header .icon-box .item,footer .f-contact .icon-box .item').hover(function(){
	// 	if(window.innerWidth>1024){
	// 		$(this).find('.dialog-box').stop().fadeIn();
	// 	}
	// },function(){
	// 	if(window.innerWidth>1024){
	// 		$(this).find('.dialog-box').stop().fadeOut();	
	// 	}
	// })


	$('.qrcode').on('click',function(){
		var _this = $(this);
		var thisItem = _this.parent();
		if(window.innerWidth<1025){
			if(thisItem.hasClass('on')){
				thisItem.removeClass('on');
			}else{
				thisItem.addClass('on');
			}
		}
	})

});
function indexDelay(selector,time){
	selector.each(function(index,el){
		$(el).css('swiper-animate-delay',(time+.1*index)+'s');
	})
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    if (r != null) return unescape(r[2]); return null; // 返回参数值
}