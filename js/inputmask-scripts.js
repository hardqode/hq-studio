$(document).ready(function () {


    $('[data-inputmask]').inputmask({
        jitMasking: false
    });

    $('input[required]').on('change', function () {

        if ($(this).attr('data-inputmask')) {

            if ($(this).inputmask("isComplete")) {
                if ($(this).hasClass('error')) {
                    $(this).removeClass('error')
                }
            } else {
                $(this).addClass('error');
            }
        } else {
            if ($(this).val() === '') {
                $(this).addClass('error');
            } else {
                if ($(this).hasClass('error')) {
                    $(this).removeClass('error')
                }
            }
        }

    });
});