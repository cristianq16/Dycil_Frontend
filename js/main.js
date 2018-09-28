$(function () {
    "use strict";
    $(window).scroll(function() {
        var topOfWindow = $(window).scrollTop();

        $('.servicios').each(function() {
            var imagePos = $(this).offset().top;
            if (imagePos < topOfWindow + 700) {
                $(this).addClass("slideRight");
            }
        });
    });
    $('.siguiente').click ( function(){
       
        document.getElementById('principal-carouse').click();
        
        document.getElementById('segundo-carouse').click();
    });
    $('.anterior').click(function () {
        document.getElementById('segundo-carousea').click();
        document.getElementById('principa-carousea').click();
    });
    


});