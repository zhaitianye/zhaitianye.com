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
/*输入框部分未完善*/
/*$(document).ready(function(){
	$(".searchinput").focusin(function(){
		$(".searchinput").removeClass("col-999");
		$(".searchinput").addClass("col-666");
		clearInterval(setmaininputvalsfive);
		$(".searchinput").val("");
	});
	$(".searchinput").focusout(function(){
		$(".searchinput").removeClass("col-666");
		$(".searchinput").addClass("col-999");
		if($(".searchinput").val() == ""){
			var setmaininputvalsone = setmaininputvals();
		}
		else{
			var maininoutvalfocuout = $(".searchinput").val();
			return  maininoutvalfocuout;
		}
	});
	var setmaininputvalsone = setmaininputvals();
	var setmaininputvalsfive = setInterval(function(){setmaininputvals()},1000);
	function setmaininputvals(){
		var maval = maininputvals();
		$(".searchinput").val(maval);
  	}

	function maininputvals(){
		var inputvals = new Array();
		var id = Math.ceil(Math.random()*9);
		inputvals = ['地球仪','电子琴','BB霜','九阳榨汁机','智能马桶','低至七折','派克钢笔','机械键盘','保险箱','88购物街抢百万购物神劵'];
		var maininputvals = inputvals[id];
		return maininputvals;
	};
});*/