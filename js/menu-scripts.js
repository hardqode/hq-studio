function animateBurger(state){
    var paths = $('#menu-toggle').find('path');
    var svg = $('#menu-toggle').find('svg');
    if(state === 'close'){
        $(paths[0]).attr('d','M2.42234e-05 1.46667L20.5332 22L21.9999 20.5333L1.46668 2.27062e-06L2.42234e-05 1.46667Z');
        $(paths[1]).attr('d','M20.5332 -6.01877e-06L0 20.5333L1.46666 22L21.9998 1.46666L20.5332 -6.01877e-06Z');
        $(paths[2]).hide()
        $(svg).attr('viewBox','0 0 22 22');
    } else {
        $(paths[0]).attr('d','M28 0H0V2H28V0Z');
        $(paths[1]).attr('d','M28 8H0V10H28V8Z');
        $(paths[2]).show();
        $(svg).attr('viewBox','0 0 28 18');
    }

}
//pretty menu slide form top
$('#menu-toggle').on('click', function () {
    if (!$('.menu-modal-section').is(':hidden')) {
        $('.menu-modal-section').slideToggle(200, function () {
            $('body').toggleClass('modal-open')
        });
        animateBurger('open')
    } else {
        $('.menu-modal-section').slideToggle(200);
        $('body').toggleClass('modal-open')
        animateBurger('close');
    }
});
//read-more link arrow rotating
$('#menu-read-more-btn').on('click',function () {
    var svg = $(this).find('svg');
    if ($(this).attr('aria-expanded') !== "true"){
        svg.css('transform','rotateZ(180deg)');
    }else{
        svg.css('transform','rotateZ(0)');
    }
});
