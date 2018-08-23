//trigger changing input

$('#attach-file').on('click', function () {
    $('#input-info-file').click();
});


//function for deleting files from input

function clearInput() {
    $('#input-info-file').val('');
    $('#input-info-file').trigger('change');
}


//check if input is empty,then showor hide name section

$('#input-info-file').on('change', function () {
    var string = $(this).val();
    var name = string.split("\\");
    name = name[name.length - 1];

    if (name !== '') {
        $('#input-info-file-name').show();
        $('#input-info-file-name').find('.file-name').text(name);
        $('#clear-input').on('click', clearInput);

    } else {

        $('#input-info-file-name').hide();

    }
});