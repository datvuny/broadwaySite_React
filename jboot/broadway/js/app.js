$(document).ready(function(){
    $(window).on('load', function(){
        $('.preloader').addClass('complete')
    })
    $(window).on('scroll',function(){
        const scroll = $(window).scrollTop()
        if(scroll>=50){
            $('.sticky').addClass('stickyadd')
        } else {
            $('.sticky').removeClass('stickyadd')
        }
    })

   


     

      
})