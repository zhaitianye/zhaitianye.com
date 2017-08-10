/*jquery*/
$(document).ready(function(){
      /*固定头部*/
      var headHeight=$(".header").height();
      var nav=$(".nav");
      $(window).scroll(function(){
        if($(this).scrollTop()>headHeight){
          nav.addClass("nav-affix");
        }
        else{
        nav.removeClass("nav-affix");
        }
      });
      /*侧边定位*/
      $(".afx-news").click(function(){ 
        var speed=200;
        var headHeight=$(".header").height();
        $('body,html').animate({ scrollTop: headHeight }, speed);
        return false;     
      });
      $(".afx-act").click(function(){ 
        var speed=200;
        var headHeight=$(".header").height()+$(".nav").height()+$(".swiper-containerv1").height()-80;
        $('body,html').animate({ scrollTop: headHeight }, speed);
        return false;     
      });
      $(".afx-stu").click(function(){ 
        var speed=200;
        var headHeight=$(".header").height()+$(".nav").height()+$(".swiper-containerv1").height()+$(".activity").height()-80;
        $('body,html').animate({ scrollTop: headHeight }, speed);
        return false;     
      });
      $(".afx-vid").click(function(){ 
        var speed=200;
        var headHeight=$(".header").height()+$(".nav").height()+$(".swiper-containerv1").height()+$(".activity").height()+$(".edu-bgbv1").height()-80;
        $('body,html').animate({ scrollTop: headHeight }, speed);
        return false;     
      });
      /*导航菜单弹出层*/
      $(".emba-nav5").mouseenter(function(){
        $(this).find(".emba-nav5h").show();
        $(this).find("i").removeClass("icon-angle-up");
        $(this).find("i").addClass("icon-angle-down");
      });
      $(".emba-nav5").mouseleave(function(){
        $(this).find(".emba-nav5h").hide();
        $(this).find("i").removeClass("icon-angle-down");
        $(this).find("i").addClass("icon-angle-up");
      });
      /*按钮动画效果*/
      $(".btn-ban-titv1").mouseenter(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:first").show();
        $(this).find("i:last").removeClass("col-h-blue");
        $(this).find("i:last").addClass("col-white");
        $(this).find("i:first").animate({
          left:'200px',
        });
        $(this).find("i:last").animate({
          right:'30px',
        });
      });
      $(".btn-ban-titv1").mouseleave(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:last").removeClass("col-white");
        $(this).find("i:last").addClass("col-h-blue");
         $(this).find("i:first").animate({
          left:'100px',
        });
         $(this).find("i:last").animate({
          right:'0px',
        });
         $(this).find("i:first").hide();
      });
      $(".btn-ban-titv2").mouseenter(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:first").show();
        $(this).find("i:first").animate({
          left:'200px',
        });
        $(this).find("i:last").animate({
          right:'30px',
        });
      });
      $(".btn-ban-titv2").mouseleave(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
         $(this).find("i:first").animate({
          left:'100px',
        });
         $(this).find("i:last").animate({
          right:'0px',
        });
         $(this).find("i:first").hide();
      });
      /*视频方面*/
      $(".emba-video,.vid-close").mouseenter(function(){
        $(".vid-close").show();
      });
      $(".emba-video,.vid-close").mouseleave(function(){
        $(".vid-close").hide();
      });
      $(".vid-close").click(function(){
        $(".emba-video").attr({
        "src" : "#",
          });
      });
      $(".vid-imgv1").click(function(){
        $(".emba-vid").removeClass("vid-bgv3");
        $(".emba-vid").removeClass("vid-bgv4");
        $(".emba-vid").addClass("vid-bgv2");
        $(".emba-video").attr({"src" : "../../../img/edu-emba/embaIn.mp4",});
      });
      $(".vid-imgv2").click(function(){
        $(".emba-vid").removeClass("vid-bgv2");
        $(".emba-vid").removeClass("vid-bgv4");
        $(".emba-vid").addClass("vid-bgv3");
        $(".emba-video").attr({"src" : "../../../img/edu-emba/embaIn.mp4",});
      });
      $(".vid-imgv3").click(function(){
        $(".emba-vid").removeClass("vid-bgv2");
        $(".emba-vid").removeClass("vid-bgv3");
        $(".emba-vid").addClass("vid-bgv4");
        $(".emba-video").attr({"src" : "../../../img/edu-emba/embaIn.mp4",});
      });
    });
    

/*jqueryend*/
/*Swiper声明*/
  /*banner Swiper*/
var Swiperv1 = new Swiper('.swiper-containerv1', {
        pagination: '.swiper-paginationv1',
        paginationClickable: true,
        autoplay : 10000,
        speed:600,
        loop : true,
});
  /*EMBA学员swiper*/
var Swiperv2 = new Swiper('.swiper-containerv2', {
        pagination: '.swiper-paginationv2',
        paginationClickable: true,
        autoplay : 4000,
        speed:600,
        loop : true,
        effect : 'flip',
})
var Swiperv3 = new Swiper('.swiper-containerv3', {
        loop : true,
        effect : 'fade',
})
Swiperv2.params.control = Swiperv3;
Swiperv3.params.control = Swiperv2;
