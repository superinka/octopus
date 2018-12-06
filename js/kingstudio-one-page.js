(function($){

    var filterString = kingstudio_one_page_opt.filterArray;
    var navType      = kingstudio_one_page_opt.navType;
    var speed        = kingstudio_one_page_opt.speed;
    var hash         = kingstudio_one_page_opt.hash;

    if(navType == "top"){
        $('ul#header-menu').singlePageNav({
            currentClass: 'one-page-active',
            speed: speed,
            easing: "swing",
            updateHash: hash,
            filter:':not('+filterString+')'
        });
    } else {
        $('ul#one-page-bullets').singlePageNav({
            currentClass: 'one-page-active',
            speed: speed,
            easing: "swing",
            updateHash: hash,
            filter:':not('+filterString+')'
        }); 
    }

})(jQuery);