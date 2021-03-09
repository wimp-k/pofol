$(document).ready(function(){
    //var numAc = $("article").size();
    var numAc = $("article").length;
    var widSec = 200*numAc;
    var widTotal = widSec+600;

    $("section").width(widTotal);
    $("body").height(widSec);
    $("html,body").animate({"scrollTop":widSec},2000);

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        $("section").stop().animate({"left":-scroll},1000);
    })
    $("article h2").click(function(e){
        e.preventDefault();
        var index = $(this).parent().index();
        var src = $(this).children("a").attr("href");
        var posAc = 200*index;

        $("article").removeClass("on");
        $(this).parent().addClass("on");
        $("article p img").attr({"src":""});
        $(this).siblings("p").children("img").attr({"src":src});
        $("html,body").scrollTop(posAc);
    })

    $("article strong").click(function(e){
        e.preventDefault();
        var index = $(this).parent().index();
        var src = $(this).siblings("h2").children("a").attr("href");
        var posAc = 200*index;

        $("article").removeClass("on");
        $(this).parent().addClass("on");
        $("article p img").attr({"src":""});
        $(this).siblings("p").children("img").attr({"src":src});
        $("html,body").scrollTop(posAc);
    });

    $("span,article p").click(function(){
        $("article").removeClass("on");
    });

    $("#navi li").click(function(){
        var i = $(this).index();
        var posNavi = 1000*i;
        $("navi li, article").removeClass();
        $(this).addClass("on");
        $("html,body").scrollTop(posNavi);
    });
});