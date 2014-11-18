/* ========================================================================
 * Bootstraphy: bootstraphy.select-dropdown.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

// SELECT CONVERT TO DROPDOWN
// ==========================

!function ($) {
  'use strict';

  $('select.select-dropdown').each(function (i) {
    var $this = $(this)
    var labelDefault = $this.data('label-default') ? $this.data('label-default') : 'no Item selected'
    if (!$this.prop('id')) $this.prop('id', 'bs-select-dropdown-' + i)
    var multiple = $this.is('[multiple]') && (!$this.data('options-max') || $this.data('options-max') > 1)
    var limit = multiple && $this.data('options-max') > 1 ? $this.data('options-max') : (multiple ? $('option', $this).size() : 1)

    var $items = $('<ul class="dropdown-menu" role="menu" />')
      .prop('id', $this.prop('id') + '-menu')
      .prop('aria-labelledby', $this.prop('id') + '-btn')
      .addClass($this.is('.primary, .btn-primary') ? 'primary' : $this.is('.success, .btn-success') ? 'success' : $this.is('.info, .btn-info') ? 'info' : $this.is('.warning, .btn-warning') ? 'warning' : $this.is('.danger, .btn-danger') ? 'danger' : $this.is('.link, .btn-link') ? '' : 'default')

    $('optgroup:disabled option', $this)
      .prop('selected', false)
      .prop('disabled', true)

    var $selectedItems = $('option:selected', $this)
    if ($selectedItems > limit) {
      $selectedItems.prop('selected', false)
      $selectedItems = $('option:selected', $this)
    }
    $('option', $this).each(function () {
      var $link = $('<a role="menuitem" tabindex="-1" href="#" />')
        .attr('data-option-index', this.index)
        .html($(this).html())
        .on('click', function () {
          if ($(this).is(':disabled, .disabled')) return false
          if ($(this).parent().is(':disabled, .disabled')) return false
          if (!multiple && $(this).parent().is('active')) return false
          if ($(this).closest('ul').prev('button').is(':disabled, .disabled')) return false
          var $targetOption = $($('option', $this).get($(this).data('option-index')))
          var $selectedOptions = $('option:selected', $this)
          if (!multiple) {
            $('option', $this).prop('selected', '')
            $($targetOption).prop('selected', true)
            $('li', $(this).closest('ul')).removeClass('active')
            $(this).parent().addClass('active')
            $('.dropdown-label', $(this).closest('ul').prev('button')).html($targetOption.html())
          } else {
            $('li', $(this).closest('ul')).tooltip('destroy');
            if ($targetOption.is(':selected')) {
              $($targetOption).prop('selected', false)
              $(this).parent().removeClass('active')
              $selectedOptions = $('option:selected', $this)
            } else if ($selectedOptions.size() < limit) {
              $($targetOption).prop('selected', true)
              $(this).parent().addClass('active')
              $selectedOptions = $('option:selected', $this)
            }
            $('.dropdown-label', $(this).closest('ul').prev('button')).html($selectedOptions.size() > 1 ? ($selectedOptions.size() + ' items') : $selectedOptions.size() ? $($selectedOptions.get(0)).html() : labelDefault)
            if ($selectedOptions.size() == limit) $('li:not(.dropdown-header, .active, :disabled, .disabled)', $(this).closest('ul')).tooltip()
          }
        })
      var $item = $('<li role="presentation" />')
        .append($link)
        .addClass($(this).is(':selected') ? 'active' : $(this).is(':disabled, .disabled') ? 'disabled' : '')
        .attr('data-toggle', 'tooltip')
        .attr('data-container', 'body')
        .attr('data-trigger', 'click hover')
        .attr('data-placement', 'right')
        .attr('data-title', 'LIMIT: up to ' + limit)
      if (multiple && $selectedItems.size() == limit && !$item.is('.active, .disabled')) $item.tooltip()
      $items.append($item)
    })
    $('optgroup', $this).each(function () {
      var $item = $('<li class="dropdown-header" role="presentation" />')
        .addClass($(this).is(':disabled, .disabled') ? 'disabled' : '')
        .text($(this).prop('label'))
      $('a[data-option-index="' + ($('option:first', this).prop('index')) + '"]', $items).parent().before($item)
    })
    var $button = $('<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"></button>')
      .prop('id', $this.prop('id') + '-btn')
      .prop('aria-labelledby', $this.prop('id') + '-menu')
      .attr('data-options-max', limit)
      .addClass($this.is(':disabled, .disabled') || !$('option', $this).size() ? 'disabled' : '')
      .addClass($this.is('.input-lg, .btn-lg, .lg') ? 'btn-lg' : $this.is('.input-sm, .btn-sm, .sm') ? 'btn-sm' : $this.is('.input-xs, .btn-xs, .xs') ? 'btn-xs' : '')
      .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.success, .btn-success') ? 'btn-success' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : $this.is('.link, .btn-link') ? 'btn-link' : 'btn-default')
      .append($('<span class="dropdown-label" />').html($selectedItems.size() > 1 ? ($selectedItems.size() + ' items') : $selectedItems.size() ? $($selectedItems.get(0)).html() : labelDefault))
      .append('<span class="caret" />')

    $this
      .wrap('<div class="btn-group" />')
      .before($button)
      .before($items)
  })
}(jQuery);
