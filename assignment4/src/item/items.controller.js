(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['itemList'];
function ItemsController(itemList) {

  var itemsCtrl = this;

  itemsCtrl.category = itemList.data.category.name;
  itemsCtrl.items = itemList.data.menu_items;
}


})();
