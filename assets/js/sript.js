
$(function(){
    if(window.matchMedia("(max-width: 600px)").matches) {
        $(".galleryContent").slick({
            infinite: true,
            slideToShow: 3,
            slidesToScroll: 3,
            nextArrow : false,
            prevArrow : false

        });};

});



// $(function(){
//     if(window.matchMedia("(max-width: 768px)").matches) {
//         $(".galleryContent").slick({infinite:true, slidesToShow: 3, SlidesToScroll: 3, arrow: false})
//     }
// });