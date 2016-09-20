(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var buy = this;
    buy.items = ShoppingListCheckOffService.GetItemsToBuy();
    buy.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.GetBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "milk", quantity: 1 },
      { name: "chips", quantity: 5},
      { name: "sugary drinks", quantity: 10 },
      { name: "peptin bezmo", quantity: 2 }
    ];
    var boughtItems = [];

    service.GetItemsToBuy = function() {
      return toBuyItems;
    };

    service.GetBoughtItems = function() {
      return boughtItems;
    };

    service.buyItem = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  };

})();
