$(document).ready(function(){
   var $vg = $('.videogallery');
   
   var loadedvideo = $vg.lightGallery({
        thumbnail: false,
        autoplay: false,
        zoom: false,
        autoplayControls: false,
        fullScreen: false,
        appendCounterTo: '.bottom-tool-bar',
        videojs: true
    });
    loadedvideo.on('onAfterOpen.lg',function(event){
        var goofie = $('.lg-outer').find('.bottom-tool-bar');
        var words = $('.lg-sub-html');
        var vidwords = $('.video .lg-sub-html');
        goofie.append(words);
        words.css('display','inline-block');
    });
    
    var $lg = $('.blightgallery');
 
    var loadedgallery = $lg.lightGallery({
        thumbnail: false,
        selector: 'a',
        autoplay: false,
        index: 0,
        download: false,
        actualSize: false,
        appendCounterTo: '.bottom-tool-bar'
    });
    loadedgallery.on('onAfterOpen.lg',function(event){
        var firstie = $('.lg-outer').find('.bottom-tool-bar');
        var btn = '<ul class="buy-share"><li class="buy-btn"><a href="">Buy</a></li></ul>';
        //firstie.detach();
        firstie.append(btn);
        var goonie = $('.lg-outer').find('.buy-share');
        var caption = $('<div class="caption"><i class="fa fa-sort-up"></i></div>').insertAfter(goonie);
        var count = $('#lg-counter');
        count.insertAfter(caption);
        $('div.caption').on('click',function(e){
            e.stopPropagation(); 
            $('.lg-sub-html').slideToggle('slow',function(){
                $('.caption').toggleClass('biteme', $(this).is(':visible'));
                $('.caption i').toggleClass('fa-sort-down', $(this).is(':visible'));
            });
        });
    });
    
    $('#photos .owl-carousel, #videos .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        navText: false,
        margin: 0,
        responsiveClass: true,
        slideBy: 'page',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                center: true,
                nav: false
            },
            992: {
                items: 3,
                nav: false,
            },
            1330: {
                nav: true
            }
        }
    })
    $('#maincarousel .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: false,
        dots: false,
        autoplay: false,
        margin: 0
    });
    $('#sponsors .owl-carousel, #events .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: false,
        margin: 0,
        autoplay: false,
        stagePadding: 40,
        responsiveClass: true,
        slideBy: 'page',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true
            }
        }
    });
    var prevs = $('#sponsors .owl-carousel .owl-nav').find('.owl-prev');
    var nexts = $('#sponsors .owl-carousel .owl-nav').find('.owl-next');
    prevs.append('<i class="custom-icon custom-icon-arrow-prev"></i>');
    nexts.append('<i class="custom-icon custom-icon-arrow-next"></i>');
    var preve = $('#events .owl-carousel .owl-nav').find('.owl-prev');
    var nexte = $('#events .owl-carousel .owl-nav').find('.owl-next');
    preve.append('<i class="custom-icon custom-icon-arrow-prev"></i>');
    nexte.append('<i class="custom-icon custom-icon-arrow-next"></i>');
    var prevm = $('#maincarousel .owl-carousel .owl-nav').find('.owl-prev');
    var nextm = $('#maincarousel .owl-carousel .owl-nav').find('.owl-next');
    prevm.append('<i class="custom-icon custom-icon-arrow-prev"></i>');
    nextm.append('<i class="custom-icon custom-icon-arrow-next"></i>');
});


