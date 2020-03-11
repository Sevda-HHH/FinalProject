$(document).ready(function() {
    $(".fa-search").click(function() {

        $(this).addClass("d-none")
        $(".fa-times").removeClass("d-none")
        $(".search-nav").removeClass("d-none")
    })
    $(".fa-times").click(function() {
        $(this).addClass("d-none")
        $(".search-nav").addClass("d-none")
        $(".fa-search").removeClass("d-none")
    })


    var logID = "log",
        log = $('<div id="' + logID + '"></div>');
    $("body").append(log);
    $('[type*="radio"]').change(function() {
        var me = $(this);
        log.html(me.attr("value"));
    });

})