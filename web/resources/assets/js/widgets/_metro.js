(function ($) {
    /*
     * Init or ReInit components
     * */
    $.Metro = function (params) {
        params = $.extend({
        }, params);
    };
    $.Metro.initAppBar = function (area) {
        if (area != undefined) {
            $(area).find('[role=menubar]').appbar();
            console.log($(area).find('[role=menubar]'));
        } else {
            console.log($('[role=menubar]'));
            $('[role=menubar]').appbar();
        }
    };

})(jQuery);

$(function () {
    $.Metro.initAppBar($('body'));
    console.log("showing content1");
    setTimeout(function() {
        console.log("showing content");
        $("#content").animate({
            opacity: 1
        }, {
            queue: false,
            duration: 350
        });
    }, 300);
});