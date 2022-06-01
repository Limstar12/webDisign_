$(document).ready(function(){
    var dir=-1
    var fx=$('.slider').width();

    setInterval(function(){
        $('.slider ul').animate({"marginLeft":dir*fx},400, function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('margin-left',0)
        })
    },3000)

    $('.noti_text1').click(function(){
        $('.pop_up').removeClass('d-none')
    })
    $('.pop_up > button').click(function(){
        $('.pop_up').addClass('d-none')
    })
})