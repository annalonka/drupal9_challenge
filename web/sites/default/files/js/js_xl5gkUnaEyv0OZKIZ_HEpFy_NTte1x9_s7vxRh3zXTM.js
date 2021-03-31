(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      const hotels = drupalSettings.hotels;

      console.log(hotels);
      var markup = `
      <div id="app" class="vue-todo-container">
      testi
      </div>
  `;
  
  var app = new Vue({
      el: '#hotels-root',
      data: {
        hotels: null,
        filters: ["Finland", "Spain", "Netherlands"]
      },
      template: markup,
      methods: {
      },
      watch: {
          todos: (newTodos) => (app.update(newTodos))
      },
      mounted() {
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings);
;
