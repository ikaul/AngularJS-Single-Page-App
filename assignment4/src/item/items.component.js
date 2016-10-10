(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'templates/items.thtml',
    bindings: {
      items: '<'
    }
  });
})();
