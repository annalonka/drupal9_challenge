(function ($, Drupal, drupalSettings, Vue) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      var markup = `
      <div class="hotels-container">
        <div class="filters">
          <select v-model="selectedFilter" @change="filterHotels($event)">
            <option
              v-for="(filter, i) in filters"
              :key="i"
            >
              {{ filter }}
            </option>
          </select>
          <input type="checkbox" id="available" @change="filterHotels($event)">
          <label for="available">Is available</label> 
        </div>
        <div class="hotels-container">
          <div 
            class="hotel-row"
            v-for="hotel in filteredHotels"
            :key="hotel.id"
          >
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + hotel.imageUrl + ')' }"></div>
            <div class="info-container">
              <div class="details">
                <div class="flex-col">
                  <span>{{ hotel.name }}</span>
                  <span>{{ hotel.city }}, {{ hotel.country }}</span>
                </div>
                <div class="flex-col">
                  <span>Available: {{ changeBooleanToText(hotel.isAvailable) }}</span>
                  <span>Swimming pool: {{ changeBooleanToText(hotel.hasSwimmingPool) }}</span>
                </div>
              </div>
              <div class="flex-col">
                <span class="price">{{ hotel.price }} €</span>
                <button class="btn">View deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
  `;
  
  const app = new Vue({
      el: '#hotels-root',
      data: {
        filters: ["All", "Finland", "Spain", "Netherlands"],
        hotels: drupalSettings.hotels,
        filteredHotels: drupalSettings.hotels,
        selectedFilter: "All",
        showAvailable: false
      },
      template: markup,
      methods: {
        changeBooleanToText(boolean) {
          if(boolean) {
            return 'Yes';
          } else {
            return 'No';
          }
        },
        filterHotels(event) {
          if (event.target.value === 'All') {
            this.filteredHotels = this.hotels
          } else if(event.target.value === 'on') {
            if(!this.showAvailable) {
              this.filteredHotels = this.hotels;
            } else {
              this.filteredHotels = this.hotels.filter(function(el) {
                return el.isAvailable === true
              });
            }
            this.showAvailable = !this.showAvailable;
            console.log(this.showAvailable)
          } else {
            this.filteredHotels = this.hotels.filter(function(el) {
              return el.country === event.target.value
            })
          }
          console.log(event.target.value)
        }
      },
      mounted() {
        this.showAvailable
      }
  });
    }
  };

})(jQuery, Drupal, drupalSettings, Vue);;
