(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);


  CategoriesController.$inject = ['categoryList'];
  function CategoriesController(categoryList) {
    var catCtrl = this;
    catCtrl.items = categoryList.data;
  };

})();
