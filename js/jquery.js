$(document).ready(function(){
    $flag = 0;

    $("#icon").click(function(){
        if ($flag == 0) {
            $(".line").css({transform:"rotate(-90deg)"});
            $(".open").css({opacity:"0"});
            $(".cl0se").css({left:"0px",opacity:"1"});
            $("header nav").toggle({left:"0%"});
            $flag = 1;
        } else {
            $(".line").css({transform:"rotate(180deg)"});
            $(".open").css({opacity:"1"});
            $(".cl0se").css({left:"70px",opacity:"0"});
            $("header nav").toggle({left:"-70%"});
            $flag = 0;
        }

    });

    $("nav ul li").click(function(){
        $("nav ul li").removeClass("active");
        $(this).addClass("active");
    });


});