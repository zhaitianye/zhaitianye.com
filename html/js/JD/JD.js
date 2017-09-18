$(document).ready(function(){
  /*导航条显示隐藏*/
  $(".navmain-li").mouseenter(function(){
    $(this).find(".navmain-lishow").show();
    $(this).addClass("bg-white");
  });
  $(".navmain-li").mouseleave(function(){
    $(this).find(".navmain-lishow").hide();
    $(this).removeClass("bg-white ");
  });

  /*导航条手机京东*/
  $(".navmain-liv2").mouseenter(function(){
    $(this).find(".navmain-lishow").show();
  });
  $(".navmain-liv2").mouseleave(function(){
    $(this).find(".navmain-lishow").hide();
  });

  /*导航条右侧选择地址*/
  $(".navmain-rightul").find("li").click(function(){
  	$(this).parent().find(".mainnavrightselect").addClass("mainnavrightnoselect");
    $(this).parent().find(".mainnavrightselect").removeClass("mainnavrightselect");
    $(this).find("span").removeClass("mainnavrightnoselect");
    $(this).find("span").addClass("mainnavrightselect");
  });

  /*购物车显示隐藏*/
  $(".shopping-cart-boxv1").mouseenter(function(){
    $(this).find(".shopping-cart-tipsv1").show();
    $(this).find(".shopping-cart-tipsv2").show();
    $(this).removeClass("bor-col-e3e4e5");
    $(this).addClass("bor-col-ccc");
  });
  $(".shopping-cart-boxv1").mouseleave(function(){
    $(this).find(".shopping-cart-tipsv1").hide();
    $(this).find(".shopping-cart-tipsv2").hide();
    $(this).removeClass("bor-col-ccc");
    $(this).addClass("bor-col-e3e4e5");
  });

});
/*主要显示左侧导航控制部分*/
$(".main-menu-left-control").mouseenter(function(){
  $(this).addClass("bg-999395");
  $(this).find(".main-menu-describe").show();
});
$(".main-menu-left-control").mouseleave(function(){
  $(this).removeClass("bg-999395");
  $(this).find(".main-menu-describe").hide();
});
