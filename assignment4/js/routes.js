(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.thtml'
    })
    // Premade list pages
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.thtml',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categoryList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/categories/items/{categoryShortName}',
      templateUrl: 'templates/items.thtml',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        itemList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        }]
      }
    });
  }

})();
