/* ========================================================================
 * Bootstraphy: bootstraphy.dropdown.js v3.2.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

//SELECT CONVERT TO DROPDOWN
//==========================
+function($) {
  'use strict';

  $('select').each(function(i) {
    var $this = $(this), _li = '<li role="presentation" />', _a = '<a role="menuitem" tabindex="-1" href="#" />';
    $this.prop('id', $this.prop('id') ? $this.prop('id') : 'dropdown_unknown_' + i).hide().wrap('<div class="btn-group"></div>');
    var _id = $this.prop('id'), _multiple = $this.is('[multiple]') && (!$this.data('options-max') || $this.data('options-max') > 1), _limit = _multiple && $this.data('options-max') > 1 ? $this.data('options-max') : (_multiple ? $('option', $this).size() : 1);

    // CREATE DROPDOWN-BUTTON
    // ======================

    var _button = $('<button type="button" id="ddl_' + _id + '" class="btn dropdown-toggle" data-toggle="dropdown"><span></span> <span class="caret"></span></button>');
    _button.addClass($this.is(':disabled, .disabled') ? 'disabled' : ''
    ).addClass($this.is('.input-lg, .btn-lg, .lg') ? 'btn-lg' : $this.is('.input-sm, .btn-sm, .sm') ? 'btn-sm' : $this.is('.input-xs, .btn-xs, .xs') ? 'btn-xs' : ''
    ).addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.info, .btn-warning') ? 'btn-warning' : $this.is('.info, .btn-danger') ? 'btn-danger' : 'btn-default'
    ).data('options-max', _limit);

    var _label = $('span:first', _button);

    // CREATE DROPDOWN-MENU
    // ======================

    var _menu = $('<ul id="menu_' + _id + '" class="dropdown-menu" role="menu" aria-labelledby="ddl_' + _id + '" />'), _tip = {'data-toggle': 'tooltip', 'data-container': 'body', 'data-trigger': 'click hover', 'data-placement': 'right', 'data-title': 'LIMIT: up to ' + _limit};
    $('optgroup:disabled option', $this).prop({'selected': false, 'disabled': true});
    var _selected = $('option:selected', $this);
    if (_selected.size() > _limit) {
     _selected.prop('selected', false);
     _selected = $('option:selected', $this);
    }
    $('option', $this).each(function() {
     var _link = $(_a).attr('data-option-index', this.index).html($(this).html());
     var _item = $(_li).append(_link).addClass($(this).is(':selected') ? 'active' : $(this).is(':disabled, .disabled') ? 'disabled' : '').attr(_tip);
     _menu.append(_item);
    });
    $('optgroup', $this).each(function() {
     $('a[data-option-index="' + ($('option:first', this).prop('index')) + '"]', _menu).parent().before($(_li).addClass('dropdown-header').text($(this).attr('label')));
    });
    if (_multiple && _selected.size() == _limit) $('li:not(.dropdown-header,.active,.disabled)', _menu).tooltip();
    _label.html(_selected.size() ? (_selected.size() > 1 ? (_selected.size() + ' Items Selected') : $(_selected.get(0)).html()) : 'Item Not Selected');

    $('a', _menu).on('click', function() {
      if ($(this).is(':disabled, .disabled')) return false;
      if ($(this).parent().is(':disabled, .disabled')) return false;
      if (_button.is(':disabled, .disabled')) return false;
      if ($this.is(':disabled, .disabled')) return false;
      var _option = $($('option', $this).get($(this).data('option-index'))), _selected = $('option:selected', $this);
      if (_multiple && _selected.size() == _limit && !_option.is(':selected')) return false;
      if (!_multiple) {
        $('option', $this).prop('selected', false);
        _option.prop('selected', true);
        _label.html(_option.html());
        $('li', $(this).parents('ul')).removeClass('active');
        $(this).parent().addClass('active');
      } else {
        $('li:not(.dropdown-header,.disabled)', _menu).tooltip('destroy');
        _option.prop('selected', !_option.prop('selected'));
        _selected = $('option:selected', $this);
        _label.html(_selected.size() ? (_selected.size() > 1 ? (_selected.size() + ' Items Selected') : $(_selected.get(0)).html()) : 'Item Not Selected');
        $(this).parent().removeClass(_option.is(':selected') ? '' : 'active').addClass(_option.is(':selected') ? 'active' : '');
        if (_selected.size() == _limit) $('li:not(.dropdown-header,.active,.disabled)', _menu).tooltip();
      }
    });

    $this.before(_button).before(_menu);
  });
  $('.dropdown-toggle.btn-primary').nextAll('.dropdown-menu').addClass('primary');
  $('.dropdown-toggle.btn-success').nextAll('.dropdown-menu').addClass('success');
  $('.dropdown-toggle.btn-info').nextAll('.dropdown-menu').addClass('info');
  $('.dropdown-toggle.btn-warning').nextAll('.dropdown-menu').addClass('warning');
  $('.dropdown-toggle.btn-danger').nextAll('.dropdown-menu').addClass('danger');
}(jQuery);