(function() {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('CategoryUrl', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('ItemUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject = ['$http', 'CategoryUrl', 'ItemUrl']
  function MenuDataService($http, CategoryUrl, MenuItemUrl) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: (CategoryUrl)
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      var shortNameURl = ItemUrl + categoryShortName;
      return $http({
        method: "GET",
        url: (shortNameURl)
      });
    };
  };
})();
