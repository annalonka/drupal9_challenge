(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
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
            <span>Swimming pool: {{ changeBooleanToText( hotel.hasSwimmingPool  }})}}</span>
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
        filters: ["All", "Finland", "Spain", "Netherlands"],
        hotels: drupalSettings.hotels
      },
      template: markup,
      methods: {
        changeBooleanToText: (boolean) => {
          if(boolean) {
            'Yes'
          } else {
            'No'
          }
        }
      },
      mounted() {
        
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings);;
