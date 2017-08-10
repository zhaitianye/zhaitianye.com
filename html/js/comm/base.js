/*================页脚固定在底部===========*/

  $(window).bind("load resize",function(){
    var h=$(".footer").height();
    $(".wrap").css({paddingBottom:h+20+'px'});
    $(".footer").css({marginTop:(-h)+'px'})
  })
/*=================搜索提示框====================*/
