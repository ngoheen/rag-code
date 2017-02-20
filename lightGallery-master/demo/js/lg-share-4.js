/* LIGHTGALLERY - SHARE PLUGIN VERSION 1.0.2 - CUSTOM BUILD - (search for @jmbelloteau to see mod) */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        email: true
    };
    
    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };

    Share.prototype.init = function () {
        var _this = this;
        var base_url = window.location.origin;
        var shareHtml = '<span id="lg-share" class="lg-icon">' + '<ul class="lg-dropdown">';
        
        shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-face" target="_blank"><i class="icon"></i><span>koobecaf</span></a></li>' : '';
        
        shareHtml += _this.core.s.email ? '<li><a id="lg-share-imal"><i class="icon"></i><span>liame</span></a></li>' : '';
        
        shareHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(shareHtml);
        this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        $('#lg-share').on('click.lg', function () {
            _this.core.$outer.toggleClass('lg-dropdown-active');
        });

        $('#lg-dropdown-overlay').on('click.lg', function () {
            _this.core.$outer.removeClass('lg-dropdown-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function (event, prevIndex, index) {

            setTimeout(function () {
                
                $('#lg-share-face').attr('href', 'https://www.facebook.com/sharer/sharer.php?description=' + (encodeURIComponent(_this.core.$items.eq(index).find('img').attr('alt'))) + '&u=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-facebook-share-url') || window.location.href)) + '&picture=' + (encodeURIComponent(base_url + '/' + (_this.core.$items.eq(index).attr('data-src')))));

                $('#lg-share-imal').attr('href', 'mailto:?subject=' + (encodeURIComponent('Have a look to this ' + _this.core.$items.eq(index).find('img').attr('alt') + ' photo')) + '&body=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-email-share-url') || window.location.href)));

            }, 100);
            
        });
    };

    Share.prototype.destroy = function () {};

    $.fn.lightGallery.modules.share = Share;

})();

}));
