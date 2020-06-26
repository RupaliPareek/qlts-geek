$(document).ready(() => {
    console.log('ready');
    $('.navbar_wraper').load('../components/navbar.html');
    $('.footer_wraper').load('../components/footer.html');

});

$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
            loop: false
        }
    }
})