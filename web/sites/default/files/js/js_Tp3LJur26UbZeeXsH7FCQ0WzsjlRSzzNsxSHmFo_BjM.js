(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      console.log(drupalSettings.hotels);
      var markup = `
      <div class="container">
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
      el: '#root',
      data: {
          newItem: {
              text: null,
              due: null,
              completed: false
          },
          todos: null,
          csrfToken: null,
          hotels: null
      },
      template: markup,
      methods: {
          addNew: function () {
              //
              app.todos.push(app.newItem);
              //
              app.newItem = {
                  text: null,
                  due: null,
                  completed: false
              };
          },
          done: (idx) => {
              app.todos[idx].completed = true;
              app.update(app.todos);
          },
          undone: (idx) => {
              app.todos[idx].completed = false;
              app.update(app.todos);
          },
          remove: (idx) => {
              //
              app.todos = app.todos.filter((item, key) => {
                  return key !== idx
              });
          },
          update: (data) => {
              //
              if(null === app.csrfToken) {
                  return;
              }
              //
              axios.put('/api/vue/todo?_format=json', data, {
                  headers: {
                      'X-CSRF-Token': app.csrfToken,
                      'Content-Type': 'application/json'
                  }
              }).then(function (response) {
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
          }
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
