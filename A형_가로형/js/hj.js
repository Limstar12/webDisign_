$(document).ready(function(){
    var px = $("#slider").width();
    var dir = -1;

    setInterval(function(){
        $("#slider ul").animate({"marginLeft":px*dir},400,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left",0)
        });
    },3000)

    $('.tabBox > div > a').click(function(){
        $('.tabBox > div').removeClass('on')
        $(this).parent().addClass('on')
    })
})