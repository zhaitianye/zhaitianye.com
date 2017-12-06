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
        /*导航条显示隐藏END*/
        /*导航条手机京东*/
            $(".navmain-liv2").mouseenter(function() {
                $(this).find(".navmain-lishow").show();
            });
            $(".navmain-liv2").mouseleave(function() {
                $(this).find(".navmain-lishow").hide();
            });
        /*导航条手机京东end*/
        /*导航条右侧选择地址*/
            $(".navmain-rightul").find("li").click(function() {
                $(this).parent().find(".mainnavrightselect").addClass("mainnavrightnoselect");
                $(this).parent().find(".mainnavrightselect").removeClass("mainnavrightselect");
                $(this).find("span").removeClass("mainnavrightnoselect");
                $(this).find("span").addClass("mainnavrightselect");
            });
        /*导航条右侧选择地址END*/
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
        /*购物车显示隐藏end*/
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
        /*主要显示左侧导航控制部分end*/
        /*主banner swiper定义*/
            var mainbannerswiper = new Swiper('#main-banner-swiper', {
                loop: true,
                autoplay: {
                    delay: 2500,//5秒切换一次
                },
                autoplayDisableOnInteraction: false,
                effect: 'fade',
                pagination: {
                    el: '#main-banner-swiper-pagination',
                },
                navigation: {
                    nextEl: '#main-banner-swiper-button-next',
                    prevEl: '#main-banner-swiper-button-prev',
                },
            });
            $('#main-banner-swiper .swiper-pagination').on('mouseover', 'span', function() {
                var index = $(this).index();
                mainbannerswiper.slideTo(index + 1);
            });
        /*主banner swiper定义END*/
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
                $(this).css("background-color", "rgba(0,0,0,0.6)");
            });
            $("#main-banner-swiper-button-prev").mouseleave(function() {
                $(this).css("background-color", "rgba(0,0,0,0.1)");
            });
            $("#main-banner-swiper-button-next").mouseenter(function() {
                $(this).css("background-color", "rgba(0,0,0,0.6)");
            });
            $("#main-banner-swiper-button-next").mouseleave(function() {
                $(this).css("background-color", "rgba(0,0,0,0.1)");
            });
        /*主banner左右导航部分jsEND*/
        /*主要介绍右侧部分js*/
            $(".mian-notice-controlv1").mouseenter(function() {
                $(".mian-notice-side").stop(true);
                $(".mian-notice-side").animate({ left: '0px' }, 300);
                $(".mian-notice-tipsv2").hide();
                $(".mian-notice-tipsv1").show();
            });
            $(".mian-notice-controlv2").mouseenter(function() {
                $(".mian-notice-side").stop(true);
                $(".mian-notice-side").animate({ left: '50px' }, 300);
                $(".mian-notice-tipsv1").hide();
                $(".mian-notice-tipsv2").show();
            });
        /*主要介绍右侧部分jsend*/
        /*右侧第三层鼠标放置弹出层变化*/
            $(".maj-co3-fl3-si1-control").mouseenter(function() {
                /*判断是否为刚关闭状态*/
                var isnowclose = $(".majorJD-code3-float3-sidev1").hasClass("is-now-close");
                if (isnowclose) {} else {
                    /*文字颜色和边框变化*/
                    $(".maj-co3-fl3-si1-ct-text").find("a").css("color", "#666");
                    $(".maj-co3-fl3-si1-ct-text").css("border-color", "#fff");
                    $(this).find(".maj-co3-fl3-si1-ct-text").find("a").css("color", "#e01121");
                    $(this).find(".maj-co3-fl3-si1-ct-text").css("border-color", "#e01121");
                    /*下面弹层的变化*/
                    $(".majorJD-code3-float3-sidev2").animate({ top: '25px' }, 150);
                    /*内部弹层的变化*/
                    $(".control-main-div").animate({ top: '-38px' }, 150);
                    /*顶部小点的变化*/
                    $(".maj-co3-fl3-si-redpoint").find("span").hide();
                    $(".maj-co3-fl3-si-redpoint").css("border-radius", "50%");
                    $(".maj-co3-fl3-si-redpoint").animate({ top: '5px', left: '39px', width: '4px', height: '4px' }, 150);
                }
            });
            $(".maj-co3-fl3-si1-control").mouseleave(function() {
                $(".majorJD-code3-float3-sidev1").removeClass("is-now-close");
            });
        /*右侧第三层鼠标放置弹出层变化END*/
        /*右侧第三层关闭按钮*/
            $(".mJ-c3-f3-close-sidev2").click(function() {
                /*文字颜色和边框变化*/
                $(".maj-co3-fl3-si1-ct-text").find("a").css("color", "#666");
                $(".maj-co3-fl3-si1-ct-text").css("border-color", "#fff");
                /*下面弹层的变化*/
                $(".majorJD-code3-float3-sidev2").animate({ top: '210px' }, 150);
                /*内部弹层的变化*/
                $(".control-main-div").animate({ top: '0px' }, 150);
                /*顶部小点的变化*/
                $(".maj-co3-fl3-si-redpoint").find("span").show();
                $(".maj-co3-fl3-si-redpoint").css("border-radius", "0");
                $(".maj-co3-fl3-si-redpoint").animate({ top: '0px', left: '34px', width: '13px', height: '16px' }, 150);
                $(".majorJD-code3-float3-sidev1").addClass("is-now-close");
            });
        /*右侧第三层关闭按钮END*/
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
        /*右侧第三层控制相关弹层END*/
        /*右侧第三层弹出部分相关js*/
            /*右一相关弹层*/
                $(".majorJD-c3-f3-s2-t1-control1").mouseenter(function() {
                    $(".majorJD-c3-f3-s2-t1-control1").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control2").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control3").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control1").addClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control1").parent("li").addClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-show1").show();
                    $(".majorJD-c3-f3-s2-t1-show2").hide();
                    $(".majorJD-c3-f3-s2-t1-show3").hide();
                });
                $(".majorJD-c3-f3-s2-t1-control2").mouseenter(function() {
                    $(".majorJD-c3-f3-s2-t1-control1").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control2").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control3").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control2").addClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control2").parent("li").addClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-show2").show();
                    $(".majorJD-c3-f3-s2-t1-show1").hide();
                    $(".majorJD-c3-f3-s2-t1-show3").hide();
                });
                $(".majorJD-c3-f3-s2-t1-control3").mouseenter(function() {
                    $(".majorJD-c3-f3-s2-t1-control1").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control2").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control3").removeClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-control3").addClass("col-fffi");
                    $(".majorJD-c3-f3-s2-t1-control3").parent("li").addClass("bg-main-banner-right-bgv3");
                    $(".majorJD-c3-f3-s2-t1-show3").show();
                    $(".majorJD-c3-f3-s2-t1-show1").hide();
                    $(".majorJD-c3-f3-s2-t1-show2").hide();
                });
            /*右一一验证*/
                $(".maj-co3-fl3-show1-side1-form").validate({
                    rules: {
                        phonenum: {
                            required: true,
                            minlength: 11,
                            number: true,
                        },
                        selmoney: {
                            required: true
                        },
                    },
                    messages: {
                        phonenum: {
                            required: "请输入手机号",
                            minlength: "手机号由11位组成",
                            number: "只能输入数字",
                        },
                        selmoney: {
                            required: "请选择充值金额",
                        },
                    },
                    errorLabelContainer:".main-banner-right-form1-error-mag",
                    submitHandler: function(form) {
                        layer.msg("<font style="+"color:#fff;"+">表单提交事件！</font>");
                    },
                });
            /*右一一下拉选择*/
                $(".main-banner-right-form1-sel").change(function(){
                    var selval = parseInt($(".main-banner-right-form1-sel").val());
                    switch (selval) {
                        case 10:
                            $(".main-banner-right-form1-seldetail").html("￥9.8-￥11.0");
                            break;
                        case 20:
                            $(".main-banner-right-form1-seldetail").html("￥19.6-￥21.0");
                            break;
                        case 30:
                            $(".main-banner-right-form1-seldetail").html("￥29.4-￥31.0");
                            break;
                        case 50:
                            $(".main-banner-right-form1-seldetail").html("￥49.0-￥50.0");
                            break;
                        case 100:
                            $(".main-banner-right-form1-seldetail").html("￥98.0-￥100.0");
                            break;
                        case 200:
                            $(".main-banner-right-form1-seldetail").html("￥196.0-￥200.0");
                            break;
                        case 300:
                            $(".main-banner-right-form1-seldetail").html("￥294.0-￥300.0");
                            break;
                        case 500:
                            $(".main-banner-right-form1-seldetail").html("￥490.0-￥500.0");
                            break;
                        default:
                            $(".main-banner-right-form1-seldetail").html("￥98.0-￥100.0");
                            break;
                    }
                });
            /*右一二验证*/
                $(".maj-co3-fl3-show1-side2-form").validate({
                    rules: {
                        phonenum: {
                            required: true,
                            minlength: 11,
                            number: true,
                        },
                        selmoney: {
                            required: true
                        },
                    },
                    messages: {
                        phonenum: {
                            required: "请输入手机号",
                            minlength: "手机号由11位组成",
                            number: "只能输入数字",
                        },
                        selmoney: {
                            required: "请选择充值流量",
                        },
                    },
                    errorLabelContainer: ".main-banner-right-form2-error-mag",
                    submitHandler: function(form) {
                        layer.msg("<font style=" + "color:#fff;" + ">表单提交事件！</font>");
                    },
                });
            /*右一二下拉选择*/
                $(".main-banner-right-form2-sel2").change(function(){
                    var selval = parseInt($(".main-banner-right-form2-sel2").val());
                    switch (selval) {
                        case 50:
                            $(".main-banner-right-form2-seldetail").html("￥7.5-￥10.0");
                            break;
                        case 100:
                            $(".main-banner-right-form2-seldetail").html("￥9.95-￥20.0");
                            break;
                        case 200:
                            $(".main-banner-right-form2-seldetail").html("￥19.9-￥20.5");
                            break;
                        case 300:
                            $(".main-banner-right-form2-seldetail").html("￥29.0-￥29.9");
                            break;
                        case 500:
                            $(".main-banner-right-form2-seldetail").html("￥49.0-￥50.0");
                            break;
                        default:
                            $(".main-banner-right-form2-seldetail").html("￥49.0-￥50.0");
                            break;
                    }
                });
            /*右一三验证*/
                $(".maj-co3-fl3-show1-side3-form").validate({
                    rules: {
                        phonenum: {
                            required: true,
                            minlength: 11,
                            number: true,
                        },
                        selmoney: {
                            required: true
                        },
                    },
                    messages: {
                        phonenum: {
                            required: "请输入手机号",
                            minlength: "手机号由11位组成",
                            number: "只能输入数字",
                        },
                        selmoney: {
                            required: "请选择月费",
                        },
                    },
                    errorLabelContainer:".main-banner-right-form3-error-mag",
                    submitHandler: function(form) {
                        layer.msg("<font style="+"color:#fff;"+">表单提交事件！</font>");
                    },
                });
            /*右一三下拉选择*/
                $(".main-banner-right-form3-sel").change(function(){
                    var selval = parseInt($(".main-banner-right-form3-sel").val());
                    switch (selval) {
                        case 38:
                            $(".main-banner-right-form3-seldetail").html("50分钟300M流量");
                            break;
                        case 48:
                            $(".main-banner-right-form3-seldetail").html("50分钟500M流量");
                            break;
                        case 58:
                            $(".main-banner-right-form3-seldetail").html("100分钟500M流量");
                            break;
                        case 88:
                            $(".main-banner-right-form3-seldetail").html("220分钟700M流量");
                            break;
                        case 138:
                            $(".main-banner-right-form3-seldetail").html("500分钟1G流量");
                            break;
                        case 158:
                            $(".main-banner-right-form3-seldetail").html("500分钟2G流量");
                            break;
                        case 238:
                            $(".main-banner-right-form3-seldetail").html("1000分钟2G流量");
                            break;
                        case 268:
                            $(".main-banner-right-form3-seldetail").html("1000分钟3G流量");
                            break;
                        case 338:
                            $(".main-banner-right-form3-seldetail").html("2000分钟3G流量");
                            break;
                        case 588:
                            $(".main-banner-right-form3-seldetail").html("4000分钟6G流量");
                            break;
                        default:
                            $(".main-banner-right-form3-seldetail").html("100分钟500M流量");
                            break;
                    }
                });
            /*右二相关弹层*/
                var mjc3f3s2t2ST260;
                $(".majorJD-c3-f3-s2-t2-control1").mouseenter(function() {
                    mjc3f3s2t2ST260 = setTimeout(function(){st()},260);
                    function st(){
                        $(".majorJD-c3-f3-s2-t2-control1").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control2").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control3").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control1").addClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control1").parent("li").addClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-show").animate({"margin-left":'0px'},300);
                    };
                });
                $(".majorJD-c3-f3-s2-t2-control1").mouseleave(function() {
                    clearTimeout(mjc3f3s2t2ST260);
                });
                $(".majorJD-c3-f3-s2-t2-control2").mouseenter(function() {
                    mjc3f3s2t2ST260 = setTimeout(function(){st()},260);
                    function st(){
                        $(".majorJD-c3-f3-s2-t2-control1").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control2").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control3").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control2").addClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control2").parent("li").addClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-show").animate({"margin-left":'-190px'},300);
                    };
                });
                $(".majorJD-c3-f3-s2-t2-control2").mouseleave(function() {
                    clearTimeout(mjc3f3s2t2ST260);
                });
                $(".majorJD-c3-f3-s2-t2-control3").mouseenter(function() {
                    mjc3f3s2t2ST260 = setTimeout(function(){st()},260);
                    function st(){
                        $(".majorJD-c3-f3-s2-t2-control1").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control2").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control3").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-control3").addClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t2-control3").parent("li").addClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t2-show").animate({"margin-left":'-380px'},300);
                    };
                });
                $(".majorJD-c3-f3-s2-t2-control3").mouseleave(function() {
                    clearTimeout(mjc3f3s2t2ST260);
                });
            /*右二一相关js*/
                $(".c3-f3-s2-t2-s1-hotcity-c1").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s1").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-hotcity-c2").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s2").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-hotcity-c3").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s3").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-hotcity-c4").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s4").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-hotcity-c5").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s5").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-hotcity-c6").click(function(){
                    $(".c3-f3-s2-t2-s1-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s1-hotcity-s6").show();
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t2s1-departcity").focus(function(){
                    $(".c3f3s2t2s1-show-decity").show();
                });
                var c3f3s2t2s1_stv1;
                $(".c3f3s2t2s1-departcity").mouseleave(function(){
                    $(".c3f3s2t2s1-departcity").blur();
                    c3f3s2t2s1_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s1-show-decity").hide();
                    };
                });
                $(".c3f3s2t2s1-show-decity").mouseleave(function(){
                    c3f3s2t2s1_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s1-show-decity").hide();
                    };
                });
                $(".c3f3s2t2s1-show-decity").mouseenter(function(){
                    clearTimeout(c3f3s2t2s1_stv1);
                    $(".c3f3s2t2s1-show-decity").show();
                });
                $(".c3f3s2t2s1-hotcity-decity").click(function(){
                    //取值并去除所有空格
                    var hotcityname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t2s1-departcity").val(hotcityname);
                    $(".c3f3s2t2s1-show-decity").hide();
                });
                $(".c3-f3-s2-t2-s1-arrcity-c1").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s1").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-arrcity-c2").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s2").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-arrcity-c3").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s3").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-arrcity-c4").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s4").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-arrcity-c5").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s5").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s1-arrcity-c6").click(function(){
                    $(".c3-f3-s2-t2-s1-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s1-arrcity-s6").show();
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s1-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t2s1-arrivalcity").focus(function(){
                    $(".c3f3s2t2s1-show-arrcity").show();
                });
                var c3f3s2t2s1_stv2;
                $(".c3f3s2t2s1-arrivalcity").mouseleave(function(){
                    $(".c3f3s2t2s1-arrivalcity").blur();
                    c3f3s2t2s1_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s1-show-arrcity").hide();
                    };
                });
                $(".c3f3s2t2s1-show-arrcity").mouseleave(function(){
                    c3f3s2t2s1_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s1-show-arrcity").hide();
                    };
                });
                $(".c3f3s2t2s1-show-arrcity").mouseenter(function(){
                    clearTimeout(c3f3s2t2s1_stv2);
                    $(".c3f3s2t2s1-show-arrcity").show();
                });
                $(".c3f3s2t2s1-hotcity-arrcity").click(function(){
                    //取值并去除所有空格
                    var hotcityname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t2s1-arrivalcity").val(hotcityname);
                    $(".c3f3s2t2s1-show-arrcity").hide();
                });
                $(".c3f3s2t2s1-changecity").click(function(){
                    var decity = $(".c3f3s2t2s1-departcity").val();
                    var arrcity = $(".c3f3s2t2s1-arrivalcity").val();
                    $(".c3f3s2t2s1-departcity").val(arrcity);
                    $(".c3f3s2t2s1-arrivalcity").val(decity);
                });
                $(".c3f3s2t2s1-changecity").mouseenter(function(){
                    $(this).addClass("bg-main-banner-right-bgv6-hov");
                    $(this).removeClass("bg-main-banner-right-bgv6");
                });
                $(".c3f3s2t2s1-changecity").mouseleave(function(){
                    $(this).addClass("bg-main-banner-right-bgv6");
                    $(this).removeClass("bg-main-banner-right-bgv6-hov");
                });
                var c3f3s2t2s1_data = laydate.render({
                    elem: '.c3f3s2t2s1-data',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 0,
                    format: 'yyyy/MM/dd',
                });
                var c3f3s2t2s1_datav2 = laydate.render({
                    elem: '.c3f3s2t2s1-datav2',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 1,
                    format: 'yyyy/MM/dd',
                });
                $(".c3f3s2t2s11-form").validate({
                    rules: {
                        n_departcity: {
                            required: true
                        },
                        n_arrivalcity: {
                            required: true
                        },
                    },
                    messages: {
                        n_departcity: {
                            required: "请选择出发城市"
                        },
                        n_arrivalcity: {
                            required: "请选择到达城市",
                        },
                    },
                    errorPlacement: function(error, element) {  
                        error.appendTo(element.next("div"));  
                    },
                    submitHandler: function(form) {
                        var departcity_val = $(".c3f3s2t2s1-departcity").val();
                        var arrivalcity_val = $(".c3f3s2t2s1-arrivalcity").val();
                        var c3f3s2t2s1_data_val = $(".c3f3s2t2s1-data").val();
                        var c3f3s2t2s1_datav2_val = $(".c3f3s2t2s1-datav2").val();
                        if ($(".c3f3s2t2s1-datav2").css('display') =='none') {
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_data_val+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }else{
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_data_val+'</span></p><p>返程日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_datav2_val+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }
                        
                    },
                });
                $(".c3f3s2t2s1-lab-single").click(function(){
                    $(".c3f3s2t2s1-datav2").hide();
                });
                $(".c3f3s2t2s1-lab-double").click(function(){
                    $(".c3f3s2t2s1-datav2").show();
                });
            /*右二二相关js*/
                $(".c3-f3-s2-t2-s2-hotcity-c1").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s1").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c2").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s2").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c3").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s3").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c4").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s4").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c5").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s5").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c6").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s6").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-hotcity-c7").click(function(){
                    $(".c3-f3-s2-t2-s2-hotcity-s").hide();
                    $(".c3-f3-s2-t2-s2-hotcity-s7").show();
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-hotcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t2s2-departcity").focus(function(){
                    $(".c3f3s2t2s2-show-decity").show();
                });
                var c3f3s2t2s2_stv1;
                $(".c3f3s2t2s2-departcity").mouseleave(function(){
                    $(".c3f3s2t2s2-departcity").blur();
                    c3f3s2t2s2_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s2-show-decity").hide();
                    };
                });
                $(".c3f3s2t2s2-show-decity").mouseleave(function(){
                    c3f3s2t2s2_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s2-show-decity").hide();
                    };
                });
                $(".c3f3s2t2s2-show-decity").mouseenter(function(){
                    clearTimeout(c3f3s2t2s2_stv1);
                    $(".c3f3s2t2s2-show-decity").show();
                });
                $(".c3f3s2t2s2-hotcity-decity").click(function(){
                    //取值并去除所有空格
                    var hotcityname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t2s2-departcity").val(hotcityname);
                    $(".c3f3s2t2s2-show-decity").hide();
                });
                $(".c3-f3-s2-t2-s2-arrcity-c1").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s1").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c2").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s2").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c3").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s3").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c4").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s4").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c5").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s5").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c6").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s6").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t2-s2-arrcity-c7").click(function(){
                    $(".c3-f3-s2-t2-s2-arrcity-s").hide();
                    $(".c3-f3-s2-t2-s2-arrcity-s7").show();
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t2-s2-arrcity-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t2s2-arrivalcity").focus(function(){
                    $(".c3f3s2t2s2-show-arrcity").show();
                });
                var c3f3s2t2s2_stv2;
                $(".c3f3s2t2s2-arrivalcity").mouseleave(function(){
                    $(".c3f3s2t2s2-arrivalcity").blur();
                    c3f3s2t2s2_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s2-show-arrcity").hide();
                    };
                });
                $(".c3f3s2t2s2-show-arrcity").mouseleave(function(){
                    c3f3s2t2s2_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t2s2-show-arrcity").hide();
                    };
                });
                $(".c3f3s2t2s2-show-arrcity").mouseenter(function(){
                    clearTimeout(c3f3s2t2s2_stv2);
                    $(".c3f3s2t2s2-show-arrcity").show();
                });
                $(".c3f3s2t2s2-hotcity-arrcity").click(function(){
                    //取值并去除所有空格
                    var hotcityname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t2s2-arrivalcity").val(hotcityname);
                    $(".c3f3s2t2s2-show-arrcity").hide();
                });
                $(".c3f3s2t2s2-changecity").click(function(){
                    var decity = $(".c3f3s2t2s2-departcity").val();
                    var arrcity = $(".c3f3s2t2s2-arrivalcity").val();
                    $(".c3f3s2t2s2-departcity").val(arrcity);
                    $(".c3f3s2t2s2-arrivalcity").val(decity);
                });
                $(".c3f3s2t2s2-changecity").mouseenter(function(){
                    $(this).addClass("bg-main-banner-right-bgv6-hov");
                    $(this).removeClass("bg-main-banner-right-bgv6");
                });
                $(".c3f3s2t2s2-changecity").mouseleave(function(){
                    $(this).addClass("bg-main-banner-right-bgv6");
                    $(this).removeClass("bg-main-banner-right-bgv6-hov");
                });
                var c3f3s2t2s2_data = laydate.render({
                    elem: '.c3f3s2t2s2-data',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 0,
                    format: 'yyyy/MM/dd',
                });
                var c3f3s2t2s2_datav2 = laydate.render({
                    elem: '.c3f3s2t2s2-datav2',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 1,
                    format: 'yyyy/MM/dd',
                });
                $(".c3f3s2t2s2-lab-single").click(function(){
                    $(".c3f3s2t2s2-datav2").hide();
                });
                $(".c3f3s2t2s2-lab-double").click(function(){
                    $(".c3f3s2t2s2-datav2").show();
                });
                $(".c3f3s2t2s21-form").validate({
                    rules: {
                        n_departcity: {
                            required: true
                        },
                        n_arrivalcity: {
                            required: true
                        },
                    },
                    messages: {
                        n_departcity: {
                            required: "请选择出发城市"
                        },
                        n_arrivalcity: {
                            required: "请选择到达城市",
                        },
                    },
                    errorPlacement: function(error, element) {  
                        error.appendTo(element.next("div"));  
                    },
                    submitHandler: function(form) {
                        var departcity_val = $(".c3f3s2t2s2-departcity").val();
                        var arrivalcity_val = $(".c3f3s2t2s2-arrivalcity").val();
                        var c3f3s2t2s2_data_val = $(".c3f3s2t2s2-data").val();
                        var c3f3s2t2s2_datav2_val = $(".c3f3s2t2s2-datav2").val();
                        if ($(".c3f3s2t2s2-datav2").css('display') =='none') {
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s2_data_val+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }else{
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s2_data_val+'</span></p><p>返程日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s2_datav2_val+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }
                        
                    },
                });
            /*右三相关弹层*/
                var mjc3f3s2t3ST260;
                $(".majorJD-c3-f3-s2-t3-control1").mouseenter(function() {
                    mjc3f3s2t3ST260 = setTimeout(function(){st()},260);
                    function st(){
                        $(".majorJD-c3-f3-s2-t3-control1").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control2").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control3").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control1").addClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control1").parent("li").addClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-show").animate({"margin-left":'0px'},300);
                    };
                });
                $(".majorJD-c3-f3-s2-t3-control1").mouseleave(function() {
                    clearTimeout(mjc3f3s2t3ST260);
                });
                $(".majorJD-c3-f3-s2-t3-control2").mouseenter(function() {
                    mjc3f3s2t3ST260 = setTimeout(function(){st()},260);
                    function st(){
                        $(".majorJD-c3-f3-s2-t3-control1").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control1").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control2").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control2").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control3").removeClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control3").parent("li").removeClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-control2").addClass("col-fffi");
                        $(".majorJD-c3-f3-s2-t3-control2").parent("li").addClass("bg-main-banner-right-bgv3");
                        $(".majorJD-c3-f3-s2-t3-show").animate({"margin-left":'-190px'},300);
                    };
                });
                $(".majorJD-c3-f3-s2-t3-control2").mouseleave(function() {
                    clearTimeout(mjc3f3s2t3ST260);
                });
            /*右三一相关js*/
                $(".c3f3s2t3s1-c1").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s1").show();
                });
                $(".c3f3s2t3s1-c2").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s2").show();
                });
                $(".c3f3s2t3s1-c3").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s3").show();
                });
                $(".c3f3s2t3s1-c4").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s4").show();
                });
                $(".c3f3s2t3s1-c5").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s5").show();
                });
                $(".c3f3s2t3s1-c6").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s6").show();
                });
                $(".c3f3s2t3s1-c7").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s7").show();
                });
                $(".c3f3s2t3s1-c8").click(function(){
                    $(".c3f3s2t3s1-c").removeClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(this).addClass("col-cc0000i h-25i bor bor-b-none bor-col-ccc");
                    $(".c3f3s2t3s1-s").hide();
                    $(".c3f3s2t3s1-s8").show();
                });
                $(".c3f3s2t3s1-bourn").focus(function(){
                    $(".c3f3s2t3s1-show-bourn").show();
                });
                var c3f3s2t3s1_stv1;
                $(".c3f3s2t3s1-bourn").mouseleave(function(){
                    $(".c3f3s2t3s1-bourn").blur();
                    c3f3s2t3s1_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t3s1-show-bourn").hide();
                    };
                });
                $(".c3f3s2t3s1-show-bourn").mouseleave(function(){
                    c3f3s2t3s1_stv1 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t3s1-show-bourn").hide();
                    };
                });
                $(".c3f3s2t3s1-show-bourn").mouseenter(function(){
                    clearTimeout(c3f3s2t3s1_stv1);
                    $(".c3f3s2t3s1-show-bourn").show();
                });
                var c3f3s2t3s1_cdata = laydate.render({
                    elem: '.c3f3s2t3s1-ckeck-time',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 0,
                    format: 'yyyy/MM/dd',
                });
                var nextday = new Date();
                nextday.setDate(nextday.getDate()+1);
                var c3f3s2t3s1_odata = laydate.render({
                    elem: '.c3f3s2t3s1-out-time',
                    value: nextday,
                    showBottom: false,
                    calendar: true,
                    min: 0,
                    format: 'yyyy/MM/dd',
                });
                $(".c3f3s2t3s1-show-bourn-dir").click(function(){
                    //取值并去除所有空格
                    var name = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t3s1-bourn").val(name);
                    $(".c3f3s2t3s1-show-bourn").hide();
                });
                /*酒店商标二联查询JSON数据*/
                    var c3f3s2t3s1_json = {
                        "北京":{"airport":[{"name":"北京首都国际机场"},{"name":"北京南苑机场"},{"name":"北京站"},{"name":"北京西站"},{"name":"北京南站"},{"name":"北京北站"}],"businesses":[{"name":"王府井"},{"name":"鸟巢/国家会议中心"},{"name":"前门/大栅栏"},{"name":"北京展览馆/首都体育馆"},{"name":"中关村/人民大学"},{"name":"CBD"},{"name":"西单"},{"name":"北大/清华/学院路"},{"name":"首都机场、新国展"},{"name":"五棵松体育馆"}]},"上海":{"airport":[{"name":"上海虹桥机场"},{"name":"上海浦东机场"},{"name":"上海站"},{"name":"上海虹桥站"},{"name":"上海南站"},{"name":"上海西站"}],"businesses":[{"name":"陆家嘴"},{"name":"外滩"},{"name":"人民广场"},{"name":"静安寺"},{"name":"新国际博览中心"},{"name":"浦东世博园区"},{"name":"上海浦东机场及周边区域"},{"name":"五角场商业区"},{"name":"豫园（城隍庙）"},{"name":"徐家汇"}]},"广州":{"airport":[{"name":"广州白云国际机场"},{"name":"广州站"},{"name":"广州北站"},{"name":"广州东站"},{"name":"广州南站"},{"name":"广州西站"}],"businesses":[{"name":"琶洲展馆"},{"name":"珠江新城/五羊新城"},{"name":"北京路/海珠广场"},{"name":"广州东站/天河北/天平架"},{"name":"长隆/广州南站"},{"name":"环市东/淘金/区庄/小北"},{"name":"天河软件园（近琶洲）/天河公园"},{"name":"五山/岗顶/体育中心"},{"name":"新白云国际机场"},{"name":"江南西/昌岗/市二宫婚纱街"}]},"成都":{"airport":[{"name":"成都双流国际机场"},{"name":"成都站"},{"name":"成都东站"},{"name":"成都南站"}],"businesses":[{"name":"春熙路/大慈寺商业"},{"name":"天府广场/盐市口"},{"name":"宽窄巷子/中医学院"},{"name":"武侯祠/锦里"},{"name":"骡马市/文殊坊"},{"name":"世纪城新会展/环球中心"},{"name":"双流国际机场"},{"name":"火车东站/锦华万达/万象城酒店"},{"name":"九眼桥/新南门/华西医院"},{"name":"四川大学/省体育馆/美领馆区域"}]},"武汉":{"airport":[{"name":"武汉天河机场"},{"name":"武汉站"},{"name":"武昌站"},{"name":"汉口站"}],"businesses":[{"name":"武汉国际会展中心/武汉广场"},{"name":"汉口江滩"},{"name":"江汉路步行街"},{"name":"武汉经济开发区（沌口开发区）"},{"name":"武昌火车站"},{"name":"中南商圈/洪山广场"},{"name":"光谷步行街/科技会展中心"},{"name":"徐东"},{"name":"王家湾家乐福"},{"name":"汉口火车站"}]},"杭州":{"airport":[{"name":"杭州萧山国际机场"},{"name":"杭州东站"},{"name":"杭州站"},{"name":"萧山站"},{"name":"余杭站"}],"businesses":[{"name":"武林广场及附近（市中心）"},{"name":"西湖湖滨商业区"},{"name":"西湖风景区及灵隐度假区"},{"name":"黄龙体育中心"},{"name":"高铁杭州东站"},{"name":"萧山国际机场"},{"name":"城站火车站（毗邻四季青市场）"},{"name":"文教区"},{"name":"西溪湿地"},{"name":"和平会展中心区域"}]},"深圳":{"airport":[{"name":"深圳宝安国际机场"},{"name":"深圳南头直升机场"},{"name":"深圳站"},{"name":"深圳北站"},{"name":"深圳东站"},{"name":"深圳西站"},{"name":"深圳坪山站"}],"businesses":[{"name":"罗湖火车站、罗湖口岸"},{"name":"会展中心、福田CBD"},{"name":"华侨城"},{"name":"华强北"},{"name":"宝安机场、福永"},{"name":"东门、水贝"},{"name":"科技园"},{"name":"深圳北站、龙华新区"},{"name":"福田口岸、皇岗口岸"},{"name":"宝安中心区、前海"}]},"三亚":{"airport":[{"name":"三亚凤凰机场"},{"name":"三亚火车站"}],"businesses":[{"name":"亚龙湾"},{"name":"海棠湾"},{"name":"大东海"},{"name":"三亚湾"},{"name":"清水湾"},{"name":"市区"},{"name":"蜈支洲岛"},{"name":"南田温泉"},{"name":"崖州湾"},{"name":"国际邮轮码头周边"}]},"厦门":{"airport":[{"name":"厦门高崎机场"},{"name":"厦门火车站"},{"name":"厦门北火车站"},{"name":"高崎站"}],"businesses":[{"name":"轮渡/中山路商业街/厦门大学"},{"name":"鼓浪屿"},{"name":"白鹭洲/厦鼓码头"},{"name":"国际会展中心/环岛路"},{"name":"曾厝垵/黄厝/环岛路"},{"name":"火车站附近/梧村商业区"},{"name":"明发商业广场/SM商业广场"},{"name":"湖里商务运营区"},{"name":"商崎国际机场"},{"name":"万达商业区/五缘湾"}]},"南京":{"airport":[{"name":"南京禄口机场"},{"name":"南京站"},{"name":"南京南站"}],"businesses":[{"name":"新街口地区（市中心）"},{"name":"夫子庙"},{"name":"湖南路商业区"},{"name":"中山陵"},{"name":"火车站地区"},{"name":"河西地区"},{"name":"江宁开发区"},{"name":"汤山温泉度假区"},{"name":"江苏国际会展中心区"},{"name":"溧水区（原溧水县）"}]},"青岛":{"airport":[{"name":"青岛流亭机场"},{"name":"青岛站"},{"name":"青岛北站"},{"name":"胶州站"},{"name":"胶州北站"},{"name":"城阳站"},{"name":"蓝村站"}],"businesses":[{"name":"市政府/五四广场/八大关"},{"name":"奥帆中心/佳士客/青岛大学"},{"name":"火车站/栈桥（西部德国风情区）/第一海水浴场"},{"name":"流亭机场/城阳区政府/正阳路商业区"},{"name":"中央商务区（市北区万达广场）"},{"name":"台东商圈/啤酒街"},{"name":"黄岛区/金沙滩街海水浴场"},{"name":"石老人海水浴场/国际会展中心（崂山区）"},{"name":"李沧/园艺博览会/青岛火车北站"},{"name":"八大关/第一海水浴场"}]},"西安":{"airport":[{"name":"西安咸阳国际机场"},{"name":"西安站"},{"name":"西安北站"},{"name":"西安南站"}],"businesses":[{"name":"钟鼓楼/回民街/市中心"},{"name":"大雁塔/曲江旅游区"},{"name":"高新技术开发区"},{"name":"小寨/历史博物馆"},{"name":"城西"},{"name":"火车站/解放路万达广场"},{"name":"西京医院"},{"name":"交通大学"},{"name":"和平门/李家村万达广场"},{"name":"南门/小雁塔/体育场"}]},"天津":{"airport":[{"name":"天津滨海国际机场"},{"name":"天津站"},{"name":"天津北站"},{"name":"天津南站"},{"name":"天津西站"},{"name":"塘沽站"},{"name":"杨柳青站"}],"businesses":[{"name":"国展/梅江会展中心"},{"name":"滨江道和平路"},{"name":"天津火车东站"},{"name":"小白楼"},{"name":"南开/天大学府区"},{"name":"塘沽（滨海新区）"},{"name":"开发区（滨海新区）"},{"name":"古文华街，南京"},{"name":"长虹公园、天津火车西站"},{"name":"华苑产业园"}]},"重庆":{"airport":[{"name":"重庆江北国际机场"},{"name":"重庆站"},{"name":"重庆北站"},{"name":"重庆南站"}],"businesses":[{"name":"解放碑/朝天门"},{"name":"江北机场/渝北地区/两江新区/悦来会展"},{"name":"江北观音桥步行街/北城天街"},{"name":"南坪/万达广场"},{"name":"三峡广场/重大老校区/沙坪坝"},{"name":"重庆北站（龙头寺）"},{"name":"上清寺/人民广场/两路口"},{"name":"大坪"},{"name":"石桥铺/陈家坪"},{"name":"西南医院/新桥医院"}]},"苏州":{"airport":[{"name":"苏州站"},{"name":"苏州北站"},{"name":"苏州新区站"},{"name":"苏州园区站"},{"name":"昆山站"},{"name":"昆山南站"},{"name":"花桥站"}],"businesses":[{"name":"观前街地区（市中心）"},{"name":"工业园区"},{"name":"苏州新区"},{"name":"火车站地区"},{"name":"盘门地区"},{"name":"太湖"},{"name":"石路商业区"},{"name":"十全街地区"},{"name":"阳兴澄湖旅游度假区"},{"name":"木渎风景区"}]},"济南":{"airport":[{"name":"济南遥墙机场"},{"name":"济南站"},{"name":"济南东站"},{"name":"济南西站"}],"businesses":[{"name":"泉城广场/泉城路/趵突泉"},{"name":"大明湖商圈"},{"name":"火车站/大观园/嘉华商圈"},{"name":"山大/洪楼/二环东路"},{"name":"山师/山艺/警察学院"},{"name":"高新区/奥体中心"},{"name":"舜耕会展中心/千佛山/省体"},{"name":"和谐广场/济南大学西校区"},{"name":"长途汽车站/泺口服装城"},{"name":"遥墙机场"}]},"长沙":{"airport":[{"name":"长沙黄花机场"},{"name":"长沙南站"},{"name":"长沙站"}],"businesses":[{"name":"五一广场/步行街/中山亭"},{"name":"火车站"},{"name":"河西大学城/岳麓风景区/橘子洲头"},{"name":"贺龙/东塘/侯家塘"},{"name":"开福寺/湘雅附一医院/省博馆物"},{"name":"高铁南站"},{"name":"汽车西站/梅西湖/麓谷高新区"},{"name":"省政府/红星会展/汽车南站"},{"name":"市政府/湘雅附三/长沙市肿瘤医院"},{"name":"中医药大学/含浦/洋湖湿地公园"}]},"香港":{"airport":[{"name":"香港国际机场"}],"businesses":[{"name":"尖沙咀、佐敦"},{"name":"旺角、油麻地"},{"name":"铜锣湾、湾仔"},{"name":"赤臘角（机场）"},{"name":"红墈、九龙城"},{"name":"迪士尼景区、愉景湾"},{"name":"北角"},{"name":"中环、上环"},{"name":"九龙站（西九龙）"},{"name":"太子、大角咀"}]},"大连":{"airport":[{"name":"大连周水子国际机场"},{"name":"大连站"},{"name":"大连北站"},{"name":"金州站"}],"businesses":[{"name":"火车站、青泥洼桥"},{"name":"中山广场、人民路东港商务区"},{"name":"星海广场"},{"name":"西安路商业区"},{"name":"老虎滩"},{"name":"经济技术开发区"},{"name":"付家庄海滨浴场"},{"name":"人民广场、大连市政府"},{"name":"星海公园、圣亚海洋世界"},{"name":"滨海路海度边假区"}]},"哈尔滨":{"airport":[{"name":"哈尔滨太平国际机场"},{"name":"哈尔滨站"},{"name":"哈尔滨东站"},{"name":"哈尔滨西站"}],"businesses":[{"name":"百年中央大街步行&amp;圣索菲亚大教堂"},{"name":"防洪纪念塔及松花江畔（万达购物商圈）"},{"name":"哈尔滨火车站/客运总站（商圈）"},{"name":"商业密集区（地下商业街&amp;远大商场&amp;松雷百货商场）"},{"name":"商业金融中心/果戈里大街"},{"name":"哈尔滨国际会展中心"},{"name":"哈尔滨西火车站&amp;客运站"},{"name":"太阳岛风景区&amp;冰雪大世界（名胜景区）"},{"name":"百年商业区（老道外区）"},{"name":"黑龙江大学/理工大学"}]}
                    };
                /*酒店商标二联查询JSON数据END*/
                /*定义获取json长度函数*/
                function getJsonLength(jsonName){
                    var jsonLength = 0;
                    for(var item in jsonName){
                            jsonLength++;
                    };
                    return jsonLength;
                };
                $(".c3f3s2t3s1-landmark").focus(function(){
                    var isselname = $(".c3f3s2t3s1-bourn").val();
                    var json_city_l = getJsonLength(c3f3s2t3s1_json);
                    /*获取key值*/
                    var c3f3s2t3s1_json_thiskey;
                    for(var item in c3f3s2t3s1_json){ 
                        if(item==isselname){  //item 表示Json串中的属性，如'name' 
                            c3f3s2t3s1_json_thiskey=c3f3s2t3s1_json[item];
                        }            
                    };
                    var json_city_air_html = "";
                    var json_city_businesses_html = "";
                    if (c3f3s2t3s1_json_thiskey == undefined) {

                    }else{
                        var js_air_l = c3f3s2t3s1_json_thiskey.airport.length;
                        var js_bus_l = c3f3s2t3s1_json_thiskey.businesses.length;
                        for (var i = 0; i < js_air_l; i++) {
                            json_city_air_html += "<span class=\"pull-left h-22 line-h-22 pr-14 col-005ea7 cur-p hov-col-e01222 c3f3s2t3s1-show-landmark-dir\">";
                            json_city_air_html += c3f3s2t3s1_json_thiskey.airport[i].name;
                            json_city_air_html += "<\/span> ";
                            
                        };
                        for (var i = 0; i < js_bus_l; i++) {
                            json_city_businesses_html += "<span class=\"pull-left h-22 line-h-22 pr-14 col-005ea7 cur-p hov-col-e01222 c3f3s2t3s1-show-landmark-dir\">";
                            json_city_businesses_html += c3f3s2t3s1_json_thiskey.businesses[i].name;
                            json_city_businesses_html += "<\/span>";
                            
                        };
                        $(".c3f3s2t3s1-show-landmark-airportbox").html(json_city_air_html);
                        $(".c3f3s2t3s1-show-landmark-businessesbox").html(json_city_businesses_html);
                        $(".c3f3s2t3s1-show-landmark").show();
                        $(".c3f3s2t3s1-show-landmark-dir").click(function(){
                            var name = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                            $(".c3f3s2t3s1-landmark").val(name);
                            $(".c3f3s2t3s1-show-landmark").hide();
                        });
                    };
                });
                var c3f3s2t3s1_stv2;
                $(".c3f3s2t3s1-landmark").mouseleave(function(){
                    $(".c3f3s2t3s1-landmark").blur();
                    c3f3s2t3s1_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t3s1-show-landmark").hide();
                    };
                });
                $(".c3f3s2t3s1-show-landmark").mouseleave(function(){
                    c3f3s2t3s1_stv2 = setTimeout(function(){st()},350);
                    function st(){
                        $(".c3f3s2t3s1-show-landmark").hide();
                    };
                });
                $(".c3f3s2t3s1-show-landmark").mouseenter(function(){
                    clearTimeout(c3f3s2t3s1_stv2);
                    $(".c3f3s2t3s1-show-landmark").show();
                });
                $(".c3f3s2t3s1-form").validate({
                    rules: {
                        n_bourn: {
                            required: true
                        },
                        n_ckeck_time: {
                            required: true
                        },
                        n_out_time: {
                            required: true
                        },
                        n_landmark: {
                            required: true
                        },
                    },
                    messages: {
                        n_bourn: {
                            required: "请选择目的地"
                        },
                        n_ckeck_time: {
                            required: "请选择入住时间",
                        },
                        n_out_time: {
                            required: "请选择离店时间",
                        },
                        n_landmark: {
                            required: "请选择酒店商圈",
                        },
                    },
                    errorPlacement: function(error, element) {  
                        error.appendTo(element.next("div"));  
                    },
                    submitHandler: function(form) {
                        var bourn_val = $(".c3f3s2t3s1-bourn").val();
                        var ckeck_time_val = $(".c3f3s2t3s1-ckeck-time").val();
                        var out_time_val = $(".c3f3s2t3s1-out-time").val();
                        var landmark_val = $(".c3f3s2t3s1-landmark").val();
                        layer.alert('<p>目的地：<span class="col-527cdb ml-10" >'+bourn_val+'</span></p><p>入住时间：<span class="col-527cdb ml-10" >'+ckeck_time_val+'</span></p><p>离店时间：<span class="col-527cdb ml-10" >'+out_time_val+'</span></p><p>酒店/商圈/地标：<span class="col-527cdb ml-10" >'+landmark_val+'</span></p>',{
                            icon: 6,
                            title:"表单提交事件！",
                        });
                    },
                });
            /*右四相关弹层和js*/
                $(".c3-f3-s2-t4-s1-depart-c1").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s1").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-depart-c2").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s2").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-depart-c3").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s3").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-depart-c4").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s4").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-depart-c5").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s5").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-depart-c6").click(function(){
                    $(".c3-f3-s2-t4-s1-depart-s").hide();
                    $(".c3-f3-s2-t4-s1-depart-s6").show();
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-depart-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t4s1-depart").focus(function(){
                    $(".c3f3s2t4s1-depart").val("");
                    $(".c3f3s2t4s1-show-depart").show();
                });
                $(document).click(function(event) {
                    event.stopPropagation();
                    var target=event.target;
                    if (!$(target).closest(".c3f3s2t4s1-show-depart").length>0 && !$(target).closest(".c3f3s2t4s1-depart").length>0) {
                        $(".c3f3s2t4s1-show-depart").hide();
                     };
                });
                $(".c3f3s2t4s1-depart-decity").click(function(event){
                    //取值并去除所有空格
                    var dname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t4s1-depart").val(dname);
                    $(".c3f3s2t4s1-show-depart").hide();
                    event.stopPropagation();
                    $(".c3f3s2t4s1-arrive").focus();
                    $(".c3f3s2t4s1-show-arrive").show();
                });
                $(".c3-f3-s2-t4-s1-arrive-c1").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s1").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-arrive-c2").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s2").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-arrive-c3").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s3").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-arrive-c4").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s4").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-arrive-c5").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s5").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3-f3-s2-t4-s1-arrive-c6").click(function(){
                    $(".c3-f3-s2-t4-s1-arrive-s").hide();
                    $(".c3-f3-s2-t4-s1-arrive-s6").show();
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("bg-c81623i");
                    $(".c3-f3-s2-t4-s1-arrive-c").removeClass("col-fffi");
                    $(this).addClass("bg-c81623i");
                    $(this).addClass("col-fffi");
                });
                $(".c3f3s2t4s1-arrive").focus(function(){
                    $(".c3f3s2t4s1-arrive").val("");
                    $(".c3f3s2t4s1-show-arrive").show();
                });
                $(document).click(function(event) {
                    event.stopPropagation();
                    var target=event.target;
                    if (!$(target).closest(".c3f3s2t4s1-show-arrive").length>0 && !$(target).closest(".c3f3s2t4s1-arrive").length>0) {
                        $(".c3f3s2t4s1-show-arrive").hide();
                     };
                });
                $(".c3f3s2t4s1-arrive-decity").click(function(){
                    //取值并去除所有空格
                    var dname = $(this).text().replace(/(^\s*)|(\s*$)/g, "");
                    $(".c3f3s2t4s1-arrive").val(dname);
                    $(".c3f3s2t4s1-show-arrive").hide();
                });
                $(".c3f3s2t4s1-changes").click(function(){
                    var decity = $(".c3f3s2t4s1-depart").val();
                    var arrcity = $(".c3f3s2t4s1-arrive").val();
                    $(".c3f3s2t4s1-depart").val(arrcity);
                    $(".c3f3s2t4s1-arrive").val(decity);
                });
                $(".c3f3s2t4s1-changes").mouseenter(function(){
                    $(this).addClass("bg-main-banner-right-bgv6-hov");
                    $(this).removeClass("bg-main-banner-right-bgv6");
                });
                $(".c3f3s2t4s1-changes").mouseleave(function(){
                    $(this).addClass("bg-main-banner-right-bgv6");
                    $(this).removeClass("bg-main-banner-right-bgv6-hov");
                });
                var c3f3s2t4s1_data = laydate.render({
                    elem: '.c3f3s2t4s1-data',
                    value: new Date(),
                    showBottom: false,
                    calendar: true,
                    min: 0,
                    format: 'yyyy/MM/dd',
                });
                $("#c3f3s2t4s1_stu").click(function(){;
                    if ($('#c3f3s2t4s1_stu').prop('checked')) {
                        $(".c3f3s2t4s1_sub").html("查询学生票");
                    }else{
                        $(".c3f3s2t4s1_sub").html("火车票查询");
                    };
                });
                $(".c3f3s2t4s1-form").validate({
                    rules: {
                        n_depart: {
                            required: true
                        },
                        n_arrive: {
                            required: true
                        },
                    },
                    messages: {
                        n_depart: {
                            required: "请选择出发城市"
                        },
                        n_arrive: {
                            required: "请选择到达城市",
                        },
                    },
                    errorPlacement: function(error, element) {  
                        error.appendTo(element.next("div"));  
                    },
                    submitHandler: function(form) {
                        var departcity_val = $(".c3f3s2t4s1-depart").val();
                        var arrivalcity_val = $(".c3f3s2t4s1-arrive").val();
                        var c3f3s2t2s1_data_val = $(".c3f3s2t4s1-data").val();
                        var checkboxv1;
                        var checkboxv2;
                        if ($('#c3f3s2t4s1_ht').prop('checked')) {
                            checkboxv1 = "是";
                        }else{
                            checkboxv1 = "否";
                        };
                        if ($('#c3f3s2t4s1_stu').prop('checked')) {
                            checkboxv2 = "是";
                        }else{
                            checkboxv2 = "否";
                        };
                        if ($(".c3f3s2t2s1-datav2").css('display') =='none') {
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_data_val+'</span></p><p>仅（高铁/动车）：<span class="col-527cdb ml-10" >'+checkboxv1+'</span></p><p>学生票：<span class="col-527cdb ml-10" >'+checkboxv2+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }else{
                            layer.alert('<p>出发城市：<span class="col-527cdb ml-10" >'+departcity_val+'</span></p><p>到达城市：<span class="col-527cdb ml-10" >'+arrivalcity_val+'</span></p><p>出发日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_data_val+'</span></p><p>返程日期：<span class="col-527cdb ml-10" >'+c3f3s2t2s1_datav2_val+'</span></p>',{
                                icon: 6,
                                title:"表单提交事件！",
                            });
                        }
                        
                    },
                });
        /*右侧第三层弹出部分相关jsEND*/
    /*主要展示END*/
    /*京东秒杀*/
        /*秒杀计时器模拟计时*/
            var seckill_timer = setInterval(function(){seckilltime()},1000);
            function seckilltime(){
                var _timeout = new Date(new Date().setHours(23, 59, 59, 999));
                var _timeout_ms = _timeout.getTime();
                var _time_ms = new Date().getTime();
                var diff_ms = _timeout_ms-_time_ms;

                /*天*/
                var days = Math.floor(diff_ms/(24*3600*1000));
                var days_ms = diff_ms%(24*3600*1000);
                /*小时*/
                var hours = Math.floor(days_ms/(3600*1000));
                var hours_ms = days_ms%(3600*1000);
                /*分钟*/
                var minutes = Math.floor(hours_ms/(60*1000));
                var minutes_ms = hours_ms%(60*1000);
                /*秒*/
                var seconds = Math.floor(minutes_ms/1000);//取秒
                if (hours <0) {
                    hours = "00";
                }else{
                    hours = "01";
                };
                if (minutes <0) {
                    minutes = "00";
                };
                if (seconds <0) {
                    seconds = "00";
                };
                if (minutes <10) {
                    minutes = "0"+minutes;
                };
                if (seconds <10) {
                    seconds = "0"+seconds;
                };
                $(".skill_time_hours").text(hours);
                $(".skill_time_minutes").text(minutes);
                $(".skill_time_seconds").text(seconds);
            };
        /*秒杀左侧 swiper定义*/
        var seckill_l_swiper = new Swiper('#seckill_l_swiper', {
            //autoplay: true,
            slidesPerView : 5,
            slidesPerGroup : 5,
            loop : true,
            breakpoints: { 
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 4,
                },
            },
        });
        /*var seckill_l_swiper = new Swiper('#main-banner-swiper', {
            loop: true,
            autoplay: {
                delay: 2500,//5秒切换一次
            },
            autoplayDisableOnInteraction: false,
            effect: 'fade',
            pagination: {
                el: '#main-banner-swiper-pagination',
            },
            navigation: {
                nextEl: '#main-banner-swiper-button-next',
                prevEl: '#main-banner-swiper-button-prev',
            },
        });*/
        /*$('#main-banner-swiper .swiper-pagination').on('mouseover', 'span', function() {
            var index = $(this).index();
            mainbannerswiper.slideTo(index + 1);
        });*/
});
                