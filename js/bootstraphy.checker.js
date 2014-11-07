/* ========================================================================
 * Bootstraphy: bootstraphy.checker.js v3.2.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

//CHECKBOX/RADIO CUSTOM-VIEW
//=======================
+function ($) {
  'use strict';
  $('input[type="checkbox"],input[type="radio"]').each(function() {
    if ($(this).parent().is('.btn')) return true;
    $(this).after('<span />');
    if (/chrome/i.test(navigator.userAgent)) $(this).parent().css({'padding-top': (+$(this).parent().css('padding-top').replace(/[^0-9\.]/g, '') - 1) + 'px', 'padding-bottom': (+$(this).parent().css('padding-bottom').replace(/[^0-9\.]/g, '') - 1) + 'px'});
    if (/(msie)|(trident)/i.test(navigator.userAgent) && $(this).parent().hasClass('input-group-addon')) $(this).parent().css({'font-size': (+$(this).parent().css('font-size').replace(/[^0-9\.]/g, '') - 2) + 'px'});
  });
}(jQuery);
