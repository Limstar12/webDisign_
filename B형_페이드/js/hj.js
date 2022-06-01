$(document).ready(function(){
    var total = $('.slider li').length;
    var count = 0;

    setInterval(function(){
        count ++;
        count%=total

        $('.slider li').removeClass('show')
        $('.slider li').eq(count).addClass('show')
    },3000)

    $('.noti_text1').click(function(){
        $('.pop').removeClass('d-none')
    })
    $('.pop>button').click(function(){
        $('.pop').addClass('d-none')
    })
})