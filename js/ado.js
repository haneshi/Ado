$(function(){



    $(".notice_close, #modal_bg").click(function(){

        $("#popup, #modal_bg").hide();


    });





    var slider = $(".slide_container");
    var slideImg = (slider).find("li");
    var slideLength = slideImg.length;

    var i = 0;

    slideImg.hide();
    slideImg.first().show();

    function autoSlide(){

        if (i < slideLength - 1) {
            i++;
        } else {
            i = 0;
        }

        slideImg.eq(i).siblings().fadeOut(1000);
        slideImg.eq(i).fadeIn(2000);
        // console.log(i);        

    };
    setInterval(autoSlide, 2000);




});