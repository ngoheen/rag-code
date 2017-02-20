$(document).ready(function(){
   var $vg = $('.videogallery');
   
   var loadedvideo = $vg.lightGallery({
        thumbnail: false,
        autoplay: false,
        zoom: false,
        autoplayControls: false,
        fullScreen: false,
        counter: false
        //appendCounterTo: '.bottom-tool-bar'
        //videojs: true
    });
    loadedvideo.on('onAfterOpen.lg',function(event){
        var goofie = $('.lg-outer').find('.bottom-tool-bar');
        var words = $('.lg-sub-html');
        var vidwords = $('.video .lg-sub-html');
        goofie.append(words);
        words.css('display','inline-block');
        var arrows = $('.lg-outer').find('.lg-actions');
        arrows.css('display','none');
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
});
