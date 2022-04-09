$(document).ready(function () {
    $(".link_name").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active")
                .siblings(".link_name")
                .removeClass("active");
        }
    });

});