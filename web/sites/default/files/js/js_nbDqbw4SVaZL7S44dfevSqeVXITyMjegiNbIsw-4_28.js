(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      const hotel_object = drupalSettings.hotels;

      console.log(hotel_object);
      var markup = `
      <div id="app" class="hotels-container">
      testi
      {{ filters }}
      <div v-for="hotel in hotels" :key="hotel.id">
        {{ hotel.name }}
      </div>
      </div>
  `;
  
  new Vue({
      el: '#hotels-root',
      data: {
        hotels: hotel_object,
        filters: ["Finland", "Spain", "Netherlands"],
        hotels: hotel_object
      },
      template: markup,
      methods: {
      },
      mounted() {
        
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings);;
