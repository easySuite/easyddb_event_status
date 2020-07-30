/**
 * @file
 * Frontend part of event status module.
 */
(function ($) {
  "use strict";
  Drupal.behaviors.easyddb_event_status_view = {
    attach: function (context) {
      function ribbonMarkup(label, color, xPos, yPos) {
        xPos = xPos || 'right';
        yPos = yPos || 'top';
        return '<div class="ribbon ribbon-' + yPos + '-' + xPos + '"><span style="background-color: ' + color + '">' + label + '</span></div>';
      }

      function badgeMarkup(label, color) {
        return "<div class='badge' style='background-color: " + color + "'><span>" + label + "</span></div>";
      }

      // Event teasers.
      var eventTeasers = $('article.node-ding-event.node-teaser', context);
      eventTeasers.each(function (key, data) {
        var ribbonLabel = $(data).data('ribbon-label');
        var ribbonColor = $(data).data('ribbon-color');
        if (ribbonLabel !== undefined) {
          $(data).append(ribbonMarkup(ribbonLabel, ribbonColor));
        }
      });

      // Event node.
      var eventNode = $('article.node-ding-event.node-full', context);
      if (eventNode.length !== 0) {
        var nodeImage = $('.field-name-field-ding-event-title-image .field-item img', context);

        var nodeFullLabel = $(eventNode).data('ribbon-label');
        var nodeFullColor = $(eventNode).data('ribbon-color');
        if (nodeFullLabel !== undefined) {
          $(ribbonMarkup(nodeFullLabel, nodeFullColor, 'left')).insertBefore(nodeImage).attr('style', 'display: block; margin-top: -10px; margin-left: -10px');
        }
      }

      /* Nodelist displays */
      var nodelistDisplays = [
        {
          'name': 'grid_images',
          'selector': '.grid-images-event-item',
          'type': 'ribbon'
        },
        {
          'name': 'node_blocks',
          'selector': '.ding_nodelist-node_blocks article',
          'type': 'ribbon'
        },
        {
          'name': 'tabroll',
          'selector': '.ding-tabroll',
          'type': 'ribbon'
        },
        {
          'name': 'horizontal_accordion',
          'selector': '.ding_nodelist-horizontal_accordion li',
          'type': 'ribbon'
        },
        {
          'name': 'promoted_nodes',
          'selector': '.ding_nodelist-pn-item',
          'type': 'ribbon'
        },
        {
          'name': 'carousel',
          'selector': '.ding_nodelist-carousel .item',
          'type': 'badge',
          'appendTo': 'h3',
        },
        {
          'name': 'taxonomy_like',
          'selector': '.ding_nodelist-taxonomy .item',
          'type': 'badge',
          'appendTo': 'h2',
        },
        {
          'name': 'slider',
          'selector': '.ding_nodelist-slider .item',
          'type': 'badge',
          'appendTo': 'h3',
        },
        {
          'name': 'minimal_display',
          'selector': '.ding_nodelist-minimal_display table',
          'type': 'badge',
          'appendTo': '.minimal-title',
        }
      ];

      nodelistDisplays.forEach(function (value) {
        $(value.selector, context).each(function (key, data) {
          var label = $(data).data('ribbon-label');
          var color = $(data).data('ribbon-color');

          if (label !== undefined) {
            if (value.name === 'grid_images') {
              $('.ding_nodelist-grid_images').attr('style', 'padding-top: 15px');
            }
            if (value.name === 'promoted_nodes') {
              $('.ding_nodelist-promoted_nodes', context).attr('style', 'padding-top: 15px;');
            }

            if (value.type === 'ribbon') {
              $(ribbonMarkup(label, color, 'right', 'top')).appendTo(data);
              if (value.name === 'grid_images') {
                $('.ribbon').attr('style', 'right: 10px');
              }
            }
            else if (value.type === 'badge') {
              $(badgeMarkup(label, color)).appendTo($(data).find(value.appendTo));
            }
          }
        });
      }, context);
    }
  };
})(jQuery, Drupal)
