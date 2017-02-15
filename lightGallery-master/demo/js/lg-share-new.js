/*! lg-share - v1.0.2 - 2016-11-26
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

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
        facebookDropdownText: 'Facebook',
        twitter: true,
        twitterDropdownText: 'Twitter',
        googlePlus: true,
        googlePlusDropdownText: 'GooglePlus',
        pinterest: true,
        pinterestDropdownText: 'Pinterest',
        buy: true
    };

    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };


    Share.prototype.init = function() {
        var _this = this;
        var shareHtml = '<div class="bottom-tool-bar"><ul class="lg-share-list pull-left">';
        shareHtml += _this.core.s.facebook ? '<li>Share</li><li><a id="lg-share-facebook" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>' : '';
        shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>' : '';
        shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>' : '';
        shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>' : '';
        shareHtml += '</ul></span>';
        shareHtml += _this.core.s.buy ? '<ul class="buy-share"><li class="buy-btn">Buy</li></ul></div>' : '';


        this.core.$outer.find('.lg').after(shareHtml);
        //this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        //$('#lg-share').on('click.lg', function(){
        //    _this.core.$outer.toggleClass('lg-dropdown-active');
        //});

        //$('#lg-dropdown-overlay').on('click.lg', function(){
         //   _this.core.$outer.removeClass('lg-dropdown-active');
       // });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {
                $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-facebook-share-url') || window.location.href)));

                $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.core.$items.eq(index).attr('data-tweet-text') + '&url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-twitter-share-url') || window.location.href)));

                $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-googleplus-share-url') || window.location.href)));

                $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-pinterest-share-url') || window.location.href)) + '&media=' + encodeURIComponent(_this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src')) + '&description=' + _this.core.$items.eq(index).attr('data-pinterest-text'));

            }, 100);
        });
    };

    Share.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.share = Share;

})();



}));
