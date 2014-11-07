/* ========================================================================
 * Bootstraphy: bootstraphy.file.js v3.2.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

//FILE UPLOAD CUSTOM-VIEW
//=======================
!function($) {
  'use strict';
  $(function(){
    $('input[type="file"]').each(function (i) {
      var $this = $(this);
      $this.css({
        position: 'absolute',
        left: '0',
        top: '0',
        width: '0'
      })
      .css('z-index', '-1')
      .wrap('<div style="position: relative;"></div>')
      if (!$this.prop('id')) $this.prop('id', 'bs-fileinput-' + i)
      var labelDefault = 'no File Select.'
      var $remover = $('<span />')
      $remover
        .css('margin-left', '1em')
        .addClass('glyphicon glyphicon-remove')
      var $label = $('<label />')
      $label
        .prop('for', $this.prop('id'))
        .append($('<span />').text(labelDefault))
        .addClass('btn')
        .addClass($this.is(':disabled, .disabled') ? 'disabled' : '')
        .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : 'btn-default')
        .css('text-align', 'left')
        .css('white-space', 'normal')

      $this
        .after($label)
        .on('change', function () {
          var label = $(this).next('label')
          var fileText = $('span:first', label)
          fileText.text(this.files && this.files.length > 1 ? (this.files.length + ' Files Selected.') : $(this).val() ? $(this).val() : labelDefault)
          if ($('span', label).size() > 1) $('span:last', label).remove()
          if (this.files && this.files.length || $(this).val()) {
            $remover.on('click', function () {
              $this.val('')
              fileText.text(labelDefault)
              $(this).remove()
              return false
            })
            fileText.after($remover)
          }
      })
    })
  })
}(jQuery)
