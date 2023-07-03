        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>400){
                    $(".up-btn").addClass("on");
                }else{
                    $(".up-btn").removeClass("on");
                }
            })

            $(".up-btn").click(function(){
                $('html, body').stop().animate({scrollTop: 0}, 500);
            })
        })