(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      const hotel_object = drupalSettings.hotels;

      console.log(hotel_object);
      var markup = `
      <div id="app" class="vue-todo-container">
      testi
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
  
  const app = new Vue({
      el: '#hotels-root',
      data: {
        hotels: hotel_object,
        filters: ["Finland", "Spain", "Netherlands"],
        hotels: hotel_object
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
