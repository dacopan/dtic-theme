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
            $(area).find('[data-role=appbar]').appbar();
        } else {
            $('[data-role=appbar]').appbar();
        }
    };

})(jQuery);

$(function () {
    $.Metro.initAppBar($('body'));
});