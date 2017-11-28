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
                autoplay: 2500,
                effect: 'fade',
                autoplayDisableOnInteraction: false,
                pagination: '#main-banner-swiper-pagination',
                nextButton: '#main-banner-swiper-button-next',
                prevButton: '#main-banner-swiper-button-prev',
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
        /*右侧第三层相关表单验证以及相关*/
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
            
        /*右侧第三层相关表单验证END*/
    /*主要展示END*/
});
                