(function (drupalSettings) {
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
      <div class="checkbox-container">
        <input type="checkbox" id="available" @change="filterHotels($event)">
        <label for="available">Is available</label> 
      </div>
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
          <div class="price-container">
            <span class="price">{{ hotel.price }} €</span>
            <button class="btn">View deal</button>
          </div>
        </div>
      </div>
      <div v-if="filteredHotels.length === 0">No hotels available with your criterias.</div>
    </div>
  </div>  
  `;
  
  new Vue({
    el: '#hotels-root',
    data: {
      filters: ["All", "Finland", "Spain", "Netherlands"],
      hotels: drupalSettings.hotels,
      selectedFilter: "All",
      showAvailable: false,
    },
    template: markup,
    methods: {
      changeBooleanToText(boolean) {
        return boolean ? 'Yes' : 'No';
      },
      filterHotels(event) {
        if(event.target.value === 'on') {
          this.showAvailable = !this.showAvailable;
        } else {
          this.selectedFilter = event.target.value;
        }
      }

    },
    computed: {
      filteredHotels() {
        let temp_hotels = this.hotels;
        temp_hotels = this.showAvailable ? temp_hotels.filter(hotel => hotel.isAvailable ) : temp_hotels;
        if (this.selectedFilter !== 'All') {
          temp_hotels = temp_hotels.filter(hotel => hotel.country === this.selectedFilter)
        }
        return temp_hotels
      }
    }
  });
})(drupalSettings);