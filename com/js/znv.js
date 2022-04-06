/*
 *  ZEN & VENTURES
 *  Moon Yuen Hee(Jenny)
 *  2015.05.15
 */


//nav
$(function() {
	$menu = $("#nav dl");

	$menu.mouseover(function () {
		$(this).find("dt").addClass("on");
		$(this).find("dd").stop().slideDown();
	});

	$menu.mouseleave(function(){
		$(this).find("dt").removeClass("on");
		$(this).find("dd").stop().slideUp();
	});

	var numbering = function (){
		$("#nav dl.on").mouseover(function () {
			$(this).find("dt").addClass("on");
			$(this).find("dd").stop().slideDown();
		});
		$("#nav dl.on").mouseleave(function () {
			$(this).find("dt").addClass("on");
			$(this).find("dd").stop().slideDown();
		});
		return false;
	}
	numbering();
});

//family site
$(function() {
	$famSite = $(".family_site > a");
	$famList = $(".family_site ul");

	$famSite.click(function (event) {
		event.preventDefault();
		$(this).toggleClass("selected");
		$famList.slideToggle('slow', function() {
          // 
        });
	});
});

//pr-room
$(function(){
	var $companyLang = $(".pr-room .lang");
	var $companyBtn = $(".pr-room .btn_down li");

	$companyLang.mouseover(function() {
		$(this).find( "ul" ).show();
	});
	$companyLang.mouseleave(function() {
		$(this).find( "ul" ).hide();
	});

	$companyLang.find("li").click(function(){
		idL = $(this).index();
		msg = $(this).find("span").text();
		//console.log(msg);

		$(this).parent().parent().find(".t1").empty();
		$(this).parent().parent().find(".t1").append(msg);
		$(this).parent().parent().parent().find(".btn_down .t1").hide();
		$(this).parent().parent().parent().find(".lang ul").hide();
		$(this).parent().parent().parent().find(".btn_down ul li").hide();
		$(this).parent().parent().parent().find(".btn_down ul li").eq(idL).show();
	});
});

//top
$(function(){
	var $btnT = $(".content .top");

	$btnT.bind("click", function(){
		$("body").animate({scrollTop:0}, '600');
	});
});

