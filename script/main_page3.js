$(function(){
    $(".page3_con").mouseover(function(){
        $(this).css({height:"100%",margin:"0"}).siblings().css({height:"0%"})
        $(this).siblings().css({"margin-bottom":0,"margin-top":0})
        $(this).find(".page3_img_info").show()
        $(this).find(".page3_img").addClass("on")
    })
    $(".page3_con").mouseleave(function(){
        $(this).css({height:"","margin-bottom":"","margin-top":""}).siblings().css({height:""})
        $(".page3_con").css({"margin-bottom":"","margin-top":""})
        $(this).find(".page3_img_info").hide()
        $(this).find(".page3_img").removeClass("on")
    })

})