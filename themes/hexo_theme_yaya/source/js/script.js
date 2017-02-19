/**
 * Created by mark on 2017/1/3.
 */
+function () {
    $(window).scroll(function () {
        if($("body").scrollTop()>54){
            $('.header').addClass("is-fixed");
        }else {
            $('.header').removeClass("is-fixed");
        }
    });
    $("body").click(function () {
        $('.menu-mb').slideUp("slow");
    });
    $('.menu-mb-btn').click(function (e) {
        $('.menu-mb').slideToggle("slow");
        e.stopPropagation();
    });


}();