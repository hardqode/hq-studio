function getSquad(rLR, rRL, rTB, rBT) {
    if (rLR > rRL) {
        if (rTB > rBT) {
            return '4'
        } else {
            return '3'
        }
    } else {
        if (rTB > rBT) {
            return '1'
        } else {
            return '2'
        }
    }
}

function scaleImage() {
    $(this).on('mousemove', function (e) {
        var parentOffset = $(this).offset();
        var rLR = e.pageX - parentOffset.left;
        var rTB = e.pageY - parentOffset.top;
        var w = $(this).width();
        var h = $(this).height();
        var rRL = w - rLR;
        var rBT = h - rTB;
        var rx, ry, tx, ty;
        var rKF = 5;
        var tKF = 1;

        switch (getSquad(rLR, rRL, rTB, rBT)) {
            case '1':
                rx = (rTB / h) * rKF;
                ry = (rRL / w) * rKF;
                tx = -(rRL / w) * tKF;
                ty = (rTB / h) * tKF;
                break;
            case '2':
                rx = -(rBT / h) * rKF;
                ry = (rRL / w) * rKF;
                tx = -(rRL / w) * tKF;
                ty = -(rBT / h) * tKF;
                break;
            case '3':
                rx = -(rBT / h) * rKF;
                ry = -(rLR / w) * rKF;
                tx = (rLR / w) * tKF;
                ty = -(rBT / h) * tKF;
                break;
            case '4':
                rx = (rTB / h) * rKF;
                ry = -(rLR / w) * rKF;
                tx = (rLR / w) * tKF;
                ty = (rTB / h) * tKF;
                break;
            default:
                return
        }

        $(this).css('transform', 'perspective(1200px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateX(' + tx + 'px) translateY(' + ty + 'px) scale(1.02)');
        // $(this).css('-webkit-box-shadow', '0px 3px 6px 3px rgba(173,173,173,1)');
        // $(this).css('-moz-box-shadow', '0px 3px 6px 3px rgba(173,173,173,1)');
        // $(this).css('box-shadow', '0px 3px 6px 3px rgba(173,173,173,1)');
        $(this).parent().parent().css('z-index', '4040');

    });

}

function resetScale() {
    $(this).css('transform', 'perspective(1300px) scale(1)');
    $(this).parent().parent().css('z-index', '1010');

    $(this).off('mousemove')

}

$(document).ready(function () {
    $('.project-item--img').hover(scaleImage, resetScale);
});
