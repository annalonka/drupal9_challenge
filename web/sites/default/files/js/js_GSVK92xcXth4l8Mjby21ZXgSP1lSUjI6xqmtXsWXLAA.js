(function ($, Drupal, drupalSettings, Vue) {

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
            <span>Swimming pool: {{ hotel.hasSwimmingPool }}</span>
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
      template: '#hotels-root',
      methods: {
        changeBooleanToText: (boolean) => {
          if(boolean) {
            return 'Yes'
          } else {
            return 'No'
          }
        }
      },
      mounted() {
        console.log(changeBooleanToText(true))
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings, Vue);;
