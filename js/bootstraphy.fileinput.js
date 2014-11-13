/* ========================================================================
 * Bootstraphy: bootstraphy.fileinput.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/furplag/bootstraphy/blob/master/LICENSE)
 * ======================================================================== */

// VIEW CUSTOMIZE FILE-INPUT
// =========

!function ($) {
  'use strict';

  if ($('html').is('.lt-ie9')) $('.btn-fileinput').removeClass('btn-fileinput')
  $('input[type="file"].btn-fileinput').each(function (i) {
    var $this = $(this)
    var labelDefault = $this.data('label-default') ? $this.data('label-default') : 'No file chosen'
    if (!$this.prop('id')) $this.prop('id', 'bs-fileinput-' + i)

    var $label = $('<label />')
      .prop('for', $this.prop('id'))
      .text(this.files && this.files.length > 1 ? (this.files.length + ' files') : this.files && this.files.length ? this.files.item(0).name : labelDefault)
      .addClass('btn')
      .addClass($this.is(':disabled, .disabled') ? 'disabled' : '')
      .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : 'btn-default')
    if (this.files && this.files.length) $label.addClass('removable')
    if (this.files && this.files.length > 1) for (var n = 0; n < this.files.length; n++) $label.prop('title', (n ? $label.prop('title') + '\n' : '') + this.files.item(n).name)
    var $remover = $('<span title="Remove">&times;</span>')
      .on('click', function () {
        if ($label.is('.removable')) {
          $this.val('')
          $label.text(labelDefault).removeClass('removable')
        }
        return false
      })

    $this
      .after($remover)
      .after($label)
      .on('change', function () {
        $label
          .prop('title', '')
          .removeClass('removable')
          .text(this.files && this.files.length > 1 ? (this.files.length + ' files') : this.files && this.files.length ? this.files.item(0).name : labelDefault)
          .addClass(this.files && this.files.length ? 'removable' : '')
        if (this.files && this.files.length > 1) for (var n = 0; n < this.files.length; n++) $label.prop('title', (n ? $label.prop('title') + '\n' : '') + this.files.item(n).name)
      })
  })
}(jQuery)
