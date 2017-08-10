$(document).ready(function(){
    /*返回顶部*/
    $(window).scroll(function(){  
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;  
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;  
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;  
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；  
        
        var headerheight = $("header").height();
        var bannerheight = $(".swiperv1").height();
        if(scrollTop<headerheight){  
            $(".bouyv1").hide();
        }
        if(scrollTop>=headerheight && scrollTop<headerheight+bannerheight){  
            var vss = (scrollTop-headerheight)/bannerheight;
            var strvss = "rgba(194,152,107,"+vss+")"
            $(".bouyv1").show();
            $(".bouyv1").css({"background":strvss});
        }
        if(scrollTop>=headerheight+bannerheight){  
            $(".bouyv1").show();
            $(".bouyv1").addClass("bg-C2986B");
        }
    })
    $(".bouyv1").click(function(){
        var speed=200;
        $('body,html').animate({ scrollTop: 0}, speed);
    });

    /*移动添加遮罩*/
    $(".maks").bind("mouseenter mouseleave",function(e) {
        var w = $(this).width();
        var h = $(this).height();
        var off = $(this).offset(); 
        var offt = off.top;
        var offl = off.left;
        var x = (e.pageX - offl - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - offt - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        //console.log(direction);
        //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
        var eventType = e.type;
        //console.log(e.type);
        if(e.type == 'mouseenter'){
            if(direction==0){
                $(this).find('.maksing').css({'display':'block','top':-h+'px','left':'0px'}).animate({'top':'0px'});
                }else if(direction==1){
                $(this).find('.maksing').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'0px'});
                }else if(direction==2){
                $(this).find('.maksing').css({'display':'block','top':h+'px','left':'0px'}).animate({'top':'0px'});
                }else if(direction==3){
                $(this).find('.maksing').css({'display':'block','left':-w+'px','top':'0px'}).animate({'left':'0px'});
            }
          }else{
                if(direction==0){
                $(this).find('.maksing').animate({'top':-h+'px'});
                }else if(direction==1){
                $(this).find('.maksing').animate({'left':w+'px'});
                }else if(direction==2){
                $(this).find('.maksing').animate({'top':h+'px'});
                }else if(direction==3){
                $(this).find('.maksing').animate({'left':-w+'px'});
                }
          }
      });
});





$(document).ready(function(){
    /*返回顶部*/
    $(window).scroll(function(){  
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;  
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;  
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;  
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；  
        
        var headerheight = $("header").height();
        var bannerheight = $(".swiperv1").height();
        if(scrollTop<headerheight){  
            $(".bouyv1").hide();
        }
        if(scrollTop>=headerheight && scrollTop<headerheight+bannerheight){  
            var vss = (scrollTop-headerheight)/bannerheight;
            var strvss = "rgba(194,152,107,"+vss+")"
            $(".bouyv1").show();
            $(".bouyv1").css({"background":strvss});
        }
        if(scrollTop>=headerheight+bannerheight){  
            $(".bouyv1").show();
            $(".bouyv1").addClass("bg-C2986B");
        }
    })
    $(".bouyv1").click(function(){
        var speed=200;
        $('body,html').animate({ scrollTop: 0}, speed);
    });

    /*移动添加遮罩*/
    $(".maks").bind("mouseenter mouseleave",function(e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        //console.log(direction);
        //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
        var eventType = e.type;
        //console.log(e.type);
        if(e.type == 'mouseenter'){
            if(direction==0){
                $(this).find('.maksing').css({'display':'block','top':-h+'px','left':'0px'}).animate({'top':'0px'});
                }else if(direction==1){
                $(this).find('.maksing').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'0px'});
                }else if(direction==2){
                $(this).find('.maksing').css({'display':'block','top':h+'px','left':'0px'}).animate({'top':'0px'});
                }else if(direction==3){
                $(this).find('.maksing').css({'display':'block','left':-w+'px','top':'0px'}).animate({'left':'0px'});
            }
          }else{
                if(direction==0){
                $(this).find('.maksing').animate({'top':-h+'px'});
                }else if(direction==1){
                $(this).find('.maksing').animate({'left':w+'px'});
                }else if(direction==2){
                $(this).find('.maksing').animate({'top':h+'px'});
                }else if(direction==3){
                $(this).find('.maksing').animate({'left':-w+'px'});
                }
          }
      });

});





