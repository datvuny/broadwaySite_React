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

    const typed = new Typed('.element', {
        strings: ["Dat Vu", "a Software Engineer"],
        smartBackspace:true,
        typeSpeed: 100,
        backSpeed: 150,
        loop:true,
        loopCount: Infinity,
        startDelay: 1000
      })


      const waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
         const p = document.querySelectorAll('.progress-bar')
      p[0].setAttribute('style','width:88%; transition:1s all')
      p[1].setAttribute('style','width:88%; transition:1.5s all')
      p[2].setAttribute('style','width:83%; transition:1.7s all')
      p[3].setAttribute('style','width:60%; transition:2s all')
      p[4].setAttribute('style','width:79%; transition:2.3s all') 
        },
        offset:'90%'
      })
     

      
})