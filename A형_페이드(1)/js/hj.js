$(document).ready(function(){
    var count = 0;
    var total = $("#slider li").length
    setInterval(function(){
        count++
        count%=total
        $("#slider li").removeClass('show');
        $("#slider li").eq(count).addClass('show')

    },3000);
    $('.not_gall_Box > div > a').click(function(){
        $('.not_gall_Box > div').removeClass('on')
        $(this).parent().addClass('on');
    })
    $('.firstli').click(function(){
        $('.pop').removeClass('d-none')
    })
    $('.pop > button').click(function(){
        $('.pop').addClass('d-none')
    })
})