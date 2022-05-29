$(document).ready(function(){
    var count=0
    var total=$('.slider li').length;

    setInterval(function(){
        count++;
        count%=total;

        $('.slider li').removeClass('show')
        $('.slider li').eq(count).addClass('show')
    },3000)

    $('.noti_Text1').click(function(){
        $('.popBox').removeClass('d-none')
    })
    $('.popBox button').click(function(){
        $('.popBox').addClass('d-none')
    })
})

