/*==================常用函数=====================*/
//判断:当前元素是否是被筛选元素的子元素 
jQuery.fn.isChildOf = function(b){ return (this.parents(b).length > 0); }; 
//判断:当前元素是否是被筛选元素的子元素或者本身 
jQuery.fn.isChildAndSelfOf = function(b){ return (this.closest(b).length > 0); };
/*================页脚固定在底部===========*/

  $(window).bind("load resize",function(){
    var h=$(".footer").height();
    $(".wrap").css({paddingBottom:h+20+'px'});
    $(".footer").css({marginTop:(-h)+'px'})
  })
/*=================搜索提示框====================*/
$(".search-con").on("click",function(){
  $(".search-list").show();
  var l=$(".search-list li").length;
  var s=-1;
  $("#searchTitle").keydown(function(event){ 
    var key=event.keyCode; 
    if (key==38) {
      l--;
      $(".search-list li").eq(l).css("background","#e7e8eb").siblings().css("background","#fff");    
      if (l<0) {l=$(".search-list li").length-1;};
      s=l;
      $("#searchTitle").val($(".search-list a").eq(l).html());
    };
    if (key==40) {
      s++;
      if (s==$(".search-list li").length) {s=0};
      $(".search-list li").eq(s).css("background","#e7e8eb").siblings().css("background","#fff");
      l=s;
      $("#searchTitle").val($(".search-list a").eq(l).html());
    };
    if(key==13){search()}
  }); 
})
$(".search").mouseleave(function(event){
  $(".search-list").hide();
})



/*===================下拉框======================*/
function selLeave(_this){
  $(_this).on("mouseleave",function(){
    $(_this).find(".opt-ck").hide();
    $(_this).find("i").removeClass("icon-caret-up");
    $(_this).find("i").addClass("icon-caret-down");
  })
}
$(function(){
	

/*
  点击效果
*/  
    $(".sel-ck").on("click",function(e){
      var e=e||window.event;
      e.stopPropagation();
      if($(this).find(".opt-ck").is(":visible")){
         $(this).find("i").removeClass("icon-caret-up");
         $(this).find("i").addClass("icon-caret-down");
         $(this).find(".opt-ck").hide();
      }else{
         $(this).find(".opt-ck").show();   
         $(this).find("i").removeClass("icon-caret-down");
         $(this).find("i").addClass("icon-caret-up");
      }
    })
    $(".opt-ck").each(function(){
	    $(this).on("click","li",function(){
		    $(this).parent().parent(".sel-ck").find(".s-input span").html($(this).html());
	    })
    })
//   $(".opt-ck li").on("click",function(){
//	   alert(1);
//      $(this).parent().parent(".sel-ck").find(".s-input span").html($(this).html());  
//   })
   $("body").on("click",function(){
      $(".sel-ck").find(".opt-ck").hide();
      $(".sel-ck").find("i").removeClass("icon-caret-up");
      $(".sel-ck").find("i").addClass("icon-caret-down");
   })
/*
  hover效果
*/
   $(".sel-hv").hover(function(){
      $(this).find(".opt-hv").show();
      $(this).find("i").removeClass("icon-caret-down");
      $(this).find("i").addClass("icon-caret-up");
   },function(){
      $(this).find(".opt-hv").hide();
      $(this).find("i").removeClass("icon-caret-up");
      $(this).find("i").addClass("icon-caret-down");
   })
   $(".opt-hv li").click(function(){
      $(this).parent().parent(".sel-hv").find(".s-input span").html($(this).html());
      $(this).parent().hide(); 
   })
})


/*===================选项卡======================*/
jQuery.Tab =function(tabbar,tabCon,class_name,tabEvent,i){
    var $tab_menu=$(tabbar);
      /*初始化操作*/
      $tab_menu.removeClass(class_name);
      $(tabbar).eq(i).addClass(class_name);
      $(tabCon).hide();
      $(tabCon).eq(i).show(); 
      $tab_menu.bind(tabEvent,function(){
        $tab_menu.removeClass(class_name);
          $(this).addClass(class_name);
          var index=$tab_menu.index(this);
          $(tabCon).hide();
          $(tabCon).eq(index).show();
      });
}
/*选项卡一*/
$(function(){
   $.Tab("#tab_demo1 .tabbar span","#tab_demo1 .tabcon","current","click","0");
});
/*选项卡二*/
$(function(){
   $.Tab("#tab_demo2 .tabbar span","#tab_demo2 .tabcon","current","click","0");
});
/*选项卡三*/
$(function(){
   $.Tab("#tab_demo3 .tabbar div","#tab_demo3 .tabcon","current","mouseover","0");
});
/*#tab_demo 父级id
   #tab_demo .tabbar span 控制条
   #tab_demo .tabCon 内容区
   click 事件 点击切换，可以换成mousemove 移动鼠标切换
   1  默认第2个tab为当前状态（从0开始）
   ps:只要id不重复，同一个页面可以插入多个tab
*/
/*===================折叠======================*/
jQuery.fold = function(obj,obj_c,speed,obj_type,Event){
//      $(obj_c+":first").show();
	$(".tit-current").parents(".info").show();
	$(".tit-current").parents(".item").find("b").html("-");
//      $(obj+":first").find("b").html("-");
      if(obj_type == 2){
         $(obj+":first").find("b").html("-");
         $(obj_c+":first").show();
      }
      $(obj).bind(Event,function(){
         if($(this).next().is(":visible")){
            if(obj_type == 2){
               return false;
            }
            else{
               $(this).next().slideUp(speed);
               $(this).find("b").html("+");
            }
         }
         else{
            if(obj_type == 3){
               $(this).next().slideDown(speed);
               $(this).find("b").html("-");
            }else{
               $(obj_c).slideUp(speed);
               $(obj).find("b").html("+");
               $(this).next().slideDown(speed);
               $(this).find("b").html("-");
            }
         }
      });
   }
/*初始化*/
$(function(){
   $.fold("#fold1 .item h4","#fold1 .item .info","fast",1,"click"); 
});
/*5个参数顺序不可打乱，分别是：相应区,隐藏显示的内容,速度,类型,事件。
  ps:三种切换风格(1,2,3)
*/
/* 弹出层*/
function modal_show(){
  
  $(".show").show();
}
function show(b){
	
	$("#"+b).fadeToggle(200);
}

$(".show").on("click",function(event){
	 event.stopPropagation();
	 var target=event.target;
	 if (!$(target).closest(".modal-content").length>0||$(target).attr("class").indexOf("close-mod")!=-1) {
		$(".show").hide()
	 };
})


/*数量增加减*/
  // $(".add").on("click",function(){
  //   $(".dec").removeAttr("disabled");
  //   $(".dec").css({"background":"#e7e8eb","color":"#333"});
  //   var a=parseInt($(".goods-num").val())+1;
  //   $(".goods-num").val(a);


  // })
  // $(".dec").on("click",function(){        
  //   var a=parseInt($(".goods-num").val())-1;
  //   if (a<=1) {
  //     a=1;
  //     $(".dec").css({"background":"#f2f2f2","color":"#999"});
  //     $(".dec").attr("disabled","disabled")
  //   };
  //   $(".goods-num").val(a);
  //  })