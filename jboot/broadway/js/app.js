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

window.onload = function() {
    let likeBtn = document.querySelector("#like-btn");
    let showLikes = document.querySelector("#show-likes");
    let likes = parseInt(localStorage.getItem("likes")) || 201;
    showLikes.innerHTML = countLikes(likes);
  
    likeBtn.addEventListener("click", (e) => {
      likes++; // Increment the likes counter by 1
      showLikes.innerHTML = countLikes(likes);
      localStorage.setItem("likes", likes); // Store the updated likes count in localStorage
      console.log(countLikes(likes));
    });
  
    function countLikes(likes) {
        return likes;
      }
    }
  