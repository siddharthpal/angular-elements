(function () {
  var app = angular.module('migration-app', ['ngMaterial', 'ngMessages']);

  app.component('cars', {
    controller: function () {
      this.cars = ['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati'];
    },
    templateUrl: 'app.html'
  });

})();
