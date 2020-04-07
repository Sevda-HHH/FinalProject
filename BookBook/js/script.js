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
    $(".purchaseBasket").click(function() {
        // setTimeout(function() {

        //     $(".fa-check-circle").removeClass("d-none")
        //     $(".addToBasket").addClass("d-none")

        // }, 2000);
        // let id = this.attr("data-id")
        // for (elm in id) {
        //     console.log(elm)
        // }

    })



    // var logID = "log",
    //     log = $('<div id="' + logID + '"></div>');
    // $("body").append(log);
    // $('[type*="radio"]').change(function() {
    //     var me = $(this);
    //     log.html(me.attr("value"));
    // });

})