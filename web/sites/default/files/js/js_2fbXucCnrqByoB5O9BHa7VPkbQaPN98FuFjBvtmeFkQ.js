(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      const hotel_objects = drupalSettings.hotels;

      console.log(hotel_objects);
      var markup = `
      <div id="app" class="vue-todo-container">
      <div class="filters">
      <select>
        <option
          v-for="{(filter, i) in filters}"
          :key="i"
        >
          {{ filter }}
        </option>
      </select>
      <label for="available">Is available</label>
      <input type="checkbox" id="available">
    </div>
    <div class="hotels-container">
      <div 
        class="hotel-row"
        v-for="{(hotel, i) in hotels}"
      >
        {{ hotel }}
      </div>
    </div>
  
      </div>
  `;
  
  var app = new Vue({
      el: '#hotels-root',
      data: {
        hotels: null,
        filters: ["Finland", "Spain", "Netherlands"],
        hotels: hotel_objects
      },
      template: markup,
      methods: {
      },
      watch: {
          todos: (newTodos) => (app.update(newTodos))
      },
      mounted() {
        console.log(hotels)
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings);
;
