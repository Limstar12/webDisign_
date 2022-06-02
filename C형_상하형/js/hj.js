$(document).ready(function(){
    var dir=-1;
    var fx=$('.slider').height();

    setInterval(function(){
        $('.slider ul').animate({"marginTop":dir*fx},400,function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('margin-top',0)
        })
    },3000)
})