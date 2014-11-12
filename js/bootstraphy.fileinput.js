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

  $('input[type="file"].btn-file').each(function (i) {
    var $this = $(this);
    var labelDefault = $this.is('[data-label-default]') ? $this.prop('data-label-default') : 'no File selected';
    if (!$this.prop('id')) $this.prop('id', 'bs-fileinput-' + i)

    var $label = $('<label />');
    $label
      .prop('for', $this.prop('id'))
      .text(this.files && this.files.length > 1 ? (this.files.length + ' Files Selected.') : $this.val() ? $this.val() : labelDefault)
      .addClass('btn')
      .addClass($this.is(':disabled, .disabled') ? 'disabled' : '')
      .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : 'btn-default')
    var $remover = $('<span>&times;</span>');
    $remover
      .on('click', function () {
        $this.val('')
        $label.text(labelDefault)
        $remover.remove()
        return false
      })
    if ($label.text() !== labelDefault) {
      $this.after($remover)
      $remover
      .on('click', function () {
        $this.val('')
        $label.text(labelDefault)
        $remover.remove()
        return false
      })
    }

    $this
      .after($label)
      .on('change', function () {
        $label.text(this.files && this.files.length > 1 ? (this.files.length + ' Files Selected.') : $(this).val() ? $(this).val() : labelDefault).next('span').remove()
        if (this.files && this.files.length || $(this).val()) {
          $label.after($remover)
          $remover
          .on('click', function () {
            $this.val('')
            $label.text(labelDefault)
            $remover.remove()
            return false
          })
        }
      })
  })
}(jQuery)
