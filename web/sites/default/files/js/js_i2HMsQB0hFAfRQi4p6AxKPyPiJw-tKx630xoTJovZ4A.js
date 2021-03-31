(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      const hotel_object = drupalSettings.hotels;

      console.log(hotel_object);
      var markup = `
      <div id="app" class="hotels-container">
        <div class="filters">
        <select>
          <option
            v-for="(filter, i) in filters"
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
          v-for="hotel in hotels"
          :key="hotel.id"
        >
          <div class="image">
            <img src="{{ hotel.imageUrl }}" alt="{{ hotel.name }} image">
          </div>
          <div class="info">
            <span>{{ hotel.name }}</span>
            <span>{{ hotel.city }}, {{ hotel.country }}</span>
            <span>Available: {{ hotel.isAvailable }}</span>
            <span>Swimming pool: changeBooleanToText({{ hotel.hasSwimmingPool }})</span>
          </div>
          <div>
            <span>{{ hotel.price }}</span>
          </div>
        </div>
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
      methods: {
        changeBooleanToText(boolean) {
          if(boolean) {
            return 'Yes'
          } else {
            return 'No'
          }
        }
      },
      mounted() {
        
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings);;
