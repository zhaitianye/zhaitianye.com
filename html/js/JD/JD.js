$(document).ready(function() {
/*头部部分*/
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
/*头部部分END*/
/*主要展示*/
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
    /*右侧第三层鼠标放置弹出层变化*/
        $(".maj-co3-fl3-si1-control").mouseenter(function() {
            /*判断是否为刚关闭状态*/
            var isnowclose = $(".majorJD-code3-float3-sidev1").hasClass("is-now-close");
            if (isnowclose) {
            }else{
                /*文字颜色和边框变化*/
                $(".maj-co3-fl3-si1-ct-text").find("a").css("color","#666");
                $(".maj-co3-fl3-si1-ct-text").css("border-color","#fff");
                $(this).find(".maj-co3-fl3-si1-ct-text").find("a").css("color","#e01121");
                $(this).find(".maj-co3-fl3-si1-ct-text").css("border-color","#e01121");
                /*下面弹层的变化*/
                $(".majorJD-code3-float3-sidev2").animate({top:'25px'},150);
                /*内部弹层的变化*/
                $(".control-main-div").animate({top:'-38px'},150);
                /*顶部小点的变化*/
                $(".maj-co3-fl3-si-redpoint").find("span").hide();
                $(".maj-co3-fl3-si-redpoint").css("border-radius","50%");
                $(".maj-co3-fl3-si-redpoint").animate({top:'5px',left:'39px',width:'4px',height:'4px'},150);
            }
        });
        $(".maj-co3-fl3-si1-control").mouseleave(function() {
            $(".majorJD-code3-float3-sidev1").removeClass("is-now-close");
        });
    /*右侧第三层关闭按钮*/    
        $(".mJ-c3-f3-close-sidev2").click(function() {
            /*文字颜色和边框变化*/
            $(".maj-co3-fl3-si1-ct-text").find("a").css("color","#666");
            $(".maj-co3-fl3-si1-ct-text").css("border-color","#fff");
            /*下面弹层的变化*/
            $(".majorJD-code3-float3-sidev2").animate({top:'210px'},150);
            /*内部弹层的变化*/
            $(".control-main-div").animate({top:'0px'},150);
            /*顶部小点的变化*/
            $(".maj-co3-fl3-si-redpoint").find("span").show();
            $(".maj-co3-fl3-si-redpoint").css("border-radius","0");
            $(".maj-co3-fl3-si-redpoint").animate({top:'0px',left:'34px',width:'13px',height:'16px'},150);
            $(".majorJD-code3-float3-sidev1").addClass("is-now-close");
        });
    /*右侧第三层控制相关弹层*/
    $(".maj-co3-fl3-si1-controlv1").mouseenter(function() {
        $(".maj-co3-fl3-si2-tips").hide();
        $(".maj-co3-fl3-si2-tipsv1").show();
    });
    $(".maj-co3-fl3-si1-controlv2").mouseenter(function() {
        $(".maj-co3-fl3-si2-tips").hide();
        $(".maj-co3-fl3-si2-tipsv2").show();
    });
    $(".maj-co3-fl3-si1-controlv3").mouseenter(function() {
        $(".maj-co3-fl3-si2-tips").hide();
        $(".maj-co3-fl3-si2-tipsv3").show();
    });
    $(".maj-co3-fl3-si1-controlv4").mouseenter(function() {
        $(".maj-co3-fl3-si2-tips").hide();
        $(".maj-co3-fl3-si2-tipsv4").show();
    });
/*主要展示END*/
});