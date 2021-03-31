(function ($, Drupal, drupalSettings, Vue) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      var markup = `
      <div class="hotels-container">
        <div class="filters">
          <select>
            <option
              v-for="(filter, i) in filters"
              :key="i"
            >
              {{ filter }}
            </option>
          </select>
          <input type="checkbox" id="available">
          <label for="available">Is available</label> 
        </div>
        <div class="hotels-container">
          <div 
            class="hotel-row"
            v-for="hotel in hotels"
            :key="hotel.id"
          >
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + hotel.imageUrl + ')' }">
              <img :src="hotel.imageUrl" alt="Image of hotel">
            </div>
            <div class="info-container">
              <div class="details">
                <div class="flex-col">
                  <span>{{ hotel.name }}</span>
                  <span>{{ hotel.city }}, {{ hotel.country }}</span>
                </div>
                <div class="flex-col">
                  <span>Available: {{ hotel.isAvailable }}</span>
                  <span>Swimming pool: {{ hotel.hasSwimmingPool }}</span>
                </div>
              </div>
              <div class="flex-col">
                <span>{{ hotel.price }}</span>
                <button>View deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
  `;
  
  new Vue({
      el: '#hotels-root',
      data: {
        filters: ["All", "Finland", "Spain", "Netherlands"],
        hotels: drupalSettings.hotels,
        showAvailable: false
      },
      template: markup,
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
        
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings, Vue);;
