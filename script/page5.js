$(function(){
    $(".page4_img_con").mouseover(function(){
        $(".page4").css({color:"#fff"})
        $(".page4_img_con").css({border:"1px solid #ddd",background:"rgba(0,0,0,0.4)"})
        $(".page4_bg_opacity").css({background:"rgba(0,0,0,0.25)"})
        $(".page4_img_con").css({background:"rgba(0,0,0,0.4)"})
        $(".page4_txt_box p,.page4_img_sub").css({color:"#fff"})
    })
    $(".page4_img_con").mouseover(function(){
        $(this).css({background:"rgba(0,0,0,0.6)"})
    })
    $(".page4_con1").mouseenter(function(){
        $(".page4_bg").css({background:"url(img/check2.jpg)","background-size":"cover"})
        $(this).find(".page4_img_txt").css({display:"block"})
    })
    $(".page4_con2").mouseenter(function(){
        $(".page4_bg").css({background:"url(img/acting.jpg)","background-size":"cover"})
        $(this).find(".page4_img_txt").css({display:"block"})
    })
    $(".page4_con3").mouseenter(function(){
        $(".page4_bg").css({background:"url(img/durability2.jpg)","background-size":"cover"})
        $(this).find(".page4_img_txt").css({display:"block"})
    })
    $(".page4_con4").mouseenter(function(){
        $(".page4_bg").css({background:"url(img/teamwork2.jpg)","background-size":"cover"})
        $(this).find(".page4_img_txt").css({display:"block"})
    })
    $(".page4_con5").mouseenter(function(){
        $(".page4_bg").css({background:"url(img/influence.jpg)","background-size":"cover"})
        $(this).find(".page4_img_txt").css({display:"block"})
    })
    $(".page4_img_con").mouseleave(function(){
        /*$(".page4").css({color:"#333"})
        $(".page4_bg_opacity").css({background:""})*/
        $(".page4_img_con").css({background:"rgba(0,0,0,0.4) url()",border:" "})
        $(this).find(".page4_img_txt").css({display:"none"})
    })
    $(".page4_img_box").mouseleave(function(){
        $(".page4_bg").css({background:""})
    })
    $(".page4_img_box").mouseleave(function(){
        $(".page4").css({color:"#333"})
        $(".page4_img_con").css({border:"",background:""})
        $(".page4_bg_opacity").css({background:""})
        $(".page4_txt_box p").css({color:"#666"})
        $(".page4_img_sub").css({color:"#999"})
    })
});