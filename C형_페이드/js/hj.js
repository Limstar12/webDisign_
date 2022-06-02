$(document).ready(function(){
    var count = 0
    var total = $('.slider li').length;

    setInterval(function(){
        count ++;
        count%=total;

        $('.slider li').removeClass('show')
        $('.slider li').eq(count).addClass('show')
    }, 3000)

    $('.noti_gall_Box > div > a').click(function(){
        $('.noti_gall_Box > div').removeClass('on')
        $(this).parent().addClass('on')
    })

    $('.noti_1').click(function(){
        $('.pop').removeClass('d-none')    
    })
    $('.pop>button').click(function(){
        $('.pop').addClass('d-none')    
    })
})