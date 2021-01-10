$(document).ready(function(){


    //Banner Owl Carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        // nav:true
    });

    //Top Sale owl Carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
        
    })
})