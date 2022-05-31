$(document).ready(function(){
    var dr=-1
    var px=$('#slider').width();

    setInterval(function(){
        $('#slider ul').animate({"marginLeft":dr*px},400,function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('margin-left',0)
        })
    },3000)

    $('.no_gal_Box > div > a').click(function(){
        $('.no_gal_Box > div').removeClass('on')
        $(this).parent().addClass('on')
    })

    $('.noti_text1').click(function(){
        $('.popBox').removeClass('d-none')
    })
    $('.popBox button').click(function(){
        $('.popBox').addClass('d-none')
    })
})