/* ========================================================================
 * Bootstraphy: bootstraphy.useragent.js v3.2.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

// DROPDOWN ADD-ON FIX
if (/chrome/i.test(navigator.userAgent)) $('.input-group-btn').addClass('chrome');

// INPUT-GROUP-ADD-ON FIX
if (/safari/i.test(navigator.userAgent)) {
  $('.input-group-lg .input-group-addon').css({ 'padding-top': '0', 'padding-bottom': '0', 'height': '44px' });
  $('.input-group-sm .input-group-addon').css({ 'padding-top': '0', 'padding-bottom': '0', 'height': '31px' });
}

// FORM PASSWORD-INPUT FIX
if (/(msie)|(trident)/i.test(navigator.userAgent)) $('input[type="password"]:focus').css({ 'line-height': '1.75 !important', 'color': '#f00' });
