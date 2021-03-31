(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {

      console.log(drupalSettings.hotels, context);

    }
  };

})(Drupal, drupalSettings);
;
