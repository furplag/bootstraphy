/* ========================================================================
 * Bootstraphy: bootstraphy.tabs.js v3.2.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

//NAV-TABS INITIALIZE
//=======================
!function($) {
  'use strict';
  $(function () {
    $('.nav-tabs').each(function (i) {
      var $this = $(this)
      var bg = $this.css('background-color')
      var transparency = /transparent|(rgb|hsl)a\([0-9\.]+(,[0-9\.]){2},0\)/i
      if (!$this.prop('id')) $this.prop('id', 'bs-nav-tabs-' + i)
      if (!bg || transparency.test(bg)) {
        bg = '#fff'
        $this.parents().each(function () {
          var parentBg = $(this).css('background-color')
          if (parentBg && !transparency.test(parentBg)) {
            bg = parentBg
            return false
          }
        })
      }
      var style = $('<style />')
      style
        .append('#' + $this.prop('id') + ' > .active > a:after {background: ' + bg + ';}')
        .append('#' + $this.prop('id') + '.nav-justified > .active > a:after {background: ' + $('#' + $this.prop('id') + ' > li > a').css('border-top-color') + ';}')
        .append('@media (min-width: 768px) {#' + $this.prop('id') + '.nav-justified > .active > a:after {background: ' + bg + ';}}')
      $('head').append(style)
    })
  })
}(jQuery)