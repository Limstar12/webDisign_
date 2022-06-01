// $(document).ready(function(){
//     var dir=-1
//     var px=$('.slider').height();

//     setInterval(function(){
//         $('.slider ul').animate({"marginTop":dir*px},400,function(){
//             $(this).find('li').eq(0).appendTo($(this));
//             $(this).css('margin-top', 0)
//         })
//     },3000)
// })



$(document).ready(function(){
    dir = -1;
    px = $('.slider').height();

    setInterval(function(){
        $('.slider ul').animate({"marginTop":dir*px}, 400, function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('margin-top',0)
        })
    }, 3000)

    $('.noti_Text1').click(function(){
        $('.popup').removeClass('d-none')
    })

    $('.pop_text > button').click(function(){
        $('.popup').addClass('d-none')
    })
})














