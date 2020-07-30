/**
 * @file
 * Node edit form functionality extending.
 */

(function ($) {
  "use strict";
  Drupal.behaviors.easyddb_event_status_form = {
    attach: function (context) {
      $('.easyddb-event-status-color', context).each(function (index, textfield) {
        $(textfield).css('background-color', $(textfield).val());
        $(textfield).css('color', 'white');
      });

      $('.easyddb-event-status-color', context).on('focus', function() {
        var edit_field = this;
        var picker = $(edit_field).closest('div').parent().find('.easyddb-event-status-color-colorpicker');

        $(picker).show();
        $.farbtastic(picker, function(color) {
          edit_field.value = color;

          $(edit_field).css('background-color', color);
          $(edit_field).css('color', this.RGBToHSL(this.unpack(color))[2] > 0.5 ? '#000' : '#fff');
        }).setColor(edit_field.value);
      });
    }
  };
})(jQuery, Drupal)
