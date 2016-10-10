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
      templateUrl: 'src/menu/home.template.html'
    })
    // Premade list pages
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/category/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categoryList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/categories/items/{categoryShortName}',
      templateUrl: 'src/item/items.template.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        itemList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        }]
      }
    });
  }

})();
