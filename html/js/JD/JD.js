$(document).ready(function() {
    /*导航条显示隐藏*/
    $(".navmain-li").mouseenter(function() {
        $(this).find(".navmain-lishow").show();
        $(this).addClass("bg-white");
    });
    $(".navmain-li").mouseleave(function() {
        $(this).find(".navmain-lishow").hide();
        $(this).removeClass("bg-white ");
    });

    /*导航条手机京东*/
    $(".navmain-liv2").mouseenter(function() {
        $(this).find(".navmain-lishow").show();
    });
    $(".navmain-liv2").mouseleave(function() {
        $(this).find(".navmain-lishow").hide();
    });

    /*导航条右侧选择地址*/
    $(".navmain-rightul").find("li").click(function() {
        $(this).parent().find(".mainnavrightselect").addClass("mainnavrightnoselect");
        $(this).parent().find(".mainnavrightselect").removeClass("mainnavrightselect");
        $(this).find("span").removeClass("mainnavrightnoselect");
        $(this).find("span").addClass("mainnavrightselect");
    });

    /*购物车显示隐藏*/
    $(".shopping-cart-boxv1").mouseenter(function() {
        $(this).find(".shopping-cart-tipsv1").show();
        $(this).find(".shopping-cart-tipsv2").show();
        $(this).removeClass("bor-col-e3e4e5");
        $(this).addClass("bor-col-ccc");
    });
    $(".shopping-cart-boxv1").mouseleave(function() {
        $(this).find(".shopping-cart-tipsv1").hide();
        $(this).find(".shopping-cart-tipsv2").hide();
        $(this).removeClass("bor-col-ccc");
        $(this).addClass("bor-col-e3e4e5");
    });

});
/*主要显示左侧导航控制部分*/
$(".main-menu-left-control").mouseenter(function() {
    $(this).addClass("bg-999395");
    $(this).find(".main-menu-describe").show();
});
$(".main-menu-left-control").mouseleave(function() {
    $(this).removeClass("bg-999395");
    $(this).find(".main-menu-describe").hide();
});
/*主banner swiper定义*/
var mainbannerswiper = new Swiper('#main-banner-swiper', {
    loop: true,
    autoplay : 2500,
    effect: 'fade',
    autoplayDisableOnInteraction : false,
    pagination: '#main-banner-swiper-pagination',
    nextButton: '#main-banner-swiper-button-next',
    prevButton: '#main-banner-swiper-button-prev',
});
$('#main-banner-swiper .swiper-pagination').on('mouseover', 'span', function (){ 
    var index = $(this).index(); 
    mainbannerswiper.slideTo(index+1); 
});
/*主banner左右导航部分js*/
$("#main-banner-swiper").mouseenter(function() {
    $("#main-banner-swiper-button-prev").show();
    $("#main-banner-swiper-button-next").show();
});
$("#main-banner-swiper").mouseleave(function() {
    $("#main-banner-swiper-button-prev").hide();
    $("#main-banner-swiper-button-next").hide();
});
$("#main-banner-swiper-button-prev").mouseenter(function() {
    $(this).css("background-color","rgba(0,0,0,0.6)");
});
$("#main-banner-swiper-button-prev").mouseleave(function() {
    $(this).css("background-color","rgba(0,0,0,0.1)");
});
$("#main-banner-swiper-button-next").mouseenter(function() {
    $(this).css("background-color","rgba(0,0,0,0.6)");
});
$("#main-banner-swiper-button-next").mouseleave(function() {
    $(this).css("background-color","rgba(0,0,0,0.1)");
});
/*主要介绍右侧部分js*/
$(".mian-notice-controlv1").mouseenter(function() {
    $(".mian-notice-side").stop(true);
    $(".mian-notice-side").animate({left:'0px'},300);
    $(".mian-notice-tipsv2").hide();
    $(".mian-notice-tipsv1").show();

});
$(".mian-notice-controlv2").mouseenter(function() {
    $(".mian-notice-side").stop(true);
    $(".mian-notice-side").animate({left:'50px'},300);
    $(".mian-notice-tipsv1").hide();
    $(".mian-notice-tipsv2").show();
});