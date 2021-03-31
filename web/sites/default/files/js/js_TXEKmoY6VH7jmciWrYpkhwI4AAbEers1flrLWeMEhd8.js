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
    </div>
  </div>  
  `;
  
  new Vue({
    el: '#hotels-root',
    data: {
      filters: ["All", "Finland", "Spain", "Netherlands"],
      hotels: drupalSettings.hotels,
      filteredHotels: drupalSettings.hotels,
      selectedFilter: "All",
      showAvailable: false,
      selectedFilters: {'country': 'All', 'showAvailable': false}
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
        if(event.target.value === 'on') {
          this.selectedFilters['showAvailable'] = !this.selectedFilters['showAvailable']
        } else {
          this.selectedFilters['country'] = event.target.value
        }
   
        console.log(this.selectedFilters['country'])
        console.log(this.selectedFilters['showAvailable'])

        if(this.selectedFilters['country'] === 'All' && !this.selectedFilters['showAvailable']) {
          this.filteredHotels = this.hotels
        } else {
          this.filteredHotels = this.hotels.filter(function(el) {
            return el.country === this.selectedFilters['country']
          })
        }
      }
    },
    mounted() {
      console.log(this.selectedFilters)
    }
  });
})(drupalSettings);;
