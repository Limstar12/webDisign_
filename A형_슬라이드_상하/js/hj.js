$(document).ready(function(){
    var px = $('#slider').height();
    var dr = -1;

    setInterval(function(){
        $('#slider ul').animate({"marginTop":px*dr}, 400, function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css("margin-top",0)
        })
    }, 3000)

    $('.no_gall_Box > div > a').click(function(){
        $('.no_gall_Box > div').removeClass('on')
        $(this).parent().addClass('on')
    })
    $('.firstli > a').click(function(){
        $('.pop').removeClass('d-none')
    })
    $('.button').click(function(){
        $('.pop').addClass('d-none')
    })
})



