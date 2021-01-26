$(document).ready(() => {
    $('.slider').slick({
        dots: true,
        infinity: true,
        slidesToShow: 3,
        centerMode: false,
        arrows: true,
        rows: 2,
        slidesPerRow: 1,
        prevArrow: 
          '<button type="button" class="far fa-angle-left slick-prev">Previous</button>',
        nextArrow: 
          '<button type="button" class="far fa-angle-right slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: false,
                }
            },
        ]
    });
});
