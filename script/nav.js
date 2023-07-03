        $(function(){ //nav fadeIn
            $(window).scroll(function(){
                if($(this).scrollTop()>960){
                    $("#nav,.search_screen,.menu_screen").fadeOut();
                    $(".menu_screen").removeClass("on")
                    $(".search_screen").removeClass("on")
                }else{
                    $("#nav,.search_screen,.menu_screen").fadeIn();
                }
            })

            /*$(".search").click(function(){
                $("#nav").css({background:"#fff"})
                $(".search_screen").css({display:"block",height:"50vh"})
                $(".search_box").show()

            })*/

            $(".menu-opacity,.search_screen,.menu_screen").on('scroll touchmove mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation(); 
                return false;
                })

            $(".search").click(function(){
                $(".search_screen").toggleClass("on")
                $(".menu_screen").removeClass("on")

                if($(".search_screen").hasClass("on")){
                    $(".menu-opacity").addClass("on")
                    }else{
                        $(".menu-opacity").removeClass("on")
                    }
            })

            $(".menu").change(function(){
                $(".menu_screen").toggleClass("on")
                $(".search_screen").removeClass("on")

                if($(".menu_screen").hasClass("on")){
                    $(".menu-opacity").addClass("on")
                    }else{
                        $(".menu-opacity").removeClass("on")
                    }
            })

            $(".menu_list>li").mouseover(function(){
                $(this).find(".menu_sebu_list").stop().slideDown()
            })
            $(".menu_list>li").mouseout(function(){
                $(this).find(".menu_sebu_list").stop().slideUp()
            })
        })