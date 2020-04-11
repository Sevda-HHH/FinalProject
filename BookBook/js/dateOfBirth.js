$(document).ready(function() {
    $('.datepicker').pickadate({
        formatSubmit: 'dd-mm-yyyy',
        min: [2010, 12, 17],
        max: [2020, 01, 15],
        closeOnSelect: false,
        closeOnClear: false,
    });



    // Autotab
    $('.date-field').autotab('number');

    $('.single-date-field').mask('00/00/0000', {
        placeholder: "_ _ /_ _ /_ _ _ _"
    });
});